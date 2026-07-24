import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import styles from './Breadcrumbs.module.css';

export interface Crumb {
  name: string;
  path: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: 'Home', path: '/' }, ...items];
  return (
    <>
      <BreadcrumbJsonLd items={full} />
      <nav aria-label="Kruimelpad" className={styles.crumbs}>
        <ol>
          {full.map((c, i) => {
            const last = i === full.length - 1;
            return (
              <li key={c.path} className={styles.crumb}>
                {last ? (
                  <span className="label" aria-current="page">
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.path} className={`label ${styles.link}`}>
                      {c.name}
                    </Link>
                    <span className={styles.sep} aria-hidden="true">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
