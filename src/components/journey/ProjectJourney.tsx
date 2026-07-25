'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
  buildScreens,
  pruneCond,
  emptyJourney,
  applicableCondQuestions,
  condQuestion,
  serviceLabel,
  optionLabel,
  serviceOptions,
  phaseOptions,
  timingOptions,
  contactPreferenceOptions,
  normalisePostcode,
  EMAIL_RE,
  CHAPTERS,
  type JourneyData,
  type Screen,
} from '@/lib/journey';
import { submitProjectRequest, type ProjectSubmitState } from '@/lib/project-request';
import { OptionSelector } from './OptionSelector';
import { FileUploader } from './FileUploader';
import styles from './journey.module.css';

const STORAGE_KEY = 'vakvorm-project-journey';

interface Props {
  phoneDisplay: string;
  phoneHref: string;
  email: string;
}

export function ProjectJourney({ phoneDisplay, phoneHref, email }: Props) {
  const [mode, setMode] = useState<'intro' | 'journey' | 'success'>('intro');
  const [data, setData] = useState<JourneyData>(emptyJourney);
  const [index, setIndex] = useState(0);
  const [situationFiles, setSituationFiles] = useState<File[]>([]);
  const [inspirationFiles, setInspirationFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<ProjectSubmitState | undefined>();
  const [showErrors, setShowErrors] = useState(false);
  const [successName, setSuccessName] = useState('');
  const [saved, setSaved] = useState<{ data: JourneyData; index: number } | null>(null);

  const startedAt = useRef<number>(Date.now());
  const honeypot = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const screens = useMemo(() => buildScreens(data.services), [data.services]);
  const current: Screen = screens[Math.min(index, screens.length - 1)];

  // --- restore a saved session (offer to continue on the intro) ---
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { data: JourneyData; index: number };
        if (parsed?.data?.services?.length) setSaved(parsed);
      }
    } catch {
      /* ignore */
    }
  }, []);

  // --- persist safe text/selection state (never files) ---
  useEffect(() => {
    if (mode !== 'journey') return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ data, index }));
    } catch {
      /* ignore quota / privacy mode */
    }
  }, [data, index, mode]);

  // keep index valid when conditional screens appear/disappear
  useEffect(() => {
    if (index > screens.length - 1) setIndex(screens.length - 1);
  }, [screens.length, index]);

  const update = (patch: Partial<JourneyData>) => setData((d) => ({ ...d, ...patch }));

  const setServices = (next: string[]) =>
    setData((d) => pruneCond({ ...d, services: next }));

  const condValue = (qid: string) => data.cond[qid] ?? [];
  const setCond = (qid: string, values: string[]) =>
    setData((d) => ({ ...d, cond: { ...d.cond, [qid]: values } }));

  // --- per-screen validation for required moments ---
  const contactValid = data.firstName.trim().length >= 2 && EMAIL_RE.test(data.email);
  const canAdvance = (() => {
    switch (current?.kind) {
      case 'project':
        return data.services.length > 0;
      case 'location':
        return data.postalCode.trim().length > 0 && data.city.trim().length > 0;
      case 'phase':
        return data.phase !== '';
      case 'timing':
        return data.desiredStart !== '';
      case 'contact':
        return contactValid;
      default:
        return true;
    }
  })();

  const focusTop = () =>
    requestAnimationFrame(() => bodyRef.current?.querySelector<HTMLElement>('h1,h2')?.focus?.());

  const next = () => {
    if (!canAdvance) {
      setShowErrors(true);
      return;
    }
    setShowErrors(false);
    if (index < screens.length - 1) setIndex(index + 1);
    focusTop();
  };
  const back = () => {
    setShowErrors(false);
    if (index === 0) setMode('intro');
    else setIndex(index - 1);
    focusTop();
  };
  const editTo = (kind: Screen['kind']) => {
    const i = screens.findIndex((s) => s.kind === kind);
    if (i >= 0) setIndex(i);
  };

  const startJourney = () => {
    startedAt.current = Date.now();
    setMode('journey');
    setIndex(0);
  };
  const resume = () => {
    if (!saved) return;
    setData(saved.data);
    setIndex(saved.index);
    setMode('journey');
  };
  const resetSaved = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setSaved(null);
    setData(emptyJourney());
  };

  const submit = async () => {
    setSubmitting(true);
    setSubmitState(undefined);
    try {
      const fd = new FormData();
      fd.append('payload', JSON.stringify(pruneCond(data)));
      fd.append('startedAt', String(startedAt.current));
      fd.append('company', honeypot.current?.value ?? '');
      situationFiles.forEach((f) => fd.append('situationFiles', f));
      inspirationFiles.forEach((f) => fd.append('inspirationFiles', f));
      const res = await submitProjectRequest(fd);
      if (res.status === 'success') {
        setSuccessName(res.firstName || data.firstName);
        sessionStorage.removeItem(STORAGE_KEY);
        setMode('success');
      } else {
        setSubmitState(res);
      }
    } catch {
      setSubmitState({ status: 'server-error', message: 'Er ging iets mis. Probeer het zo opnieuw of neem direct contact op.' });
    } finally {
      setSubmitting(false);
    }
  };

  /* ============================== INTRO ============================== */
  if (mode === 'intro') {
    return (
      <section className={styles.dark}>
        <div className="container">
          <div className={styles.darkInner}>
            <span className={styles.introEyebrow}>VAKVORM · Bouw &amp; Interieur</span>
            <h1 className={styles.introTitle}>Start uw project.</h1>
            <p className={styles.introLede}>
              Vertel ons kort wat u wilt realiseren. We stellen een aantal gerichte vragen zodat
              we uw project vooraf goed begrijpen — daarna nemen we persoonlijk contact met u op.
            </p>
            <div className={styles.introMeta}>± 3 minuten · geen offerteverplichting</div>

            {saved ? (
              <div className={styles.resume}>
                <span>U was al begonnen met een projectaanvraag.</span>
                <button type="button" className={styles.resumeGo} onClick={resume}>
                  Verdergaan waar u gebleven was
                </button>
                <button type="button" className={styles.resumeReset} onClick={resetSaved}>
                  Opnieuw beginnen
                </button>
              </div>
            ) : (
              <div className={styles.introActions}>
                <button type="button" className={styles.introPrimary} onClick={startJourney}>
                  Start uw project
                </button>
                <span className={styles.introPhone}>
                  Liever direct contact? <a href={`tel:${phoneHref}`}>{phoneDisplay}</a>
                </span>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  /* ============================= SUCCESS ============================= */
  if (mode === 'success') {
    return (
      <section className={styles.dark}>
        <div className="container">
          <div className={styles.darkInner}>
            <span className={styles.introEyebrow}>Projectaanvraag ontvangen</span>
            <h1 className={styles.introTitle}>Bedankt{successName ? `, ${successName}` : ''}.</h1>
            <p className={styles.introLede}>We hebben uw projectaanvraag ontvangen.</p>

            <div className={styles.successSteps}>
              {[
                ['01', 'Wij bekijken uw project', 'We nemen uw wensen, projectinformatie en eventuele bijlagen door.'],
                ['02', 'We nemen contact met u op', 'We bespreken het project en de belangrijkste uitgangspunten.'],
                ['03', 'Samen bepalen we de volgende stap', 'Als het project bij VAKVORM past, bespreken we hoe we verdergaan.'],
              ].map(([n, t, d]) => (
                <div key={n} className={styles.successStep}>
                  <span className={styles.successNum}>{n}</span>
                  <div>
                    <div className={styles.successStepTitle}>{t}</div>
                    <p className={styles.successStepBody}>{d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.successActions}>
              <Link href="/" className={styles.successGhost}>Terug naar home</Link>
              <Link href="/projecten" className={styles.successGhost}>Bekijk projecten</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ============================= JOURNEY ============================= */
  const activeChapter = current.chapter;
  const chapterIndex = CHAPTERS.indexOf(activeChapter);

  return (
    <div className={styles.shell} data-chapter={activeChapter}>
      <input ref={honeypot} name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="visually-hidden" />

      <div className={styles.top}>
        <div className={`container ${styles.topInner}`}>
          <ol className={styles.progress} aria-label="Voortgang">
            {CHAPTERS.map((c, i) => (
              <li
                key={c}
                className={styles.progStep}
                data-state={i === chapterIndex ? 'active' : i < chapterIndex ? 'done' : 'todo'}
                aria-current={i === chapterIndex ? 'step' : undefined}
              >
                <span className={styles.progDot} aria-hidden="true" />
                <span className={styles.progLabel}>{c}</span>
              </li>
            ))}
          </ol>
          <span className={styles.escape}>
            Liever direct contact? <a href={`tel:${phoneHref}`}>{phoneDisplay}</a>
          </span>
        </div>
      </div>

      <div className={`container ${styles.body}`} ref={bodyRef}>
        <div className={styles.screen} data-animate="true" key={current.id}>
          {renderScreen()}

          {submitState && submitState.status !== 'idle' && (
            <p className={styles.notice} role="alert">
              {submitState.message}{' '}
              {(submitState.status === 'unconfigured' || submitState.status === 'server-error') && (
                <>
                  <a href={`mailto:${email}`}>{email}</a> · <a href={`tel:${phoneHref}`}>{phoneDisplay}</a>
                </>
              )}
            </p>
          )}

          <div className={styles.nav}>
            <button type="button" className={styles.btnSecondary} onClick={back}>
              Vorige
            </button>
            <div className={styles.spacer} />
            {current.kind === 'situation' && (
              <button type="button" className={styles.btnQuiet} onClick={next}>
                Overslaan
              </button>
            )}
            {current.kind === 'review' ? (
              <button type="button" className={styles.btnPrimary} onClick={submit} disabled={submitting}>
                {submitting ? 'Versturen…' : 'Projectaanvraag versturen'}
              </button>
            ) : (
              <button type="button" className={styles.btnPrimary} onClick={next} disabled={!canAdvance && !showErrors}>
                Verder
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  /* --------------------------- screen bodies --------------------------- */
  function Heading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
    return (
      <>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h1 className={styles.question} tabIndex={-1}>
          {children}
        </h1>
      </>
    );
  }

  function renderScreen() {
    switch (current.kind) {
      case 'project':
        return (
          <>
            <Heading eyebrow="Uw project">Wat wilt u realiseren?</Heading>
            <p className={styles.help}>Meerdere keuzes mogelijk — een project mag meerdere disciplines omvatten.</p>
            <OptionSelector
              name="services"
              type="multi"
              cols={2}
              ariaLabel="Wat wilt u realiseren?"
              options={serviceOptions.map((s) => ({ id: s.id, label: s.label, hint: s.hint }))}
              value={data.services}
              onChange={setServices}
            />
            {showErrors && !canAdvance && <p className={styles.error} style={{ marginTop: 14 }}>Kies ten minste één onderdeel om verder te gaan.</p>}
          </>
        );

      case 'cond': {
        const q = condQuestion(current.questionId!);
        if (!q) return null;
        return (
          <>
            <Heading eyebrow="Uw project">{q.heading}</Heading>
            {q.help && <p className={styles.help}>{q.help}</p>}
            <OptionSelector
              name={q.id}
              type={q.type}
              cols={q.options.length > 4 ? 2 : 1}
              ariaLabel={q.heading}
              options={q.options}
              value={condValue(q.id)}
              onChange={(v) => setCond(q.id, v)}
            />
          </>
        );
      }

      case 'location':
        return (
          <>
            <Heading eyebrow="Situatie">Waar vindt het project plaats?</Heading>
            <p className={styles.help}>
              VAKVORM is gevestigd in Utrecht en realiseert projecten in Utrecht en daarbuiten. Een
              volledig adres is nu nog niet nodig.
            </p>
            <div className={styles.fields}>
              <div className={`${styles.row2} ${styles.row2Small}`}>
                <div className={styles.field}>
                  <label className={styles.flabel} htmlFor="postcode">Postcode</label>
                  <input
                    id="postcode"
                    className={styles.input}
                    value={data.postalCode}
                    inputMode="text"
                    autoComplete="postal-code"
                    placeholder="3581 AB"
                    onChange={(e) => update({ postalCode: e.target.value })}
                    onBlur={(e) => update({ postalCode: normalisePostcode(e.target.value) })}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.flabel} htmlFor="plaats">Plaats</label>
                  <input
                    id="plaats"
                    className={styles.input}
                    value={data.city}
                    autoComplete="address-level2"
                    placeholder="Utrecht"
                    onChange={(e) => update({ city: e.target.value })}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.flabel} htmlFor="straat">
                  Straat &amp; huisnummer <span className={styles.opt}>— optioneel</span>
                </label>
                <input
                  id="straat"
                  className={styles.input}
                  value={data.street}
                  autoComplete="street-address"
                  onChange={(e) => update({ street: e.target.value })}
                />
              </div>
              {showErrors && !canAdvance && <p className={styles.error}>Vul de postcode en plaats van het project in.</p>}
            </div>
          </>
        );

      case 'phase':
        return (
          <>
            <Heading eyebrow="Situatie">Hoe ver bent u met uw plannen?</Heading>
            <OptionSelector
              name="phase"
              type="single"
              ariaLabel="Hoe ver bent u met uw plannen?"
              options={phaseOptions}
              value={data.phase ? [data.phase] : []}
              onChange={(v) => update({ phase: v[0] ?? '' })}
            />
            {showErrors && !canAdvance && <p className={styles.error} style={{ marginTop: 14 }}>Kies wat het beste past.</p>}
          </>
        );

      case 'situation': {
        const wantsDrawings =
          condValue('drawings').some((v) => v === 'ja' || v === 'in-ontwikkeling') ||
          data.phase === 'ontwerp';
        return (
          <>
            <Heading eyebrow="Situatie">Laat ons de situatie zien.</Heading>
            <p className={styles.help}>
              Foto&apos;s helpen ons om vooraf een beter beeld van uw project te krijgen.
              {wantsDrawings ? ' Heeft u tekeningen of een plattegrond? Voeg ze hier gerust toe.' : ''}{' '}
              Deze stap is optioneel.
            </p>
            <FileUploader
              files={situationFiles}
              onChange={setSituationFiles}
              title={wantsDrawings ? 'Foto’s, tekeningen of plattegrond' : 'Sleep foto’s hierheen'}
              hint="JPG, PNG, WEBP of PDF · max 10 MB per bestand"
            />
          </>
        );
      }

      case 'plans':
        return (
          <>
            <Heading eyebrow="Wensen">Vertel ons wat u voor ogen heeft.</Heading>
            <p className={styles.help}>Wat wilt u veranderen en wat vindt u belangrijk in het eindresultaat?</p>
            <div className={styles.fields}>
              <div className={styles.field}>
                <textarea
                  className={styles.textarea}
                  value={data.description}
                  placeholder="Bijv. we willen de begane grond openmaken en een uitbouw aan de achterzijde, met een strak afgewerkt interieur…"
                  onChange={(e) => update({ description: e.target.value })}
                  aria-label="Uw wensen"
                />
              </div>
              <div className={styles.field}>
                <label className={styles.flabel} htmlFor="inspiratie-url">
                  Heeft u voorbeelden van wat u mooi vindt? <span className={styles.opt}>— optioneel</span>
                </label>
                <input
                  id="inspiratie-url"
                  className={styles.input}
                  type="url"
                  inputMode="url"
                  placeholder="Link naar een Pinterest-bord of moodboard"
                  value={data.inspirationUrl}
                  onChange={(e) => update({ inspirationUrl: e.target.value })}
                />
              </div>
              <FileUploader
                files={inspirationFiles}
                onChange={setInspirationFiles}
                title="Voeg inspiratiebeelden toe"
                hint="Optioneel · JPG, PNG, WEBP of PDF"
              />
            </div>
          </>
        );

      case 'timing':
        return (
          <>
            <Heading eyebrow="Planning">Wanneer zou u idealiter willen starten?</Heading>
            <OptionSelector
              name="timing"
              type="single"
              cols={2}
              ariaLabel="Wanneer zou u idealiter willen starten?"
              options={timingOptions}
              value={data.desiredStart ? [data.desiredStart] : []}
              onChange={(v) => update({ desiredStart: v[0] ?? '' })}
            />
            <div className={styles.fields}>
              <div className={styles.field}>
                <label className={styles.flabel} htmlFor="deadline">
                  Is er een belangrijke deadline? <span className={styles.opt}>— optioneel</span>
                </label>
                <input
                  id="deadline"
                  className={styles.input}
                  value={data.deadline}
                  placeholder="Bijv. graag klaar voor de zomer"
                  onChange={(e) => update({ deadline: e.target.value })}
                />
              </div>
            </div>
            {showErrors && !canAdvance && <p className={styles.error} style={{ marginTop: 14 }}>Kies een indicatie — dit mag globaal.</p>}
          </>
        );

      case 'contact':
        return (
          <>
            <Heading eyebrow="Contact">Bijna klaar.</Heading>
            <p className={styles.help}>Waar kunnen we u bereiken om uw project te bespreken?</p>
            <div className={styles.fields}>
              <div className={styles.row2}>
                <div className={styles.field}>
                  <label className={styles.flabel} htmlFor="voornaam">Voornaam</label>
                  <input id="voornaam" className={styles.input} autoComplete="given-name" value={data.firstName} onChange={(e) => update({ firstName: e.target.value })} />
                </div>
                <div className={styles.field}>
                  <label className={styles.flabel} htmlFor="achternaam">Achternaam <span className={styles.opt}>— optioneel</span></label>
                  <input id="achternaam" className={styles.input} autoComplete="family-name" value={data.lastName} onChange={(e) => update({ lastName: e.target.value })} />
                </div>
              </div>
              <div className={styles.row2}>
                <div className={styles.field}>
                  <label className={styles.flabel} htmlFor="email">E-mail</label>
                  <input id="email" className={styles.input} type="email" autoComplete="email" value={data.email} onChange={(e) => update({ email: e.target.value })} />
                  {showErrors && !EMAIL_RE.test(data.email) && <span className={styles.error}>Vul een geldig e-mailadres in zodat we u kunnen bereiken.</span>}
                </div>
                <div className={styles.field}>
                  <label className={styles.flabel} htmlFor="telefoon">Telefoon <span className={styles.opt}>— optioneel</span></label>
                  <input id="telefoon" className={styles.input} type="tel" autoComplete="tel" value={data.phone} onChange={(e) => update({ phone: e.target.value })} />
                </div>
              </div>
              <div className={styles.field}>
                <span className={styles.flabel}>Voorkeur voor contact <span className={styles.opt}>— optioneel</span></span>
                <OptionSelector
                  name="preferredContact"
                  type="single"
                  cols={2}
                  ariaLabel="Voorkeur voor contact"
                  options={contactPreferenceOptions}
                  value={data.preferredContact ? [data.preferredContact] : []}
                  onChange={(v) => update({ preferredContact: v[0] ?? '' })}
                />
              </div>
              {showErrors && data.firstName.trim().length < 2 && <p className={styles.error}>Vul uw voornaam in.</p>}
            </div>
          </>
        );

      case 'review':
        return renderReview();

      default:
        return null;
    }
  }

  function renderReview() {
    const conds = applicableCondQuestions(data.services)
      .map((q) => ({ q, values: data.cond[q.id] ?? [] }))
      .filter((x) => x.values.length);
    const attachments = situationFiles.length + inspirationFiles.length;

    const Row = ({ label, edit, children }: { label: string; edit?: Screen['kind']; children: React.ReactNode }) => (
      <div className={styles.sumRow}>
        <span className={styles.sumKey}>{label}</span>
        <div className={styles.sumVal}>{children}</div>
        {edit && (
          <button type="button" className={styles.edit} onClick={() => editTo(edit)}>
            Wijzigen
          </button>
        )}
      </div>
    );

    return (
      <>
        <Heading eyebrow="Bijna klaar">Uw project</Heading>
        <p className={styles.help}>Controleer uw aanvraag. U kunt elk onderdeel nog aanpassen.</p>

        <div className={styles.summary}>
          <Row label="Project" edit="project">
            {data.services.map(serviceLabel).join(', ') || <span className={styles.sumMuted}>—</span>}
            {conds.map(({ q, values }) => (
              <p key={q.id} className={styles.sumMuted} style={{ fontSize: '0.92rem' }}>
                {q.heading} {values.map((v) => optionLabel(q.options, v)).join(', ')}
              </p>
            ))}
          </Row>
          <Row label="Locatie" edit="location">
            {[data.postalCode, data.city].filter(Boolean).join(' ') || <span className={styles.sumMuted}>—</span>}
            {data.street ? ` — ${data.street}` : ''}
          </Row>
          <Row label="Fase" edit="phase">
            {optionLabel(phaseOptions, data.phase) || <span className={styles.sumMuted}>—</span>}
          </Row>
          <Row label="Wensen" edit="plans">
            {data.description ? <p>{data.description}</p> : <span className={styles.sumMuted}>—</span>}
            {data.inspirationUrl && <p className={styles.sumMuted} style={{ fontSize: '0.92rem' }}>Inspiratie: {data.inspirationUrl}</p>}
          </Row>
          <Row label="Planning" edit="timing">
            {optionLabel(timingOptions, data.desiredStart) || <span className={styles.sumMuted}>—</span>}
            {data.deadline ? ` · ${data.deadline}` : ''}
          </Row>
          <Row label="Bijlagen" edit="situation">
            {attachments > 0 ? `${attachments} bestand(en)` : <span className={styles.sumMuted}>Geen</span>}
          </Row>
          <Row label="Contact" edit="contact">
            {`${data.firstName} ${data.lastName}`.trim() || <span className={styles.sumMuted}>—</span>}
            <p className={styles.sumMuted} style={{ fontSize: '0.92rem' }}>
              {[data.email, data.phone].filter(Boolean).join(' · ')}
              {data.preferredContact ? ` · ${optionLabel(contactPreferenceOptions, data.preferredContact)}` : ''}
            </p>
          </Row>
        </div>

        <p className={styles.consent}>
          Door uw projectaanvraag te versturen, gebruikt VAKVORM uw gegevens uitsluitend om
          contact met u op te nemen over uw aanvraag. Lees ons <Link href="/privacy">privacybeleid</Link>.
        </p>
      </>
    );
  }
}
