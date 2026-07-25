import Link from 'next/link';
import { getSiteSettings } from '@/lib/content';
import styles from './ContactPanel.module.css';

interface Props {
  heading?: string;
  body?: string;
  /** Show the trust-fact row (used as the homepage intake moment). */
  facts?: boolean;
}

/**
 * Confident closing invitation on the deep-navy chapter — premium but proactive.
 * Opens directly with the display heading (no eyebrow formula). Reusable across
 * pages; contact details come from the central site settings.
 */
export async function ContactPanel({
  heading = 'Een project bespreken?',
  body = 'Loop uw plannen met ons door. We denken graag mee — vrijblijvend en zonder verkooppraat.',
  facts = false,
}: Props) {
  const site = await getSiteSettings();
  return (
    <section className={`on-ink ${styles.panel}`}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={`display ${styles.heading}`}>{heading}</h2>
          <div className={styles.right}>
            <p className={styles.body}>{body}</p>
            <div className={styles.actions}>
              <Link href="/start-uw-project" className={styles.primary}>
                Start uw project
              </Link>
              <a href={`tel:${site.phoneHref}`} className={styles.secondary}>
                {site.phoneDisplay}
              </a>
            </div>
            <a href={`mailto:${site.email}`} className={styles.email}>
              {site.email}
            </a>
          </div>
        </div>

        {facts && (
          <ul className={styles.facts}>
            {[
              [`${site.city} & omgeving`, 'Werkgebied'],
              ['Bouw + interieurbouw', 'Twee disciplines, één partij'],
              ['Eén aanspreekpunt', 'Van eerste schets tot oplevering'],
            ].map(([t, d]) => (
              <li key={t} className={styles.fact}>
                <span className={styles.factTitle}>{t}</span>
                <span className={styles.factLabel}>{d}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
