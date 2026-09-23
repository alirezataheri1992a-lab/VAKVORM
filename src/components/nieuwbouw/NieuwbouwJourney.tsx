'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { JourneyStep } from '@/lib/nieuwbouw';
import { NieuwbouwPlan } from './NieuwbouwPlan';
import styles from './nieuwbouw.module.css';

/**
 * The buyer's journey as a scroll: the drawing stays in view while the steps pass; the step
 * nearest the middle of the screen is the current one and the drawing gains its layer. The
 * rail above the drawing jumps to a step. Without script — or before it runs — this is an
 * ordered list next to the finished drawing, so nothing depends on the interaction.
 *
 * This is the explanation only. Each step says whether it belongs to every project or can be
 * chosen separately; choosing happens in the route builder (/nieuwbouw/traject-samenstellen).
 */
export function NieuwbouwJourney({ steps }: { steps: JourneyStep[] }) {
  const [active, setActive] = useState(-1);
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

  const layers = steps.map((s) => ({ layer: s.layer, discipline: s.discipline }));
  const current = active >= 0 ? steps[active] : undefined;

  return (
    <div className={styles.journey} data-live={active >= 0}>
      <div className={styles.stage}>
        <div className={`on-dark ${styles.stageInner}`}>
          <ol className={styles.rail} aria-label="Stappen">
            {steps.map((s, i) => (
              <li key={s.id}>
                <button
                  type="button"
                  className={styles.railStep}
                  data-pillar={s.discipline}
                  data-state={active < 0 || i < active ? 'done' : i === active ? 'current' : 'future'}
                  aria-current={i === active ? 'step' : undefined}
                  aria-label={`Stap ${i + 1}: ${s.title}`}
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
        </div>
      </div>

      <ol className={styles.steps}>
        {steps.map((s, i) => (
          <li
            key={s.id}
            id={s.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-index={i}
            data-pillar={s.discipline}
            data-state={active < 0 ? 'static' : i === active ? 'current' : 'other'}
            className={styles.step}
          >
            <div className={styles.stepHead}>
              <p className={`label ${styles.stepKicker}`}>
                {String(i + 1).padStart(2, '0')} · {s.discipline === 'bouw' ? 'Bouw' : 'Interieur'}
              </p>
              <span className={`label ${styles.tag}`} data-kind={s.required ? 'fixed' : 'choice'}>
                {s.required ? 'Bij elk project' : 'Los te kiezen'}
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
        ))}
      </ol>
    </div>
  );
}
