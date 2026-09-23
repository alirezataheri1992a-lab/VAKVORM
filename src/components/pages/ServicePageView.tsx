import Link from 'next/link';
import type { Service } from '@/lib/types';
import { getServiceGroups, getSiteSettings } from '@/lib/content';
import { Breadcrumbs, type Crumb } from '@/components/primitives/Breadcrumbs';
import { SectionMarker } from '@/components/primitives/SectionMarker';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import { ContactPanel } from '@/components/sections/ContactPanel';
import { ServiceJsonLd } from '@/components/seo/JsonLd';
import { areas } from '@/lib/areas';
import styles from './ServicePageView.module.css';

interface Props {
  service: Service;
  crumbs: Crumb[];
}

/**
 * Service page. An SEO landing page that must not read like one: a statement, one large
 * image, the responsibilities as a numbered list, two pieces of work, the other services.
 * One considered page, in the discipline's tone.
 */
export async function ServicePageView({ service, crumbs }: Props) {
  const [groups, site] = await Promise.all([getServiceGroups(), getSiteSettings()]);
  const pool = service.pillar === 'interieur' ? groups.interieurSubs : groups.bouw;
  const related = pool.filter((s) => s.slug !== service.slug).slice(0, 4);
  const disciplineName = service.pillar === 'bouw' ? 'Bouw' : 'Interieur';

  return (
    <div data-pillar={service.pillar}>
      <ServiceJsonLd service={service} settings={site} />
      {/* opening */}
      <section className={`container ${styles.open}`}>
        <Breadcrumbs items={crumbs} />
        <div className={`grid12 ${styles.openGrid}`}>
          <div className={styles.openText}>
            <span className={`label ${styles.openMark}`}>
              {service.index} · {disciplineName}
            </span>
            <h1 className={`display ${styles.title}`}>{service.title}</h1>
            <p className={`lede ${styles.lede}`}>{service.descriptor}</p>
          </div>
          <div className={styles.openBody}>
            <p className="body">{service.intro}</p>
            <Link href="/start-uw-project" className="textlink">
              Bespreek uw project
            </Link>
          </div>
        </div>
      </section>

      {/* one large image */}
      <section className={`container ${styles.heroSec}`}>
        <ProjectMedia
          media={{ ...service.hero, ratio: '16:9' }}
          priority
          sizes="100vw"
          caption={
            <span className="label">{service.title}</span>
          }
        />
      </section>

      {/* responsibilities */}
      <section className={`container ${styles.resp}`}>
        <div className="grid12">
          <h2 className={`heading ${styles.respTitle}`}>Waar wij verantwoordelijk voor zijn.</h2>
          <ol className={styles.respList}>
            {service.responsibilities.map((r, i) => (
              <li key={i} className={styles.respItem}>
                <span className={`label ${styles.respNum}`}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.respText}>{r}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* two pieces of work, different sizes */}
      <section className={`container ${styles.work}`}>
        <div className={styles.workHead}>
          <SectionMarker label="Gerelateerd werk" />
          <Link href="/projecten" className="textlink">
            Alle projecten
          </Link>
        </div>
        <div className="grid12">
          <ProjectMedia
            className={styles.workA}
            media={{ alt: `${service.title} — projectfoto volgt`, ratio: '3:2', slot: service.hero.slot }}
            sizes="(max-width: 900px) 100vw, 56vw"
          />
          <ProjectMedia
            className={styles.workB}
            media={{ alt: `${service.title} — detailfoto volgt`, ratio: '4:5', slot: 'Detail' }}
            sizes="(max-width: 900px) 100vw, 30vw"
          />
        </div>
      </section>

      {/* where we do this — links to the city pages */}
      <section className={`container ${styles.areas}`}>
        <SectionMarker label="Werkgebied" />
        <div className={styles.areasGrid}>
          <h2 className={`heading ${styles.areasTitle}`}>
            {service.title} in Utrecht, Rotterdam, Amsterdam en heel Nederland.
          </h2>
          <ul className={styles.areasList}>
            {areas.map((a) => (
              <li key={a.slug}>
                <Link href={`/werkgebied/${a.slug}`} className={styles.areasLink}>
                  {service.title} in {a.name}
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/werkgebied" className={styles.areasLink}>
                Elders in Nederland
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* other services in this discipline */}
      {related.length > 0 && (
        <section className={`container ${styles.related}`}>
          <SectionMarker label={`Meer binnen ${disciplineName}`} />
          <ul className={styles.relatedList}>
            {related.map((s) => (
              <li key={s.slug}>
                <Link href={s.path} className={styles.relatedLink}>
                  <span className={`label ${styles.relatedIndex}`}>{s.index}</span>
                  <span className={`title ${styles.relatedName}`}>{s.title}</span>
                  <span className={styles.relatedArrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <ContactPanel heading={`Een ${service.title.toLowerCase()} op de planning?`} />
    </div>
  );
}
