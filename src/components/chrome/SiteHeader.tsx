'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useState } from 'react';
import { nav } from '@/lib/site';
import type { Service, SiteSettings } from '@/lib/types';
import { Logo } from './Logo';
import styles from './SiteHeader.module.css';

interface Props {
  settings: SiteSettings;
  bouwServices: Service[];
  interieurService?: Service;
  interieurSubServices: Service[];
}

/**
 * Quiet, architectural header: the logo, six words, one text link. On the homepage it
 * sits over the hero in light type and scrolls away with it; on every other page it is a
 * thin linen bar that stays put. No dropdowns — the disciplines are pages, not menus.
 * The mobile menu is its own composition (a charcoal sheet with the two disciplines
 * leading), not the desktop list collapsed.
 */
export function SiteHeader({ settings: site, bouwServices, interieurService, interieurSubServices }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const overlay = pathname === '/';

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  return (
    <>
      <header className={styles.header} data-overlay={overlay} data-open={open}>
        <div className={`container ${styles.bar}`}>
          <Link href="/" className={styles.brand} aria-label="Nederdam — home">
            <Logo tone={overlay || open ? 'light' : 'dark'} size={26} />
          </Link>

          <nav className={styles.nav} aria-label="Hoofdmenu">
            <ul className={styles.list}>
              {nav.map((n) => (
                <li key={n.path}>
                  <Link
                    href={n.path}
                    className={styles.link}
                    data-active={isActive(n.path)}
                    data-pillar={'discipline' in n ? n.discipline : undefined}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link href="/start-uw-project" className={`textlink ${styles.cta}`}>
            Start een project
          </Link>

          <button
            className={styles.toggle}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Menu sluiten' : 'Menu openen'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.toggleWord}>{open ? 'Sluiten' : 'Menu'}</span>
            <span className={styles.toggleLines} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {/* ---- mobile menu: a charcoal sheet, disciplines first ---- */}
      <div id={menuId} className={styles.sheet} data-open={open} aria-hidden={!open}>
        <nav className={`container ${styles.sheetInner}`} aria-label="Menu">
          <div className={styles.disciplines}>
            <Link href="/bouw" className={styles.discipline} data-pillar="bouw">
              <span className="label">01</span>
              <span className={styles.disciplineName}>Bouw</span>
              <span className={styles.disciplineList}>
                {bouwServices.map((s) => s.navLabel).join(' · ')}
              </span>
            </Link>
            <Link href={interieurService?.path ?? '/interieur'} className={styles.discipline} data-pillar="interieur">
              <span className="label">02</span>
              <span className={styles.disciplineName}>Interieur</span>
              <span className={styles.disciplineList}>
                {interieurSubServices.map((s) => s.navLabel).join(' · ')}
              </span>
            </Link>
          </div>

          <ul className={styles.sheetList}>
            {nav
              .filter((n) => !('discipline' in n))
              .map((n) => (
                <li key={n.path}>
                  <Link href={n.path} className={styles.sheetLink} data-active={isActive(n.path)}>
                    {n.label}
                  </Link>
                </li>
              ))}
          </ul>

          <div className={styles.sheetFoot}>
            <Link href="/start-uw-project" className="btn">
              Start een project
            </Link>
            <div className={styles.sheetContact}>
              <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
