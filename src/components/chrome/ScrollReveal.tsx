'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Site-wide scroll reveal with deliberate variety — motion follows content, it is not a
 * uniform effect (a uniform fade-up on every section is exactly the template signature
 * we avoid). The rule set:
 *
 *   1. Dark (navy) chapters — the statement, testimonial, conversion — do NOT animate.
 *      Stillness gives them weight and creates contrast with the moving sections.
 *   2. Full-bleed photography (a section that is only media, e.g. the craft moment)
 *      reveals with a slow mask/crop — an image treatment, not a UI treatment.
 *   3. Ordinary light content rises gently.
 *
 * Principles kept from before: the hidden state is added by JS only (no-JS and
 * reduced-motion visitors always see content), above-the-fold is never hidden, and
 * full-bleed colour sections animate their inner content so backgrounds never gap.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section'));
    if (!sections.length) return;

    interface Target {
      el: HTMLElement;
      cls: 'reveal-on-scroll' | 'reveal-mask-on-scroll';
    }
    const targets: Target[] = [];

    for (const sec of sections) {
      // Rule 1 — navy chapters hold still.
      if (sec.classList.contains('on-ink')) continue;

      const inner = sec.querySelector<HTMLElement>(':scope > .container');
      if (inner) {
        targets.push({ el: inner, cls: 'reveal-on-scroll' });
        continue;
      }
      // Rule 2 — a container-less section that is pure media gets the mask reveal.
      if (sec.querySelector('figure, video, img')) {
        targets.push({ el: sec, cls: 'reveal-mask-on-scroll' });
      } else {
        targets.push({ el: sec, cls: 'reveal-on-scroll' });
      }
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -8% 0px' },
    );

    const vh = window.innerHeight;
    const hidden: Target[] = [];
    targets.forEach((t) => {
      // Only hide (and later reveal) content that starts below the fold.
      if (t.el.getBoundingClientRect().top >= vh * 0.9) {
        t.el.classList.add(t.cls);
        io.observe(t.el);
        hidden.push(t);
      }
    });

    return () => {
      io.disconnect();
      hidden.forEach((t) => t.el.classList.remove(t.cls, 'is-revealed'));
    };
  }, [pathname]);

  return null;
}
