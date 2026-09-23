import Image from 'next/image';
import type { MediaSlot } from '@/lib/types';
import styles from './ProjectMedia.module.css';

interface Props {
  media: MediaSlot;
  priority?: boolean;
  sizes?: string;
  /** Optional caption rendered beneath the frame. */
  caption?: React.ReactNode;
  className?: string;
  /** Fill the parent's height (desktop) instead of holding the aspect ratio. */
  fill?: boolean;
  /** Tone of the reserved field while no photograph exists. */
  tone?: 'stone' | 'linen' | 'dark' | 'taupe';
}

function ratioValue(ratio: `${number}:${number}`): number {
  const [w, h] = ratio.split(':').map(Number);
  return w / h;
}

/**
 * Renders a real, optimised photograph when a src exists — with the brand's warm, neutral
 * treatment — otherwise a flat material field that holds the composition. The field is
 * honest (its label says what belongs there) but it is designed as part of the page, not
 * as a wireframe: a tone from the palette, one small label, nothing else.
 */
export function ProjectMedia({
  media,
  priority,
  sizes = '100vw',
  caption,
  className,
  fill,
  tone = 'stone',
}: Props) {
  const ar = ratioValue(media.ratio);

  return (
    <figure className={`${styles.figure} ${fill ? styles.figureFill : ''} ${className ?? ''}`}>
      <div className={`${styles.frame} ${fill ? styles.frameFill : ''}`} style={{ aspectRatio: ar }}>
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
          <div className={styles.field} data-tone={tone} role="img" aria-label={media.alt}>
            <span className={`label ${styles.fieldLabel}`}>{media.slot ?? 'Projectfoto'}</span>
          </div>
        )}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
