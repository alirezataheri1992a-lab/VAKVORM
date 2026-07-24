import Link from 'next/link';
import { nav, site } from '@/lib/site';
import { bouwServices, interieurService, interieurSubServices } from '@/lib/services';
import styles from './SiteFooter.module.css';

export function SiteFooter() {
  const year = 2025; // static; avoids per-request date churn. Update on next content pass.
  return (
    <footer className={`on-ink ${styles.footer}`}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <span className={styles.brandName}>{site.name}</span>
            <span className={`label ${styles.brandDesc}`}>{site.descriptor}</span>
            <p className={styles.tagline}>Van bouw tot interieur.<br />Eén partij.</p>
          </div>

          <nav className={styles.linksCol} aria-label="Diensten">
            <span className={`label ${styles.colHead}`}>Diensten</span>
            <ul>
              {bouwServices.map((s) => (
                <li key={s.slug}>
                  <Link href={s.path}>{s.navLabel}</Link>
                </li>
              ))}
              <li>
                <Link href={interieurService.path}>{interieurService.navLabel}</Link>
              </li>
              {interieurSubServices.map((s) => (
                <li key={s.slug}>
                  <Link href={s.path} className={styles.sub}>
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.linksCol} aria-label="Pagina's">
            <span className={`label ${styles.colHead}`}>Vakvorm</span>
            <ul>
              {nav
                .filter((n) => n.path !== '/diensten')
                .map((n) => (
                  <li key={n.path}>
                    <Link href={n.path}>{n.label}</Link>
                  </li>
                ))}
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className={styles.contactCol}>
            <span className={`label ${styles.colHead}`}>Contact</span>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
              </li>
              <li className={styles.area}>
                {site.city} &amp; {site.serviceArea}
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.rule} aria-hidden="true" />

        <div className={styles.bottom}>
          <span className="label">
            &copy; {year} {site.name} — {site.descriptor}
          </span>
          <div className={styles.legal}>
            <Link href="/privacy" className="label">Privacy</Link>
            <Link href="/algemene-voorwaarden" className="label">Voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
