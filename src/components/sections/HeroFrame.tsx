'use client';

import { useEffect, useRef } from 'react';
import styles from './HeroFrame.module.css';

/**
 * The KADER moment. The moving hero starts full-bleed; as the visitor scrolls the first
 * half-screen, margins open around the image, it settles back from a slight scale and a
 * hairline frame draws inside it — the picture comes to rest in a kader. Scroll is only
 * read, never held (no pinning, no scroll-jacking), and with reduced motion nothing moves.
 */
export function HeroFrame({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const h = el.offsetHeight || window.innerHeight;
      const p = Math.min(1, Math.max(0, window.scrollY / (h * 0.5)));
      el.style.setProperty('--p', p.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div ref={ref} className={styles.frame} aria-hidden="true">
      <div className={styles.media}>{children}</div>
      <div className={styles.line} />
    </div>
  );
}
