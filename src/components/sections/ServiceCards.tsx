import Link from 'next/link';
import type { Service } from '@/lib/types';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import styles from './ServiceCards.module.css';

/**
 * Service tiles: a photograph, the service, one practical line. Each tile is one link.
 * Clients scan by type of job, so the picture leads. An optional last tile (`extra`) can
 * carry a call to action in the same grid.
 */
export function ServiceCards({
  items,
  columns = 3,
  extra,
}: {
  items: Service[];
  columns?: 3 | 4;
  extra?: React.ReactNode;
}) {
  return (
    <ul className={styles.grid} data-cols={columns}>
      {items.map((s) => (
        <li key={s.slug}>
          <Link href={s.path} className={styles.card} data-pillar={s.pillar}>
            <ProjectMedia
              media={{ ...s.hero, ratio: '4:3', slot: 'Foto volgt' }}
              tone="stone"
              sizes={columns === 4 ? '(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw' : '(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw'}
            />
            <span className={styles.body}>
              <span className={styles.name}>
                {s.title}
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </span>
              <span className={styles.desc}>{s.descriptor}</span>
            </span>
          </Link>
        </li>
      ))}
      {extra && <li className={styles.extra}>{extra}</li>}
    </ul>
  );
}
