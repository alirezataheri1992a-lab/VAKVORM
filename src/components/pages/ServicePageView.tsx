import Link from 'next/link';
import type { Service } from '@/lib/types';
import { getServiceGroups, getSiteSettings } from '@/lib/content';
import { Breadcrumbs, type Crumb } from '@/components/primitives/Breadcrumbs';
import { SectionMarker } from '@/components/primitives/SectionMarker';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import { ContactPanel } from '@/components/sections/ContactPanel';
import styles from './ServicePageView.module.css';

interface Props {
  service: Service;
  crumbs: Crumb[];
}

/**
 * Editorial service page. It is an SEO landing page but must not read like one:
 * no feature-card grid, no accordion overload, no repeated CTAs. One considered page.
 */
export async function ServicePageView({ service, crumbs }: Props) {
  const [groups, site] = await Promise.all([getServiceGroups(), getSiteSettings()]);
  const related = (service.pillar === 'interieur' ? groups.interieurSubs : groups.bouw)
    .filter((s) => s.slug !== service.slug && s.pillar === service.pillar)
    .slice(0, 4);

  return (
    <>
      {/* intro */}
      <section className={`container ${styles.intro}`}>
        <Breadcrumbs items={crumbs} />
        <div className={styles.introGrid}>
          <div className={styles.introText}>
            <SectionMarker index={service.index} label={service.pillar === 'bouw' ? 'Bouw & Renovatie' : 'Interieurbouw'} />
            <h1 className={`display ${styles.title}`}>{service.title}</h1>
            <p className={`lede ${styles.lede}`}>{service.descriptor}</p>
          </div>
          <div className={styles.introBody}>
            <p className="body">{service.intro}</p>
            <Link href="/contact" className={styles.introLink}>
              Bespreek uw project
            </Link>
          </div>
        </div>
      </section>

      {/* hero image — landscape crop for a controlled full-width scale */}
      <section className={`container ${styles.heroSec}`}>
        <ProjectMedia
          media={{ ...service.hero, ratio: '3:2' }}
          priority
          sizes="100vw"
          caption={<span className="label">{service.title} · {site.city}</span>}
        />
      </section>

      {/* responsibilities — editorial list, not checkmarks */}
      <section className={`container ${styles.resp}`}>
        <div className={styles.respHead}>
          <SectionMarker label="Waar wij verantwoordelijk voor zijn" />
        </div>
        <ol className={styles.respList}>
          {service.responsibilities.map((r, i) => (
            <li key={i} className={styles.respItem}>
              <span className={`num ${styles.respNum}`}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.respText}>{r}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* related work placeholder / proof */}
      <section className={`container ${styles.work}`}>
        <div className={styles.workHead}>
          <SectionMarker label="Gerelateerd werk" />
          <Link href="/projecten" className={styles.headLink}>
            Alle projecten
          </Link>
        </div>
        <div className={styles.workGrid}>
          <ProjectMedia
            media={{ alt: `${service.title} — projectfoto volgt`, ratio: '3:2', slot: service.hero.slot }}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <ProjectMedia
            media={{ alt: `${service.title} — detailfoto volgt`, ratio: '3:2', slot: 'DETAIL' }}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* related services */}
      {related.length > 0 && (
        <section className={`container ${styles.related}`}>
          <SectionMarker label="Andere diensten" />
          <ul className={styles.relatedList}>
            {related.map((s) => (
              <li key={s.slug}>
                <Link href={s.path} className={styles.relatedLink}>
                  <span className={`num ${styles.relatedIndex}`}>{s.index}</span>
                  <span className={styles.relatedName}>{s.title}</span>
                  <span className={styles.relatedArrow} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <ContactPanel heading={`Een ${service.title.toLowerCase()}-project?`} />
    </>
  );
}
