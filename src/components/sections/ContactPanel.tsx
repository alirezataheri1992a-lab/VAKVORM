import Link from 'next/link';
import { getSiteSettings } from '@/lib/content';
import styles from './ContactPanel.module.css';

interface Props {
  heading?: string;
  body?: string;
  /** Show the fact line (used as the homepage closing moment). */
  facts?: boolean;
}

/**
 * The closing invitation: a charcoal chapter, the statement in serif on the left, the
 * practical route on the right. One thin-border button, one phone number, one address.
 */
export async function ContactPanel({
  heading = 'Een project bespreken?',
  body = 'Loop uw plannen met ons door. We denken graag mee — vrijblijvend en zonder verkooppraat.',
  facts = false,
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
              <Link href="/start-uw-project" className="btn btn--primary">
                Offerte aanvragen
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

        {facts && (
          <ul className={styles.facts}>
            <li>
              <span className="label">Werkgebied</span>
              <span>{site.serviceArea}</span>
            </li>
            <li>
              <span className="label">Disciplines</span>
              <span>Bouw en interieur, één partij</span>
            </li>
            <li>
              <span className="label">Aanspreekpunt</span>
              <span>Eén, van eerste schets tot oplevering</span>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
}
