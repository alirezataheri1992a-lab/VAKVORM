import Link from 'next/link';
import { getSiteSettings } from '@/lib/content';
import { primaryCta } from '@/lib/site';
import { homeImages } from '@/lib/media';
import { ImageFrame } from '@/components/primitives/ImageFrame';
import styles from './ContactPanel.module.css';

interface Props {
  eyebrow?: string;
  heading?: string;
  body?: string;
  /** Where the primary button goes, and what it says. */
  href?: string;
  cta?: string;
}

/**
 * The closing invitation, on taupe — the huisstijl's second dark ground, so it stays apart
 * from the charcoal footer below it. One bronze action, the phone number as the second
 * route, and a small drawn detail to the right.
 */
export async function ContactPanel({
  eyebrow = 'Ruimte maakt mogelijk',
  heading = 'Laten we uw plannen bespreken.',
  body = 'Of het nu gaat om nieuwbouw, een verbouwing of een compleet interieur — we denken graag met u mee.',
  href = primaryCta.path,
  cta = primaryCta.label,
}: Props) {
  const site = await getSiteSettings();
  const detail = homeImages.close;
  return (
    <section className={`on-taupe ${styles.panel}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <p className="label">{eyebrow}</p>
          <h2 className={`heading ${styles.heading}`}>{heading}</h2>
          <p className={styles.body}>{body}</p>
          <div className={styles.actions}>
            <Link href={href} className="btn btn--primary">
              {cta}
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <a href={`tel:${site.phoneHref}`} className={`textlink ${styles.phone}`}>
              Bel {site.phoneDisplay}
            </a>
          </div>
          <a href={`mailto:${site.email}`} className={styles.email}>
            {site.email}
          </a>
        </div>
        <ImageFrame
          className={styles.detail}
          src={detail.src}
          alt={detail.alt}
          drawing={detail.drawing}
          ratio={1}
          tone="dark"
          kader
          sizes="(max-width: 900px) 0px, 20vw"
        />
      </div>
    </section>
  );
}
