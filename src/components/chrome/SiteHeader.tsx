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

type MenuKey = 'bouw' | 'interieur';

/**
 * Header: the logo left, the navigation, the phone number and one bronze action right.
 * Bouw and Interieur each open a panel with their services (hover, focus or click; Escape
 * and an outside click close it). The mobile menu is a charcoal sheet with the two
 * disciplines leading.
 */
export function SiteHeader({ settings: site, bouwServices, interieurService, interieurSubServices }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuKey | null>(null);
  const menuId = useId();
  const panelId = useId();
  const navRef = useRef<HTMLElement | null>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const openedAt = useRef(0);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
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
        setMenu(null);
      }
    }
    function onDown(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenu(null);
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDown);
    };
  }, []);

  const show = (key: MenuKey) => {
    window.clearTimeout(closeTimer.current);
    if (menu !== key) openedAt.current = Date.now();
    setMenu(key);
  };
  const hideSoon = () => {
    closeTimer.current = window.setTimeout(() => setMenu(null), 160);
  };
  // a click that lands right after hover/focus opened the panel must not close it again
  const toggle = (key: MenuKey) => {
    if (Date.now() - openedAt.current < 400) return setMenu(key);
    setMenu((m) => (m === key ? null : key));
  };

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname === path || pathname.startsWith(`${path}/`);

  const groups: Record<MenuKey, { title: string; href: string; items: Service[] }> = {
    bouw: { title: 'Bouw', href: '/bouw', items: bouwServices },
    interieur: {
      title: 'Interieur',
      href: interieurService?.path ?? '/interieur',
      items: interieurSubServices,
    },
  };

  return (
    <>
      <header className={styles.header} data-open={open}>
        <div className={`container ${styles.bar}`}>
          <Link href="/" className={styles.brand} aria-label="Nederdam — home">
            <Logo variant="horizontal" tone={open ? 'light' : 'dark'} height={52} decorative />
          </Link>

          <nav className={styles.nav} aria-label="Hoofdmenu" ref={navRef}>
            <ul className={styles.list}>
              {nav.map((n) => {
                if (!('menu' in n)) {
                  return (
                    <li key={n.path}>
                      <Link href={n.path} className={styles.link} data-active={isActive(n.path)}>
                        {n.label}
                      </Link>
                    </li>
                  );
                }
                const key = n.menu as MenuKey;
                const g = groups[key];
                const expanded = menu === key;
                return (
                  <li
                    key={n.path}
                    className={styles.hasPanel}
                    data-pillar={key}
                    onMouseEnter={() => show(key)}
                    onMouseLeave={hideSoon}
                  >
                    <button
                      type="button"
                      className={styles.link}
                      data-active={isActive(n.path)}
                      aria-expanded={expanded}
                      aria-controls={`${panelId}-${key}`}
                      onClick={() => toggle(key)}
                      onFocus={() => show(key)}
                    >
                      {n.label}
                      <span className={styles.caret} aria-hidden="true" />
                    </button>

                    <div id={`${panelId}-${key}`} className={styles.panel} data-open={expanded}>
                      <Link href={g.href} className={styles.panelHead}>
                        {g.title}
                      </Link>
                      <ul className={styles.panelList}>
                        {g.items.map((s) => (
                          <li key={s.slug}>
                            <Link href={s.path} className={styles.panelLink}>
                              {s.navLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link href="/diensten" className={`textlink ${styles.panelAll}`}>
                        Alle diensten
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.actions}>
            <a href={`tel:${site.phoneHref}`} className={styles.phone}>
              {site.phoneDisplay}
            </a>
            <Link href="/start-uw-project" className={`btn btn--bronze ${styles.cta}`}>
              Offerte aanvragen
            </Link>
          </div>

          <button
            className={styles.toggle}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Menu sluiten' : 'Menu openen'}
            onClick={() => setOpen((v) => !v)}
          >
            <span>{open ? 'Sluiten' : 'Menu'}</span>
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
          <div className={styles.disciplines}>
            {(['bouw', 'interieur'] as const).map((key) => {
              const g = groups[key];
              return (
                <Link key={key} href={g.href} className={styles.discipline} data-pillar={key}>
                  <span className={styles.disciplineName}>{g.title}</span>
                  <span className={styles.disciplineList}>{g.items.map((s) => s.navLabel).join(' · ')}</span>
                </Link>
              );
            })}
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
