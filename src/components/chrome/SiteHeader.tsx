'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';
import { nav, pages } from '@/lib/site';
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
 * Header: logo left, navigation centred, one bronze "Offerte aanvragen" button right.
 * "Diensten" opens a submenu with the two disciplines and their services (hover, focus or
 * click; Escape and an outside click close it). The mobile menu is a charcoal sheet with the
 * two disciplines leading.
 */
export function SiteHeader({ settings: site, bouwServices, interieurService, interieurSubServices }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const menuId = useId();
  const dropId = useId();
  const dropWrap = useRef<HTMLLIElement | null>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const openedAt = useRef(0);

  useEffect(() => {
    setOpen(false);
    setDrop(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        setDrop(false);
      }
    }
    function onDown(e: MouseEvent) {
      if (dropWrap.current && !dropWrap.current.contains(e.target as Node)) setDrop(false);
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDown);
    };
  }, []);

  const openDrop = () => {
    window.clearTimeout(closeTimer.current);
    if (!drop) openedAt.current = Date.now();
    setDrop(true);
  };
  // a click that lands right after hover/focus opened the panel must not close it again
  const toggleDrop = () => {
    if (Date.now() - openedAt.current < 400) return setDrop(true);
    setDrop((v) => !v);
  };
  const closeSoon = () => {
    closeTimer.current = window.setTimeout(() => setDrop(false), 160);
  };

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname === path || pathname.startsWith(`${path}/`);
  const dienstenActive = ['/diensten', '/bouw', '/interieur'].some(isActive);

  return (
    <>
      <header className={styles.header} data-open={open}>
        <div className={`container ${styles.bar}`}>
          <Link href="/" className={styles.brand} aria-label="Nederdam — home">
            <Logo variant="horizontal" tone={open ? 'light' : 'dark'} height={40} decorative />
          </Link>

          <nav className={styles.nav} aria-label="Hoofdmenu">
            <ul className={styles.list}>
              {nav.map((n) =>
                n.path === '/diensten' ? (
                  <li
                    key={n.path}
                    ref={dropWrap}
                    className={styles.hasDrop}
                    onMouseEnter={openDrop}
                    onMouseLeave={closeSoon}
                  >
                    <button
                      type="button"
                      className={styles.link}
                      data-active={dienstenActive}
                      aria-expanded={drop}
                      aria-controls={dropId}
                      onClick={toggleDrop}
                      onFocus={openDrop}
                    >
                      Diensten
                      <span className={styles.caret} aria-hidden="true" />
                    </button>

                    <div id={dropId} className={styles.drop} data-open={drop}>
                      <div className={styles.dropGroup} data-pillar="bouw">
                        <Link href="/bouw" className={styles.dropHead}>
                          <span className="label">01</span>
                          Bouw
                        </Link>
                        <ul>
                          {bouwServices.map((s) => (
                            <li key={s.slug}>
                              <Link href={s.path} className={styles.dropLink}>
                                {s.navLabel}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.dropGroup} data-pillar="interieur">
                        <Link href={interieurService?.path ?? '/interieur'} className={styles.dropHead}>
                          <span className="label">02</span>
                          Interieur
                        </Link>
                        <ul>
                          {interieurSubServices.map((s) => (
                            <li key={s.slug}>
                              <Link href={s.path} className={styles.dropLink}>
                                {s.navLabel}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link href="/diensten" className={`textlink ${styles.dropAll}`}>
                        Alle diensten
                      </Link>
                    </div>
                  </li>
                ) : (
                  <li key={n.path}>
                    <Link href={n.path} className={styles.link} data-active={isActive(n.path)}>
                      {n.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <Link href="/start-uw-project" className={`btn btn--bronze ${styles.cta}`}>
            Offerte aanvragen
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

      {/* ---- mobile menu: a charcoal sheet, the two disciplines first ---- */}
      <div id={menuId} className={styles.sheet} data-open={open} aria-hidden={!open}>
        <nav className={`container ${styles.sheetInner}`} aria-label="Menu">
          <span className={`label ${styles.sheetLabel}`}>Diensten</span>
          <div className={styles.disciplines}>
            <Link href="/bouw" className={styles.discipline} data-pillar="bouw">
              <span className="label">01</span>
              <span className={styles.disciplineName}>Bouw</span>
              <span className={styles.disciplineList}>{bouwServices.map((s) => s.navLabel).join(' · ')}</span>
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
            <li>
              <Link href="/" className={styles.sheetLink} data-active={isActive('/')}>
                Home
              </Link>
            </li>
            {pages.map((n) => (
              <li key={n.path}>
                <Link href={n.path} className={styles.sheetLink} data-active={isActive(n.path)}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.sheetFoot}>
            <Link href="/start-uw-project" className="btn btn--bronze">
              Offerte aanvragen
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
