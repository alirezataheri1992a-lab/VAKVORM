'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { stepTrades, type JourneyPreset, type JourneyStep } from '@/lib/nieuwbouw';
import { NieuwbouwPlan } from './NieuwbouwPlan';
import styles from './builder.module.css';

const INTAKE = '/start-uw-project?type=nieuwbouw';
const STORAGE_KEY = 'nederdam-nieuwbouw-traject';

interface Props {
  steps: JourneyStep[];
  presets: JourneyPreset[];
  /** The preset the route starts from (a link can set it with ?start=). */
  initialPreset: string;
  /** True when the page was opened with an explicit ?start= — then a saved route is ignored. */
  presetFromLink: boolean;
  phoneDisplay: string;
  phoneHref: string;
}

/**
 * The route builder: pick a starting point, adjust it step by step, and take exactly that
 * route into the intake. The required steps are always in; every other step can be added or
 * left out. The count of trades is the trades named in the chosen steps — no invented figures.
 */
export function NieuwbouwBuilder({
  steps,
  presets,
  initialPreset,
  presetFromLink,
  phoneDisplay,
  phoneHref,
}: Props) {
  const optional = steps.filter((s) => !s.required);
  const presetSteps = (id: string) => presets.find((p) => p.id === id)?.steps ?? [];
  const [chosen, setChosen] = useState<string[]>(() => presetSteps(initialPreset));
  const [barHidden, setBarHidden] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const restored = useRef(false);

  // come back from the intake to the route you left — unless a link asked for a preset
  useEffect(() => {
    if (!presetFromLink) {
      try {
        const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? 'null');
        if (Array.isArray(saved)) setChosen(saved.filter((id) => optional.some((s) => s.id === id)));
      } catch {
        /* ignore */
      }
    }
    restored.current = true;
  }, []); // once, on arrival

  useEffect(() => {
    if (!restored.current) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(chosen));
    } catch {
      /* ignore quota / privacy mode */
    }
  }, [chosen]);

  // on a small screen a bar keeps the count and the button in reach until the panel shows
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => setBarHidden(e.isIntersecting || e.boundingClientRect.top < 0),
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isIn = (s: JourneyStep) => s.required || chosen.includes(s.id);
  const toggle = (id: string) =>
    setChosen((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));
  const same = (a: string[], b: string[]) => a.length === b.length && a.every((x) => b.includes(x));
  const activePreset = presets.find((p) => same(p.steps, chosen));

  const inRoute = steps.filter(isIn);
  const allOn = optional.every((s) => chosen.includes(s.id));
  const scope = allOn ? ['alles'] : steps.filter((s) => chosen.includes(s.id)).flatMap((s) => s.scope);
  const href = scope.length ? `${INTAKE}&scope=${scope.join(',')}` : INTAKE;
  const trades = new Set(inRoute.flatMap(stepTrades)).size;

  const layers = steps.map((s) => ({
    layer: s.layer,
    discipline: s.discipline,
    // the shell itself is the developer's — only the work on it can be left out
    skipped: !isIn(s) && s.layer !== 'drawing',
  }));

  const count = (
    <>
      <strong>{inRoute.length}</strong> van {steps.length} stappen
    </>
  );
  const gain =
    trades >= 2 ? (
      <>
        1 aanspreekpunt in plaats van <strong>{trades} vakmensen</strong>
      </>
    ) : null;
  const cta = chosen.length ? 'Vraag een offerte aan voor deze stappen' : 'Vraag een offerte aan';

  return (
    <div className={styles.builder}>
      <div className={styles.main}>
        {/* ------------------------------------------------ 1 · a starting point */}
        <section aria-labelledby="startpunt">
          <p id="startpunt" className={`label ${styles.stepLabel}`}>
            <span>1</span> Kies een startpunt
          </p>
          <div className={styles.presets}>
            {presets.map((p) => (
              <button
                key={p.id}
                type="button"
                className={styles.preset}
                aria-pressed={activePreset?.id === p.id}
                onClick={() => setChosen(p.steps)}
              >
                <span className={styles.presetHead}>
                  <span className={styles.presetTitle}>{p.title}</span>
                  {p.recommended && <span className={`label ${styles.badge}`}>Aanbevolen</span>}
                </span>
                <span className={styles.presetText}>{p.text}</span>
                <span className={styles.presetCount}>
                  {steps.filter((s) => s.required || p.steps.includes(s.id)).length} stappen
                </span>
              </button>
            ))}
          </div>
          <p className={styles.custom} aria-live="polite">
            {activePreset ? '' : 'Eigen samenstelling — u heeft het startpunt aangepast.'}
          </p>
        </section>

        {/* ------------------------------------------------ 2 · adjust per step */}
        <section aria-labelledby="per-stap">
          <p id="per-stap" className={`label ${styles.stepLabel}`}>
            <span>2</span> Pas het aan per stap
          </p>
          <ol className={styles.cards}>
            {steps.map((s, i) => {
              const on = isIn(s);
              const own = stepTrades(s);
              return (
                <li key={s.id} className={styles.card} data-in={on} data-pillar={s.discipline}>
                  <span className={styles.cardNum}>{String(i + 1).padStart(2, '0')}</span>
                  <div className={styles.cardBody}>
                    <p className={`label ${styles.cardKicker}`}>
                      {s.discipline === 'bouw' ? 'Bouw' : 'Interieur'}
                      {s.required && <span className={styles.fixed}>Bij elk project</span>}
                    </p>
                    <h3 className={styles.cardTitle}>{s.title}</h3>
                    <p className={styles.cardShort}>{s.short}</p>
                    {s.note && <p className={styles.cardNote}>{s.note}</p>}
                    {!on && own.length > 0 && (
                      <p className={styles.cardYourself}>Zelf regelen: {own.join(', ')}</p>
                    )}
                    <Link href={`/nieuwbouw#${s.id}`} className={styles.cardMore}>
                      Meer over deze stap
                    </Link>
                  </div>
                  <div className={styles.cardAction}>
                    {s.required ? (
                      <span className={styles.included}>
                        <span className={styles.box} aria-hidden="true" />
                        Altijd inbegrepen
                      </span>
                    ) : (
                      <button
                        type="button"
                        className={styles.add}
                        aria-pressed={on}
                        aria-label={`${s.title} in uw traject`}
                        onClick={() => toggle(s.id)}
                      >
                        <span className={styles.box} aria-hidden="true" />
                        {on ? 'In uw traject' : 'Toevoegen'}
                      </button>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      </div>

      {/* ------------------------------------------------ the route, always in view */}
      <aside className={styles.side} aria-label="Uw traject">
        <div ref={panelRef} className={`on-dark ${styles.panel}`}>
          <p className="label">Uw traject · {activePreset ? activePreset.title : 'Eigen samenstelling'}</p>
          <p className={styles.count} aria-live="polite">
            {count}
          </p>
          {gain && <p className={styles.gain}>{gain}</p>}
          <NieuwbouwPlan layers={layers} active={-1} className={styles.plan} />
          <ol className={styles.summary}>
            {steps.map((s) => (
              <li key={s.id} data-in={isIn(s)} data-pillar={s.discipline}>
                {s.title}
              </li>
            ))}
          </ol>
          <Link href={href} className={`btn btn--primary ${styles.cta}`}>
            {cta}
            <span className="btn-arrow" aria-hidden="true">
              →
            </span>
          </Link>
          <p className={styles.call}>
            Liever eerst overleggen? <a href={`tel:${phoneHref}`}>Bel {phoneDisplay}</a>
          </p>
        </div>
      </aside>

      {/* ------------------------------------------------ small screens */}
      <div className={`on-dark ${styles.bar}`} data-hidden={barHidden} aria-hidden={barHidden}>
        <p className={styles.barText}>
          <span>{count}</span>
          {trades >= 2 && (
            <span className={styles.barGain}>
              1 aanspreekpunt i.p.v. <strong>{trades} vakmensen</strong>
            </span>
          )}
        </p>
        <Link href={href} className="btn btn--primary" tabIndex={barHidden ? -1 : undefined}>
          Offerte
          <span className="btn-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
