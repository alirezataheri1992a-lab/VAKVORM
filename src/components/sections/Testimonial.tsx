import type { Testimonial as TestimonialData } from '@/lib/testimonials';
import { SectionMarker } from '@/components/primitives/SectionMarker';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import styles from './Testimonial.module.css';

/**
 * Client-reference chapter: the review text on the left, a project image on the right
 * with an overlapping name card. Built in VAKVORM's own system (Public Sans, navy + clay,
 * near-square shapes) — not the gold-serif reference it was inspired by.
 *
 * When `placeholder` is set the section shows a visible "voorbeeldreview" marker so sample
 * content is never mistaken for a genuine, verified review.
 */
export function Testimonial({ testimonial }: { testimonial: TestimonialData }) {
  const t = testimonial;
  return (
    <section className={`on-ink ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <SectionMarker label="Klantervaring" tone="ink" />
          <blockquote className={styles.quote}>
            <p className={styles.quoteText}>{t.quote}</p>
          </blockquote>
          {t.placeholder && (
            <span className={`spec ${styles.placeholderTag}`}>
              Voorbeeldreview — wordt vervangen door een echte klantreview
            </span>
          )}
        </div>

        <div className={styles.mediaWrap}>
          <ProjectMedia
            className={styles.media}
            media={t.media}
            sizes="(max-width: 900px) 100vw, 40vw"
          />
          <figcaption className={styles.card}>
            <span className={styles.cardName}>{t.author}</span>
            <span className={styles.cardRole}>{t.context}</span>
          </figcaption>
        </div>
      </div>
    </section>
  );
}
