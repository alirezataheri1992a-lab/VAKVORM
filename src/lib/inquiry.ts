'use server';

import { site } from './site';

export interface InquiryState {
  status: 'idle' | 'success' | 'error' | 'unconfigured';
  message?: string;
  errors?: Partial<Record<'name' | 'email' | 'message', string>>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Handles a project inquiry. Server-side validation + honeypot spam protection.
 * Email delivery is env-gated: when RESEND_API_KEY is set the message is sent to the
 * owner's inbox; otherwise the form degrades gracefully and surfaces direct contact
 * details (never a fake "sent" confirmation).
 */
export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  // Honeypot — real users never fill this hidden field.
  if ((formData.get('company') as string)?.trim()) {
    return { status: 'success' }; // silently accept & drop
  }

  const name = (formData.get('name') as string)?.trim() ?? '';
  const email = (formData.get('email') as string)?.trim() ?? '';
  const phone = (formData.get('phone') as string)?.trim() ?? '';
  const projectType = (formData.get('projectType') as string)?.trim() ?? '';
  const location = (formData.get('location') as string)?.trim() ?? '';
  const message = (formData.get('message') as string)?.trim() ?? '';

  const errors: InquiryState['errors'] = {};
  if (name.length < 2) errors.name = 'Vul uw naam in.';
  if (!EMAIL_RE.test(email)) errors.email = 'Vul een geldig e-mailadres in.';
  if (message.length < 10) errors.message = 'Vertel kort iets meer over uw project.';
  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Controleer de gemarkeerde velden.', errors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO ?? site.email;
  const from = process.env.INQUIRY_FROM; // e.g. "VAKVORM <website@vakvorm.nl>"

  if (!apiKey || !from) {
    // Not yet configured — be honest rather than pretend it was sent.
    return {
      status: 'unconfigured',
      message:
        'De mailverbinding is nog niet geactiveerd. Mail of bel ons gerust direct — dan pakken we uw aanvraag persoonlijk op.',
    };
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `Nieuwe projectaanvraag — ${name}`,
        text: [
          `Naam: ${name}`,
          `E-mail: ${email}`,
          `Telefoon: ${phone || '—'}`,
          `Type project: ${projectType || '—'}`,
          `Locatie: ${location || '—'}`,
          '',
          message,
        ].join('\n'),
      }),
    });

    if (!res.ok) throw new Error(`Resend ${res.status}`);
    return { status: 'success' };
  } catch {
    return {
      status: 'error',
      message: 'Er ging iets mis bij het versturen. Probeer het later opnieuw of mail ons direct.',
    };
  }
}
