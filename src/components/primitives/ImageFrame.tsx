import Image from 'next/image';
import { ArchDrawing, type DrawingVariant } from './ArchDrawing';
import styles from './ImageFrame.module.css';

interface Props {
  src?: string;
  alt: string;
  /** The drawing shown until a photograph exists. */
  drawing: DrawingVariant;
  /** Width / height, e.g. 4 / 5. */
  ratio: number;
  /** Ground of the drawing: stone (default), paper or charcoal. */
  tone?: 'stone' | 'paper' | 'dark';
  /** Draw the KADER hairline inside the image. */
  kader?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

/**
 * One image position. A real photograph when `src` is set — warm, slightly quietened, a slow
 * settle on hover inside a link — otherwise the architectural drawing that holds the place.
 * The frame reserves its ratio, so nothing shifts when the photograph arrives.
 */
export function ImageFrame({ src, alt, drawing, ratio, tone = 'stone', kader, sizes = '100vw', priority, className }: Props) {
  return (
    <div
      className={`${styles.frame} ${kader ? 'kader' : ''} ${className ?? ''}`}
      style={{ aspectRatio: ratio }}
      data-tone={src ? undefined : tone}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={styles.img} />
      ) : (
        <div className={styles.drawing} data-drawing={drawing}>
          <ArchDrawing variant={drawing} />
        </div>
      )}
    </div>
  );
}
