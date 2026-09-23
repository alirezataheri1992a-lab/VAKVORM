import Link from 'next/link';
import type { Service } from '@/lib/types';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import { ServiceIcon, iconForService } from '@/components/primitives/ServiceIcon';
import styles from './ServiceCards.module.css';

/**
 * Service cards: image, icon, name, one line, "Meer informatie". Square, hairline-framed,
 * no shadow. Each card is one link.
 */
export function ServiceCards({ items, columns = 4 }: { items: Service[]; columns?: 3 | 4 }) {
  return (
    <ul className={styles.grid} data-cols={columns}>
      {items.map((s) => (
        <li key={s.slug}>
          <Link href={s.path} className={styles.card} data-pillar={s.pillar}>
            <ProjectMedia
              media={{ ...s.hero, ratio: '4:3' }}
              tone="stone"
              sizes={columns === 4 ? '(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw' : '(max-width: 700px) 100vw, 33vw'}
            />
            <span className={styles.body}>
              <ServiceIcon name={iconForService(s.slug)} className={styles.icon} />
              <span className={styles.name}>{s.title}</span>
              <span className={styles.desc}>{s.descriptor}</span>
              <span className={`textlink ${styles.more}`}>Meer informatie</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
