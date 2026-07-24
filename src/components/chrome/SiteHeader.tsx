'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';
import { nav } from '@/lib/site';
import type { Service, SiteSettings } from '@/lib/types';
import styles from './SiteHeader.module.css';

interface Props {
  settings: SiteSettings;
  bouwServices: Service[];
  interieurService?: Service;
  interieurSubServices: Service[];
}

export function SiteHeader({ settings: site, bouwServices, interieurService, interieurSubServices }: Props) {
  const pathname = usePathname();
  const [dropdown, setDropdown] = useState(false);
  const [mobile, setMobile] = useState(false);
  const menuId = useId();
  const dropWrap = useRef<HTMLLIElement | null>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  // Close everything on navigation.
  useEffect(() => {
    setDropdown(false);
    setMobile(false);
  }, [pathname]);

  // Lock scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobile]);

  // Escape closes; outside click closes the dropdown.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setDropdown(false);
        setMobile(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (dropWrap.current && !dropWrap.current.contains(e.target as Node)) {
        setDropdown(false);
      }
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, []);

  const openDrop = () => {
    window.clearTimeout(closeTimer.current);
    setDropdown(true);
  };
  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setDropdown(false), 140);
  };

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <>
      <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label={`${site.name} — ${site.descriptor}`}>
          <span className={styles.brandName}>{site.name}</span>
          <span className={`label ${styles.brandDesc}`}>{site.descriptor}</span>
        </Link>

        {/* -------- desktop nav -------- */}
        <nav className={styles.desktopNav} aria-label="Hoofdmenu">
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink} data-active={isActive('/')}>
                Home
              </Link>
            </li>

            <li
              ref={dropWrap}
              className={styles.hasDrop}
              onMouseEnter={openDrop}
              onMouseLeave={scheduleClose}
            >
              <Link
                href="/diensten"
                className={styles.navLink}
                data-active={isActive('/diensten') || isActive('/interieurbouw')}
                aria-expanded={dropdown}
                aria-haspopup="true"
                onClick={() => setDropdown(false)}
                onFocus={openDrop}
              >
                Diensten
                <span className={styles.caret} aria-hidden="true" />
              </Link>

              <div
                className={styles.dropdown}
                data-open={dropdown}
                onMouseEnter={openDrop}
                onMouseLeave={scheduleClose}
              >
                <div className={styles.dropInner}>
                  <div className={styles.dropCol}>
                    <span className={`label ${styles.dropHead}`}>Bouw &amp; Renovatie</span>
                    <ul>
                      {bouwServices.map((s) => (
                        <li key={s.slug}>
                          <Link href={s.path} className={styles.dropLink}>
                            <span className={`num ${styles.dropIndex}`}>{s.index}</span>
                            {s.navLabel}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.dropCol}>
                    <span className={`label ${styles.dropHead}`}>Interieurbouw</span>
                    <ul>
                      {interieurService && (
                        <li>
                          <Link href={interieurService.path} className={styles.dropLink}>
                            <span className={`num ${styles.dropIndex}`}>{interieurService.index}</span>
                            {interieurService.navLabel}
                          </Link>
                        </li>
                      )}
                      {interieurSubServices.map((s) => (
                        <li key={s.slug}>
                          <Link href={s.path} className={`${styles.dropLink} ${styles.dropSub}`}>
                            {s.navLabel}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {nav
              .filter((n) => n.path !== '/' && n.path !== '/diensten')
              .map((n) => (
                <li key={n.path}>
                  <Link href={n.path} className={styles.navLink} data-active={isActive(n.path)}>
                    {n.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <Link href="/contact" className={styles.cta}>
          Project bespreken
        </Link>

        {/* -------- mobile toggle -------- */}
        <button
          className={styles.burger}
          aria-expanded={mobile}
          aria-controls={menuId}
          aria-label={mobile ? 'Menu sluiten' : 'Menu openen'}
          onClick={() => setMobile((v) => !v)}
        >
          <span data-open={mobile} />
          <span data-open={mobile} />
        </button>
      </div>
      </header>

      {/* -------- full-screen mobile menu (sibling of header: fixed positioning
          must not be trapped by the header's backdrop-filter containing block) -------- */}
      <div id={menuId} className={styles.mobile} data-open={mobile} aria-hidden={!mobile}>
        <nav className={`container ${styles.mobileInner}`} aria-label="Mobiel menu">
          <ul className={styles.mobileList}>
            {nav.map((n, i) => (
              <li key={n.path}>
                <Link href={n.path} className={styles.mobileLink}>
                  <span className={`num ${styles.mobileIndex}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.mobileServices}>
            <span className={`label ${styles.dropHead}`}>Diensten</span>
            <ul>
              {[...bouwServices, ...(interieurService ? [interieurService] : []), ...interieurSubServices].map((s) => (
                <li key={s.path}>
                  <Link href={s.path} className={styles.mobileServiceLink}>
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.mobileFoot}>
            <Link href="/contact" className={styles.cta}>
              Project bespreken
            </Link>
            <a href={`tel:${site.phoneHref}`} className={styles.mobilePhone}>
              {site.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
