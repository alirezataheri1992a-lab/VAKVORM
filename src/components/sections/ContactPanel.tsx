import Link from 'next/link';
import { site } from '@/lib/site';
import { SectionMarker } from '@/components/primitives/SectionMarker';
import styles from './ContactPanel.module.css';

interface Props {
  eyebrow?: string;
  heading?: string;
  body?: string;
  /** Show the trust-fact row (used as the homepage intake moment). */
  facts?: boolean;
}

/**
 * Confident closing invitation on the deep-navy chapter — premium but proactive.
 * Reusable across pages. Contact details come from the central site settings.
 */
export function ContactPanel({
  eyebrow = 'Contact',
  heading = 'Een project bespreken?',
  body = 'Loop uw plannen met ons door. We denken graag mee — vrijblijvend en zonder verkooppraat.',
  facts = false,
}: Props) {
  return (
    <section className={`on-ink ${styles.panel}`}>
      <div className="container">
        <SectionMarker label={eyebrow} tone="ink" />
        <div className={styles.inner}>
          <h2 className={`display ${styles.heading}`}>{heading}</h2>
          <div className={styles.right}>
            <p className={styles.body}>{body}</p>
            <div className={styles.actions}>
              <Link href="/contact" className={styles.primary}>
                Vrijblijvend kennismaken
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
                <span className={`spec ${styles.factLabel}`}>{d}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
