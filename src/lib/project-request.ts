'use server';

import { site } from './site';
import {
  serviceLabel,
  condQuestion,
  optionLabel,
  phaseOptions,
  timingOptions,
  contactPreferenceOptions,
  uploadLimits,
  EMAIL_RE,
  type JourneyData,
} from './journey';

export interface ProjectSubmitState {
  status: 'idle' | 'success' | 'error' | 'unconfigured' | 'server-error';
  message?: string;
  firstName?: string;
}

interface Attachment {
  filename: string;
  content: string; // base64
}

function safeName(name: string): string {
  const dot = name.lastIndexOf('.');
  const ext = dot > -1 ? name.slice(dot).toLowerCase().replace(/[^a-z0-9.]/g, '') : '';
  const base = (dot > -1 ? name.slice(0, dot) : name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48) || 'bestand';
  return `${base}${ext}`;
}

async function collectFiles(
  formData: FormData,
  keys: string[],
): Promise<{ files: Attachment[]; count: number; error?: string }> {
  const raw: File[] = [];
  for (const key of keys) {
    for (const entry of formData.getAll(key)) {
      if (entry instanceof File && entry.size > 0) raw.push(entry);
    }
  }
  if (raw.length > uploadLimits.maxFiles) {
    return { files: [], count: 0, error: `Maximaal ${uploadLimits.maxFiles} bestanden.` };
  }
  let total = 0;
  const files: Attachment[] = [];
  for (const f of raw) {
    // Never trust the extension alone — check the reported MIME against the allowlist.
    if (!uploadLimits.accept.includes(f.type)) {
      return { files: [], count: 0, error: `Bestandstype niet toegestaan: ${f.name}.` };
    }
    if (f.size > uploadLimits.maxFileBytes) {
      return { files: [], count: 0, error: `Bestand te groot (max 10 MB): ${f.name}.` };
    }
    total += f.size;
    if (total > uploadLimits.maxTotalBytes) {
      return { files: [], count: 0, error: 'De bijlagen zijn samen te groot (max 25 MB).' };
    }
    const buf = Buffer.from(await f.arrayBuffer());
    files.push({ filename: safeName(f.name), content: buf.toString('base64') });
  }
  return { files, count: files.length };
}

function buildSummary(d: JourneyData, situationCount: number, inspirationCount: number): string {
  const lines: string[] = [];
  lines.push('PROJECT');
  lines.push(d.services.map(serviceLabel).join(', ') || '—');
  for (const [qid, values] of Object.entries(d.cond)) {
    const q = condQuestion(qid);
    if (!q || !values.length) continue;
    lines.push(`  • ${q.heading} ${values.map((v) => optionLabel(q.options, v)).join(', ')}`);
  }
  lines.push('');
  lines.push('LOCATIE');
  lines.push([d.postalCode, d.city].filter(Boolean).join(' ') + (d.street ? ` — ${d.street}` : ''));
  lines.push('');
  lines.push('FASE');
  lines.push(optionLabel(phaseOptions, d.phase) || '—');
  lines.push('');
  lines.push('PLANNING');
  lines.push(optionLabel(timingOptions, d.desiredStart) || '—');
  if (d.deadline) lines.push(`Deadline: ${d.deadline}`);
  lines.push('');
  lines.push('WENSEN');
  lines.push(d.description || '—');
  if (d.inspirationUrl) lines.push(`Inspiratie: ${d.inspirationUrl}`);
  lines.push('');
  lines.push('BIJLAGEN');
  lines.push(`${situationCount} situatie-bestand(en), ${inspirationCount} inspiratie-bestand(en)`);
  lines.push('');
  lines.push('CONTACT');
  lines.push(`${d.firstName} ${d.lastName}`.trim());
  lines.push(d.email);
  if (d.phone) lines.push(d.phone);
  if (d.preferredContact) lines.push(`Voorkeur: ${optionLabel(contactPreferenceOptions, d.preferredContact)}`);
  return lines.join('\n');
}

async function sendEmail(body: Record<string, unknown>, apiKey: string): Promise<boolean> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return res.ok;
}

/**
 * Submits a VAKVORM project request. Server-side validation + honeypot/timing spam checks.
 * Delivery is env-gated: with RESEND_API_KEY set it emails the intake (with attachments)
 * to VAKVORM and sends the client a confirmation; otherwise it returns `unconfigured` and
 * the UI offers direct contact — never a fake "sent". Leads are NOT written to Sanity.
 */
export async function submitProjectRequest(formData: FormData): Promise<ProjectSubmitState> {
  // --- spam: honeypot + minimum time on task ---
  if ((formData.get('company') as string)?.trim()) return { status: 'success' };
  const startedAt = Number(formData.get('startedAt')) || 0;
  if (startedAt && Date.now() - startedAt < 3000) return { status: 'success' };

  let d: JourneyData;
  try {
    d = JSON.parse((formData.get('payload') as string) || '{}');
  } catch {
    return { status: 'error', message: 'Er ging iets mis met uw gegevens. Probeer het opnieuw.' };
  }

  // --- server-side validation ---
  if (!Array.isArray(d.services) || d.services.length === 0) {
    return { status: 'error', message: 'Kies eerst wat u wilt realiseren.' };
  }
  if (!d.firstName || d.firstName.trim().length < 2) {
    return { status: 'error', message: 'Vul uw voornaam in zodat we u kunnen aanspreken.' };
  }
  if (!EMAIL_RE.test(d.email || '')) {
    return { status: 'error', message: 'Vul een geldig e-mailadres in zodat we u kunnen bereiken.' };
  }
  if (!d.postalCode?.trim() || !d.city?.trim()) {
    return { status: 'error', message: 'Vul de postcode en plaats van het project in.' };
  }

  const situation = await collectFiles(formData, ['situationFiles', 'drawingFiles']);
  const inspiration = await collectFiles(formData, ['inspirationFiles']);
  if (situation.error) return { status: 'error', message: situation.error };
  if (inspiration.error) return { status: 'error', message: inspiration.error };

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM;
  const to = process.env.INQUIRY_TO ?? site.email;
  const summary = buildSummary(d, situation.count, inspiration.count);

  if (!apiKey || !from) {
    // Development adapter: let the whole journey be demonstrated without a provider — log
    // the intake instead of sending it, and never do this in production.
    if (process.env.NODE_ENV !== 'production') {
      console.info(`[VAKVORM DEV] Projectaanvraag ontvangen (niet verzonden — geen mailprovider):\n${summary}`);
      return { status: 'success', firstName: d.firstName };
    }
    // Production without a provider: be honest, never fake a "sent".
    return {
      status: 'unconfigured',
      message:
        'De mailverbinding is nog niet geactiveerd. Uw gegevens zijn bewaard — bel of mail ons gerust direct, dan pakken we uw project persoonlijk op.',
    };
  }

  const attachments = [...situation.files, ...inspiration.files];
  const place = d.city || 'Utrecht';
  const fullName = `${d.firstName} ${d.lastName}`.trim();

  try {
    const okInternal = await sendEmail(
      {
        from,
        to,
        reply_to: d.email,
        subject: `Nieuwe projectaanvraag — ${fullName} — ${place}`,
        text: summary,
        ...(attachments.length ? { attachments } : {}),
      },
      apiKey,
    );
    if (!okInternal) throw new Error('internal email failed');

    // Client confirmation — best-effort; failure here does not fail the submission.
    await sendEmail(
      {
        from,
        to: d.email,
        subject: 'We hebben uw projectaanvraag ontvangen | VAKVORM',
        text: [
          `Bedankt ${d.firstName},`,
          '',
          'We hebben uw projectaanvraag ontvangen. We bekijken uw informatie en nemen',
          'contact met u op om uw project verder te bespreken.',
          '',
          '— VAKVORM · Bouw & Interieur · Utrecht',
          '',
          '----------------------------------------',
          summary,
        ].join('\n'),
      },
      apiKey,
    ).catch(() => undefined);

    return { status: 'success', firstName: d.firstName };
  } catch {
    return {
      status: 'server-error',
      message:
        'Er ging iets mis bij het versturen. Uw gegevens zijn bewaard — probeer het zo opnieuw of neem direct contact op.',
    };
  }
}
