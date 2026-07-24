'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Service } from '@/lib/types';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import styles from './ServiceIndex.module.css';

/**
 * Typographic service index — numbered rows, not an icon-card grid. On desktop,
 * focusing/hovering a row reveals its related image in a fixed preview column.
 * The interaction is decorative-optional: rows are plain links and work without JS.
 */
export function ServiceIndex({ items }: { items: Service[] }) {
  const [active, setActive] = useState<Service>(items[0]);

  return (
    <div className={styles.wrap}>
      <ol className={styles.list}>
        {items.map((s) => (
          <li key={s.slug}>
            <Link
              href={s.path}
              className={styles.row}
              onMouseEnter={() => setActive(s)}
              onFocus={() => setActive(s)}
              data-active={active.slug === s.slug}
            >
              <span className={`num ${styles.index}`}>{s.index}</span>
              <span className={styles.name}>{s.title}</span>
              <span className={styles.desc}>{s.descriptor}</span>
              <span className={styles.arrow} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ol>

      <div className={styles.preview} aria-hidden="true">
        {items.map((s) => (
          <div key={s.slug} className={styles.previewItem} data-active={active.slug === s.slug}>
            <ProjectMedia media={s.hero} sizes="(max-width: 1040px) 0px, 34vw" />
          </div>
        ))}
      </div>
    </div>
  );
}
