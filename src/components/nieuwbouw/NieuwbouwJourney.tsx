'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { JourneyStep } from '@/lib/nieuwbouw';
import { NieuwbouwPlan } from './NieuwbouwPlan';
import styles from './nieuwbouw.module.css';

const INTAKE = '/start-uw-project?type=nieuwbouw';

/**
 * The buyer's journey as a scroll: the drawing stays in view while the steps pass; the step
 * nearest the middle of the screen is the current one and the drawing gains its layer. The
 * rail above the drawing jumps to a step. Without script — or before it runs — this is an
 * ordered list next to the finished drawing, so nothing depends on the interaction.
 *
 * It is also a configurator: only the steps marked required belong to every project. The
 * others start switched off, so nobody reads the page as a package deal; a visitor switches
 * on what they want, sees the rest dashed in the drawing, and takes that choice into the intake.
 */
export function NieuwbouwJourney({ steps }: { steps: JourneyStep[] }) {
  const [active, setActive] = useState(-1);
  const [chosen, setChosen] = useState<string[]>([]);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    setActive(0);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      // a thin band across the middle of the viewport decides which step is current
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const jump = (i: number) => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    refs.current[i]?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
  };

  const live = active >= 0;
  const optional = steps.filter((s) => !s.required);
  const isIn = (s: JourneyStep) => s.required || chosen.includes(s.id);
  const allOn = optional.every((s) => chosen.includes(s.id));
  const toggle = (id: string) =>
    setChosen((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));
  const toggleAll = () => setChosen(allOn ? [] : optional.map((s) => s.id));

  const inRoute = steps.filter(isIn);
  const outRoute = steps.filter((s) => !isIn(s));
  const anyChosen = chosen.length > 0;
  // the intake's 'Waar kunnen we u mee helpen?' answers for this route
  const scope = allOn ? ['alles'] : steps.filter((s) => chosen.includes(s.id)).flatMap((s) => s.scope);
  const href = scope.length ? `${INTAKE}&scope=${scope.join(',')}` : INTAKE;

  // the shell itself is the developer's — only the work on it can be left out
  const layers = steps.map((s) => ({
    layer: s.layer,
    discipline: s.discipline,
    skipped: live && !isIn(s) && s.layer !== 'drawing',
  }));
  const current = live ? steps[active] : undefined;
  const count = `${inRoute.length} van ${steps.length} stappen`;

  return (
    <div>
      <div className={styles.journey} data-live={live}>
        <div className={styles.stage}>
          <div className={`on-dark ${styles.stageInner}`}>
            <ol className={styles.rail} aria-label="Stappen">
              {steps.map((s, i) => (
                <li key={s.id}>
                  <button
                    type="button"
                    className={styles.railStep}
                    data-pillar={s.discipline}
                    data-state={!live || i < active ? 'done' : i === active ? 'current' : 'future'}
                    data-skipped={(live && !isIn(s)) || undefined}
                    aria-current={i === active ? 'step' : undefined}
                    aria-label={`Stap ${i + 1}: ${s.title}${live && !isIn(s) ? ' (niet gekozen)' : ''}`}
                    onClick={() => jump(i)}
                  />
                </li>
              ))}
            </ol>
            <NieuwbouwPlan layers={layers} active={active} />
            <p className={styles.stageCaption} aria-live="polite">
              {current ? (
                <>
                  <span className={styles.stageNum}>
                    {String(active + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
                  </span>
                  {current.title}
                </>
              ) : (
                'Van sleutel tot thuis'
              )}
            </p>
            {live && (
              <div className={styles.stageRoute}>
                <p>
                  Uw traject: <strong>{count}</strong>
                </p>
                <button type="button" onClick={toggleAll}>
                  {allOn ? 'Alles uitzetten' : 'Alles aanzetten'}
                </button>
                <a href="#uw-traject">Overzicht</a>
              </div>
            )}
          </div>
        </div>

        <ol className={styles.steps}>
          {steps.map((s, i) => {
            const on = isIn(s);
            return (
              <li
                key={s.id}
                id={s.id}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                data-index={i}
                data-pillar={s.discipline}
                data-state={!live ? 'static' : i === active ? 'current' : 'other'}
                data-chosen={!live || on}
                className={styles.step}
              >
                <div className={styles.stepHead}>
                  <p className={`label ${styles.stepKicker}`}>
                    {String(i + 1).padStart(2, '0')} · {s.discipline === 'bouw' ? 'Bouw' : 'Interieur'}
                  </p>
                  <span className={`label ${styles.tag}`} data-kind={s.required ? 'fixed' : 'choice'}>
                    {s.required ? 'Bij elk project' : 'Naar keuze'}
                  </span>
                </div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepHappens}>{s.happens}</p>
                {s.note && <p className={styles.stepNote}>{s.note}</p>}
                <div className={styles.stepCompare}>
                  <div>
                    <p className={`label ${styles.compareLabel}`}>Anders regelt u zelf</p>
                    <ul className={styles.chips}>
                      {s.yourself.map((y) => (
                        <li key={y}>{y}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className={`label ${styles.compareLabel}`}>Nederdam regelt</p>
                    <p className={styles.stepNederdam}>{s.nederdam}</p>
                  </div>
                </div>
                {s.required ? (
                  <p className={styles.choiceFixed}>Hoort bij elk project dat wij doen.</p>
                ) : (
                  <div className={styles.choice}>
                    <button
                      type="button"
                      className={styles.choose}
                      aria-pressed={on}
                      onClick={() => toggle(s.id)}
                    >
                      <span className={styles.box} aria-hidden="true" />
                      Dit wil ik
                    </button>
                    <p className={styles.choiceStatus} aria-live="polite">
                      {on ? 'In uw traject' : 'Niet gekozen — regelt u zelf of niet nodig'}
                    </p>
                  </div>
                )}
                {s.links && (
                  <div className={styles.stepLinks}>
                    {s.links.map((l) => (
                      <Link key={l.href} href={l.href} className="textlink">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      {/* ------------------------------------------------ the route the visitor put together */}
      <div id="uw-traject" className={styles.summary}>
        <div className={styles.summaryMain}>
          <p className="label">Uw traject</p>
          <h3 className={styles.summaryTitle}>{live ? count : 'Stel uw eigen traject samen'}</h3>
          {live ? (
            <>
              <ol className={styles.route}>
                {inRoute.map((s) => (
                  <li key={s.id} data-pillar={s.discipline}>
                    <span className={styles.routeNum}>{String(steps.indexOf(s) + 1).padStart(2, '0')}</span>
                    {s.title}
                    {s.required && <span className={styles.routeFixed}>bij elk project</span>}
                  </li>
                ))}
              </ol>
              {!anyChosen && (
                <p className={styles.summaryHint}>
                  Nog niets gekozen. Zet bij de stappen hierboven ‘Dit wil ik’ aan, of zet alles aan voor
                  het hele traject van sleutel tot thuis.
                </p>
              )}
            </>
          ) : (
            <p className={styles.summaryHint}>
              Inmeten en oplevering horen bij elk project; de rest kiest u zelf. Vertel ons in de
              aanvraag welke stappen u wilt.
            </p>
          )}
        </div>
        <div className={styles.summarySide}>
          {live && outRoute.length > 0 && (
            <div>
              <p className="label">Regelt u zelf of niet nodig</p>
              <ul className={styles.routeOut}>
                {outRoute.map((s) => (
                  <li key={s.id}>{s.title}</li>
                ))}
              </ul>
            </div>
          )}
          <div className={styles.summaryActions}>
            <Link href={href} className="btn btn--primary">
              {anyChosen ? 'Vraag een offerte aan voor deze stappen' : 'Start uw nieuwbouwproject'}
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </Link>
            {live && (
              <button type="button" className={styles.allToggle} onClick={toggleAll}>
                {allOn ? 'Alles uitzetten' : 'Alles aanzetten'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
