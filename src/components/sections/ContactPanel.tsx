import Link from 'next/link';
import { site } from '@/lib/site';
import { SectionMarker } from '@/components/primitives/SectionMarker';
import styles from './ContactPanel.module.css';

interface Props {
  eyebrow?: string;
  heading?: string;
  body?: string;
}

/**
 * Quiet, confident closing invitation — not an aggressive lead-gen CTA.
 * Reusable across pages. Contact details come from the central site settings.
 */
export function ContactPanel({
  eyebrow = 'Contact',
  heading = 'Een project bespreken?',
  body = 'Loop uw plannen met ons door. We denken graag mee — vrijblijvend en zonder verkooppraat.',
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
                Offerte aanvragen
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
      </div>
    </section>
  );
}
