'use client';

import { useEffect, useRef, useState, type ElementType } from 'react';

interface Props {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
}

/**
 * Subtle one-shot entrance. Used sparingly and never on every section — variety is
 * intentional (avoiding the fade-up-everything AI tell). No-ops under reduced motion
 * because the CSS neutralises the transform.
 */
export function Reveal({ as, children, className = '', delay = 0 }: Props) {
  const Tag = (as ?? 'div') as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const t = window.setTimeout(() => setShown(true), delay);
            io.disconnect();
            return () => window.clearTimeout(t);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal ${className}`} data-shown={shown ? 'true' : 'false'}>
      {children}
    </Tag>
  );
}
