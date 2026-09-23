import type { Metadata } from 'next';
import Link from 'next/link';
import { workSlots } from '@/lib/projects';
import { getPublishedProjects, getServiceTitle, getSiteSettings } from '@/lib/content';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import { ContactPanel } from '@/components/sections/ContactPanel';
import styles from './projecten.module.css';

export const metadata: Metadata = {
  title: 'Projecten',
  description:
    'Gerealiseerde bouw-, renovatie- en interieurprojecten van Nederdam Bouw in Utrecht en omgeving.',
  alternates: { canonical: '/projecten' },
};

export const revalidate = 60;

/* The index alternates three compositions so the page reads as a sequence, not a grid:
   a wide landscape on its own row; a portrait beside a text reference; a pair. */
const PATTERN = ['wide', 'portrait', 'pair', 'pair'] as const;

export default async function ProjectenPage() {
  const [projects, site] = await Promise.all([getPublishedProjects(), getSiteSettings()]);
  const items = await Promise.all(
    projects.map(async (p) => ({ p, svcTitle: await getServiceTitle(p.meta.services[0] ?? '') })),
  );

  return (
    <>
      <section className={`container ${styles.open}`}>
        <Breadcrumbs items={[{ name: 'Projecten', path: '/projecten' }]} />
        <div className={`grid12 ${styles.openGrid}`}>
          <h1 className={`display ${styles.title}`}>Projecten</h1>
          <p className={`lede ${styles.lede}`}>
            Elk project als volledige case: de opgave, onze aanpak en het resultaat — in {site.city} en
            omgeving.
          </p>
        </div>
      </section>

      {projects.length > 0 ? (
        <section className={`container ${styles.index}`}>
          {items.map(({ p, svcTitle }, i) => {
            const kind = PATTERN[i % PATTERN.length];
            return (
              <Link
                key={p.slug}
                href={`/projecten/${p.slug}`}
                className={styles.item}
                data-kind={kind}
                data-pillar={p.pillar}
              >
                <ProjectMedia
                  media={{ ...p.hero, ratio: kind === 'portrait' ? '4:5' : '3:2' }}
                  sizes={kind === 'wide' ? '100vw' : '(max-width: 900px) 100vw, 50vw'}
                />
                <span className={styles.itemMeta}>
                  <span className={`title ${styles.itemTitle}`}>{p.title}</span>
                  <span className="label">
                    {svcTitle} · {p.meta.location}
                  </span>
                  <span className={`label ${styles.itemPillar}`}>{p.pillar === 'bouw' ? 'Bouw' : 'Interieur'}</span>
                </span>
              </Link>
            );
          })}
        </section>
      ) : (
        <section className={`container ${styles.index}`}>
          <div className={styles.pendingHead}>
            <span className="label">In voorbereiding</span>
            <p className={`heading ${styles.pendingText}`}>
              De eerste projecten worden op dit moment voorbereid. Ze verschijnen hier als volledig
              uitgewerkte cases, met beeld van het echte werk.
            </p>
          </div>
          <div className={styles.pendingRow}>
            {workSlots.slice(0, 3).map((w, i) => (
              <ProjectMedia
                key={w.slot}
                media={{ alt: 'Projectfoto volgt', ratio: w.ratio, slot: w.label }}
                tone={i === 1 ? 'linen' : 'stone'}
                sizes="(max-width: 900px) 100vw, 32vw"
                caption={
                  <span className="label">
                    {w.label} · {w.place}
                  </span>
                }
              />
            ))}
          </div>
        </section>
      )}

      <ContactPanel />
    </>
  );
}
