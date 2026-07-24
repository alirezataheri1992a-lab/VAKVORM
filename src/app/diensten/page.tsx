import type { Metadata } from 'next';
import Link from 'next/link';
import { bouwServices, interieurService } from '@/lib/services';
import { site } from '@/lib/site';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { SectionMarker } from '@/components/primitives/SectionMarker';
import { ServiceIndex } from '@/components/sections/ServiceIndex';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import { ContactPanel } from '@/components/sections/ContactPanel';
import styles from './diensten.module.css';

export const metadata: Metadata = {
  title: 'Diensten — bouw, renovatie & interieurbouw',
  description:
    'De diensten van VAKVORM: complete renovatie en verbouwing, badkamerrenovatie, aan- en uitbouw, opbouw, stucwerk en maatwerk interieurbouw in Utrecht.',
  alternates: { canonical: '/diensten' },
};

export default function DienstenPage() {
  return (
    <>
      <section className={`container ${styles.intro}`}>
        <Breadcrumbs items={[{ name: 'Diensten', path: '/diensten' }]} />
        <div className={styles.introGrid}>
          <h1 className={`display ${styles.title}`}>Diensten</h1>
          <p className={`lede ${styles.lede}`}>
            Twee vakgebieden — bouw &amp; renovatie en maatwerk interieurbouw — onder
            één verantwoordelijkheid. Van eerste schets tot oplevering in {site.city} en
            omgeving.
          </p>
        </div>
      </section>

      <section className={`container ${styles.indexSec}`}>
        <div className={styles.indexHead}>
          <SectionMarker index="01" label="Bouw & Renovatie" />
        </div>
        <ServiceIndex items={bouwServices} />
      </section>

      <section className={styles.interieur}>
        <div className="container">
          <div className={styles.interieurGrid}>
            <div className={styles.interieurText}>
              <SectionMarker index="02" label="Interieurbouw" />
              <h2 className={`heading ${styles.interieurTitle}`}>{interieurService.title}</h2>
              <p className="body">{interieurService.intro}</p>
              <Link href={interieurService.path} className={styles.interieurLink}>
                Naar interieurbouw
              </Link>
            </div>
            <div className={styles.interieurMedia}>
              <ProjectMedia
                media={interieurService.hero}
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
