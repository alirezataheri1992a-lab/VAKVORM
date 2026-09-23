'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Service } from '@/lib/types';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import styles from './ServiceIndex.module.css';

/**
 * Typographic service index — numbered rows on hairlines, not an icon-card grid. On wide
 * screens, the row under the cursor shows its image in a still column on the right.
 * Rows are plain links and work without JS.
 */
export function ServiceIndex({ items, tone }: { items: Service[]; tone?: 'stone' | 'dark' }) {
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
              <span className={`label ${styles.index}`}>{s.index}</span>
              <span className={`title ${styles.name}`}>{s.title}</span>
              <span className={styles.desc}>{s.descriptor}</span>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <div className={styles.preview} aria-hidden="true">
        {items.map((s) => (
          <div key={s.slug} className={styles.previewItem} data-active={active.slug === s.slug}>
            <ProjectMedia media={{ ...s.hero, ratio: '4:5' }} tone={tone ?? 'stone'} sizes="(max-width: 1040px) 0px, 30vw" />
          </div>
        ))}
      </div>
    </div>
  );
}
