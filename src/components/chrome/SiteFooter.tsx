import Link from 'next/link';
import { pages } from '@/lib/site';
import { getSiteSettings, getServiceGroups } from '@/lib/content';
import { Logo } from './Logo';
import { areas } from '@/lib/areas';
import { InstagramLink } from '@/components/primitives/InstagramLink';
import { Placeholder } from '@/components/primitives/Placeholder';
import { CertificationMark } from '@/components/primitives/CertificationMark';
import styles from './SiteFooter.module.css';

export async function SiteFooter() {
  // Server-rendered, so this is fixed at build/revalidate time — no per-request churn,
  // and no hard-coded year to go stale.
  const year = new Date().getFullYear();
  const [site, groups] = await Promise.all([getSiteSettings(), getServiceGroups()]);
  const { bouw, interieurHub, interieurSubs } = groups;

  return (
    <footer className={`on-dark ${styles.footer}`}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Logo variant="master" tone="light" height={168} className={styles.logo} />
            <ul className={styles.credentials}>
              <li>
                <CertificationMark tone="dark" />
              </li>
              <li>Erkend bouwbedrijf · verzekerd · garantie op ons werk</li>
              <li>
                KvK <Placeholder>00000000</Placeholder>
              </li>
            </ul>
          </div>

          <nav className={styles.col} aria-label="Bouw" data-pillar="bouw">
            <Link href="/bouw" className={`label ${styles.colHead}`}>
              Bouw
            </Link>
            <ul>
              {bouw.map((s) => (
                <li key={s.slug}>
                  <Link href={s.path} className={styles.colLink}>
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.col} aria-label="Interieur" data-pillar="interieur">
            <Link href={interieurHub?.path ?? '/interieur'} className={`label ${styles.colHead}`}>
              Interieur
            </Link>
            <ul>
              {interieurSubs.map((s) => (
                <li key={s.slug}>
                  <Link href={s.path} className={styles.colLink}>
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.col}>
            <span className={`label ${styles.colHead}`}>Contact</span>
            <ul>
              <li>
                <a href={`mailto:${site.email}`} className={styles.colLink}>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneHref}`} className={styles.colLink}>
                  {site.phoneDisplay}
                </a>
              </li>
              <li className={styles.area}>
                Werkgebied:{' '}
                {areas.map((a) => (
                  <span key={a.slug}>
                    <Link href={`/werkgebied/${a.slug}`}>{a.name}</Link>,{' '}
                  </span>
                ))}
                <Link href="/werkgebied">heel Nederland</Link>
              </li>
              <li className={styles.social}>
                <InstagramLink handle={site.instagram} />
              </li>
            </ul>
            <ul className={styles.pages}>
              {pages.map((n) => (
                  <li key={n.path}>
                    <Link href={n.path} className={styles.colLink}>
                      {n.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className="label">
            &copy; {year} {site.name} — {site.descriptor}
          </span>
          <div className={styles.legal}>
            <Link href="/privacy" className="label">
              Privacy
            </Link>
            <Link href="/algemene-voorwaarden" className="label">
              Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
