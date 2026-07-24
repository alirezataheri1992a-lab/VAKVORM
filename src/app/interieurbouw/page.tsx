import type { Metadata } from 'next';
import Link from 'next/link';
import { interieurService, interieurSubServices } from '@/lib/services';
import { site } from '@/lib/site';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { SectionMarker } from '@/components/primitives/SectionMarker';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import { ContactPanel } from '@/components/sections/ContactPanel';
import styles from './interieurbouw.module.css';

export const metadata: Metadata = {
  title: interieurService.seoTitle,
  description: interieurService.metaDescription,
  alternates: { canonical: '/interieurbouw' },
  openGraph: {
    title: interieurService.seoTitle,
    description: interieurService.metaDescription,
    url: '/interieurbouw',
  },
};

export default function InterieurbouwPage() {
  return (
    <>
      {/* editorial opening — image-led */}
      <section className={`container ${styles.intro}`}>
        <Breadcrumbs items={[{ name: 'Interieurbouw', path: '/interieurbouw' }]} />
        <div className={styles.introGrid}>
          <div className={styles.introText}>
            <SectionMarker index="02" label="Maatwerk interieurbouw" />
            <h1 className={`display ${styles.title}`}>
              Interieur op maat, tot in het detail.
            </h1>
            <p className={`lede ${styles.lede}`}>{interieurService.descriptor}</p>
          </div>
          <ProjectMedia
            className={styles.introMedia}
            media={{ alt: 'Maatwerk interieur door Vakvorm', ratio: '4:5', slot: 'INTERIEUR — DETAIL' }}
            priority
            sizes="(max-width: 940px) 100vw, 40vw"
          />
        </div>
      </section>

      {/* body statement */}
      <section className={`container ${styles.body}`}>
        <div className={styles.bodyGrid}>
          <SectionMarker index="→" label="De discipline" />
          <p className={styles.bodyText}>{interieurService.intro}</p>
        </div>
      </section>

      {/* craft detail composition — vertical rhythm */}
      <section className={`container ${styles.detail}`}>
        <ProjectMedia
          className={styles.detailA}
          media={{ alt: 'Detail van maatwerk interieur', ratio: '3:2', slot: 'MATERIAAL' }}
          sizes="(max-width: 940px) 100vw, 55vw"
        />
        <div className={styles.detailStack}>
          <ProjectMedia
            media={{ alt: 'Detail van houtverbinding', ratio: '1:1', slot: 'VERBINDING' }}
            sizes="(max-width: 940px) 100vw, 34vw"
          />
          <p className={styles.detailNote}>
            Elk onderdeel wordt in eigen beheer op maat gemaakt — van materiaalkeuze tot de
            afwerking van de verbinding.
          </p>
        </div>
      </section>

      {/* sub-services index */}
      <section className={`container ${styles.subs}`}>
        <div className={styles.subsHead}>
          <SectionMarker index="03" label="Specialisaties" />
        </div>
        <ul className={styles.subsList}>
          {interieurSubServices.map((s) => (
            <li key={s.slug}>
              <Link href={s.path} className={styles.subLink}>
                <div className={styles.subMedia}>
                  <ProjectMedia media={s.hero} sizes="(max-width: 760px) 100vw, 30vw" />
                </div>
                <div className={styles.subMeta}>
                  <span className={`num ${styles.subIndex}`}>{s.index}</span>
                  <h3 className={styles.subName}>{s.title}</h3>
                  <p className={styles.subDesc}>{s.descriptor}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ContactPanel
        eyebrow="Interieur bespreken"
        heading="Een interieur op maat?"
        body={`Van één maatwerkkast tot een volledig ingericht interieur — we denken graag met u mee in ${site.city} en omgeving.`}
      />
    </>
  );
}
