import Image from 'next/image';
import type { MediaSlot } from '@/lib/types';
import { ArchDrawing, type DrawingVariant } from './ArchDrawing';
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
  /** The drawing that holds the place until a photograph exists. */
  drawing?: DrawingVariant;
}

const DEFAULT_DRAWING: Record<NonNullable<Props['tone']>, DrawingVariant> = {
  stone: 'section',
  linen: 'joinery',
  dark: 'joint',
  taupe: 'wood',
};

function ratioValue(ratio: `${number}:${number}`): number {
  const [w, h] = ratio.split(':').map(Number);
  return w / h;
}

/**
 * Renders a real, optimised photograph when a src exists — with the brand's warm, neutral
 * treatment — otherwise a material field with an architectural line drawing that holds the
 * composition. No "photo follows" label: the field is part of the design, and it is
 * decorative, so assistive technology skips it.
 */
export function ProjectMedia({
  media,
  priority,
  sizes = '100vw',
  caption,
  className,
  fill,
  tone = 'stone',
  drawing,
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
          <div className={styles.field} data-tone={tone} aria-hidden="true">
            <ArchDrawing variant={drawing ?? DEFAULT_DRAWING[tone]} className={styles.fieldDrawing} />
          </div>
        )}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
