import Image from 'next/image';
import type { MediaSlot } from '@/lib/types';
import styles from './ProjectMedia.module.css';

interface Props {
  media: MediaSlot;
  priority?: boolean;
  sizes?: string;
  /** Optional caption rendered beneath the frame as a datum line. */
  caption?: React.ReactNode;
  className?: string;
  /** Fill the parent's height (desktop) instead of holding the aspect ratio. */
  fill?: boolean;
}

function ratioValue(ratio: `${number}:${number}`): number {
  const [w, h] = ratio.split(':').map(Number);
  return w / h;
}

/**
 * Renders a real optimised image when a src exists, otherwise a clearly-temporary
 * development placeholder that holds the intended aspect ratio. Never fabricates
 * imagery — an empty slot reads as an empty slot.
 */
export function ProjectMedia({ media, priority, sizes = '100vw', caption, className, fill }: Props) {
  const ar = ratioValue(media.ratio);

  return (
    <figure className={`${styles.figure} ${fill ? styles.figureFill : ''} ${className ?? ''}`}>
      <div
        className={`${styles.frame} ${fill ? styles.frameFill : ''}`}
        style={{ aspectRatio: ar }}
      >
        {media.src ? (
          <Image
            src={media.src}
            alt={media.alt}
            fill
            sizes={sizes}
            priority={priority}
            className={styles.img}
          />
        ) : (
          <div className={styles.placeholder} role="img" aria-label={media.alt}>
            <span className={styles.plusTL} aria-hidden="true" />
            <span className={styles.plusBR} aria-hidden="true" />
            <span className={`label ${styles.plabel}`}>
              {media.slot ? `[${media.slot}]` : '[PROJECTFOTO]'}
            </span>
            <span className={`num ${styles.pratio}`}>{media.ratio}</span>
          </div>
        )}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
