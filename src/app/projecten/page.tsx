import type { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedProjects, workSlots } from '@/lib/projects';
import { serviceTitle } from '@/lib/services';
import { site } from '@/lib/site';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { SectionMarker } from '@/components/primitives/SectionMarker';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import { ContactPanel } from '@/components/sections/ContactPanel';
import styles from './projecten.module.css';

export const metadata: Metadata = {
  title: 'Projecten',
  description:
    'Gerealiseerde bouw-, renovatie- en interieurprojecten van VAKVORM in Utrecht en omgeving.',
  alternates: { canonical: '/projecten' },
};

export default function ProjectenPage() {
  const projects = getPublishedProjects();

  return (
    <>
      <section className={`container ${styles.intro}`}>
        <Breadcrumbs items={[{ name: 'Projecten', path: '/projecten' }]} />
        <div className={styles.introGrid}>
          <h1 className={`display ${styles.title}`}>Projecten</h1>
          <p className={`lede ${styles.lede}`}>
            Elk project vertellen we als volledige case: de opgave, onze aanpak en het
            resultaat — in {site.city} en omgeving.
          </p>
        </div>
      </section>

      {projects.length > 0 ? (
        <section className={`container ${styles.grid}`}>
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              href={`/projecten/${p.slug}`}
              className={`${styles.item} ${i % 3 === 1 ? styles.itemTall : ''}`}
            >
              <ProjectMedia media={p.hero} sizes="(max-width: 900px) 100vw, 46vw" />
              <div className={styles.itemMeta}>
                <span className={styles.itemTitle}>{p.title}</span>
                <span className="label">
                  {serviceTitle(p.meta.services[0] ?? '')} · {p.meta.location}
                </span>
              </div>
            </Link>
          ))}
        </section>
      ) : (
        <section className={`container ${styles.empty}`}>
          <SectionMarker label="Binnenkort" />
          <p className={styles.emptyText}>
            De eerste projecten worden op dit moment voorbereid. Zodra ze klaar zijn,
            verschijnen ze hier als volledig uitgewerkte cases.
          </p>
          <div className={styles.emptyGrid}>
            {workSlots.slice(0, 3).map((w) => (
              <ProjectMedia
                key={w.slot}
                media={{ alt: 'Projectfoto volgt', ratio: w.ratio, slot: w.slot }}
                sizes="(max-width: 900px) 100vw, 32vw"
                caption={<span className="label">{w.label} · {w.place}</span>}
              />
            ))}
          </div>
        </section>
      )}

      <ContactPanel />
    </>
  );
}
