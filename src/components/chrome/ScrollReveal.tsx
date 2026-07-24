'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Global scroll-reveal. Mounted once in the root layout, it gives every page a subtle
 * rise-and-fade as sections enter the viewport — without wrapping each section by hand.
 *
 * Principles:
 * - Progressive enhancement: the hidden state is added by JS, so no-JS / reduced-motion
 *   visitors always see content. Nothing can get stuck invisible.
 * - Above-the-fold content is never hidden (protects the hero / LCP, avoids a flash).
 * - For full-bleed colour chapters it animates the inner `.container` (not the section
 *   background), so there is no colour gap during the movement.
 * - Re-runs on client-side navigation; respects `prefers-reduced-motion`.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section'));
    if (!sections.length) return;

    // Choose what to animate for each section: the inner content wrapper of a full-bleed
    // section (so its background stays put), otherwise the section itself.
    const targets = sections.map((sec) => {
      const inner = sec.querySelector<HTMLElement>(':scope > .container');
      return inner ?? sec;
    });

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
    const hidden: HTMLElement[] = [];
    targets.forEach((el) => {
      // Only hide (and later reveal) content that starts below the fold.
      if (el.getBoundingClientRect().top >= vh * 0.9) {
        el.classList.add('reveal-on-scroll');
        io.observe(el);
        hidden.push(el);
      }
    });

    return () => {
      io.disconnect();
      // Clean up so a re-run (route change) starts from a known state.
      hidden.forEach((el) => el.classList.remove('reveal-on-scroll', 'is-revealed'));
    };
  }, [pathname]);

  return null;
}
