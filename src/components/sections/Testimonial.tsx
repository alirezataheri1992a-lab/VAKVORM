import type { Testimonial as TestimonialData } from '@/lib/testimonials';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import styles from './Testimonial.module.css';

/**
 * A client's words as an editorial pull-quote — serif, on stone, with the project image
 * set off-grid beside it. Not a testimonial card.
 *
 * When `placeholder` is set, a visible marker says so: sample content is never
 * presented as a genuine review.
 */
export function Testimonial({ testimonial }: { testimonial: TestimonialData }) {
  const t = testimonial;
  return (
    <section className={`on-stone ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <blockquote className={styles.quote}>
            <p className={`serif ${styles.quoteText}`}>{t.quote}</p>
            <footer className={styles.by}>
              <span className={styles.name}>{t.author}</span>
              <span className="label">{t.context}</span>
            </footer>
          </blockquote>
          {t.placeholder && (
            <span className={`label ${styles.placeholderTag}`}>
              Voorbeeldreview — wordt vervangen door een echte klantreview
            </span>
          )}
        </div>
        <ProjectMedia className={styles.media} media={t.media} tone="linen" sizes="(max-width: 900px) 100vw, 32vw" />
      </div>
    </section>
  );
}
