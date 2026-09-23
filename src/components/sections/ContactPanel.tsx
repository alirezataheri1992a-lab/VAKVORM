import Link from 'next/link';
import { getSiteSettings } from '@/lib/content';
import styles from './ContactPanel.module.css';

interface Props {
  heading?: string;
  body?: string;
  /** Where the primary button goes, and what it says. */
  href?: string;
  cta?: string;
}

/**
 * The closing invitation: a charcoal chapter, the statement in serif on the left, the
 * practical route on the right. One thin-border button, one phone number, one address.
 */
export async function ContactPanel({
  heading = 'Een project bespreken?',
  body = 'Loop uw plannen met ons door. We denken graag mee — vrijblijvend en zonder verkooppraat.',
  href = '/start-uw-project',
  cta = 'Offerte aanvragen',
}: Props) {
  const site = await getSiteSettings();
  return (
    <section className={`on-dark ${styles.panel}`}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={`display ${styles.heading}`}>{heading}</h2>
          <div className={styles.right}>
            <p className={styles.body}>{body}</p>
            <div className={styles.actions}>
              <Link href={href} className="btn btn--primary">
                {cta}
              </Link>
              <a href={`tel:${site.phoneHref}`} className={`textlink ${styles.phone}`}>
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
