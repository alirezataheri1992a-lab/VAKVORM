'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './HeroVideo.module.css';

interface Props {
  src: string;
  poster: string;
  /** object-position for the cover-crop, e.g. "50% 25%". */
  objectPosition?: string;
}

/**
 * Cinematic hero background. The poster image is always painted first (instant, no
 * layout shift, good LCP) and stays as the fallback. The moving video is layered on
 * top only when the visitor has NOT requested reduced motion — and if autoplay is
 * refused, the poster simply remains visible. The video is decorative: it carries no
 * information the hero text doesn't already state, so it is hidden from assistive tech.
 */
export function HeroVideo({ src, poster, objectPosition }: Props) {
  const [play, setPlay] = useState(false);
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return; // reduced motion → keep the still poster, never autoplay
    setPlay(true);
  }, []);

  useEffect(() => {
    if (play) ref.current?.play().catch(() => {}); // autoplay blocked → poster stays
  }, [play]);

  const style = objectPosition ? { objectPosition } : undefined;

  return (
    <div className={styles.media} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={poster} alt="" className={styles.layer} style={style} />
      {play && (
        <video
          ref={ref}
          className={styles.layer}
          data-playing={playing ? 'true' : 'false'}
          style={style}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          tabIndex={-1}
          onPlaying={() => setPlaying(true)}
        />
      )}
    </div>
  );
}
