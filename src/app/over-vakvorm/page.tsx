import type { Metadata } from 'next';
import { site } from '@/lib/site';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { SectionMarker } from '@/components/primitives/SectionMarker';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import { ContactPanel } from '@/components/sections/ContactPanel';
import styles from './over.module.css';

export const metadata: Metadata = {
  title: 'Over Vakvorm',
  description:
    'Vakvorm is één professionele partij voor bouw, renovatie en maatwerk interieurbouw in Utrecht. Over de rebrand, de filosofie en de manier van werken.',
  alternates: { canonical: '/over-vakvorm' },
};

export default function OverPage() {
  return (
    <>
      <section className={`container ${styles.intro}`}>
        <Breadcrumbs items={[{ name: 'Over Vakvorm', path: '/over-vakvorm' }]} />
        <div className={styles.introGrid}>
          <div>
            <SectionMarker index="—" label="Over Vakvorm" />
            <h1 className={`display ${styles.title}`}>
              Eén partij die het hele project draagt.
            </h1>
          </div>
          <p className={`lede ${styles.lede}`}>
            Vakvorm bundelt bouw, renovatie en maatwerk interieurbouw onder één naam en
            één verantwoordelijkheid — in {site.city} en omgeving.
          </p>
        </div>
      </section>

      <section className={`container ${styles.mediaSec}`}>
        <ProjectMedia
          media={{ alt: 'Vakvorm aan het werk — beeld volgt', ratio: '16:9', slot: 'WERKPLAATS / TEAM' }}
          priority
          sizes="100vw"
        />
      </section>

      <section className={`container ${styles.story}`}>
        <div className={styles.storyGrid}>
          <SectionMarker index="01" label="De gedachte" />
          <div className={styles.storyBody}>
            <p className={styles.storyLead}>
              De meeste verbouwingen lopen vast op afstemming: veel partijen, weinig regie.
              Vakvorm draait dat om.
            </p>
            <p className="body">
              Wij organiseren en realiseren complete projecten met eigen vakmensen en een
              vast netwerk van specialisten. De klant heeft één aanspreekpunt en één partij
              die verantwoordelijk is — van planning en coördinatie tot de laatste
              afwerking.
            </p>
            <p className="body">
              Vakvorm is de nieuwe naam waaronder dit werk wordt voortgezet. Dezelfde vakmensen,
              een scherpere focus: bouw én interieur, professioneel op elkaar afgestemd.
            </p>
          </div>
        </div>
      </section>

      <section className={`container ${styles.pillars}`}>
        <SectionMarker index="02" label="Waar wij voor staan" />
        <ul className={styles.pillarList}>
          {[
            ['Eén aanspreekpunt', 'Geen los verzameld team dat u zelf moet aansturen — één partij, één contact.'],
            ['Vakmanschap', 'Eigen vakmensen en een vast netwerk van specialisten, per project op maat samengesteld.'],
            ['Verantwoordelijk tot oplevering', 'Wij bewaken kwaliteit, planning en afwerking tot het project echt klaar is.'],
          ].map(([t, d]) => (
            <li key={t} className={styles.pillarItem}>
              <h2 className={styles.pillarTitle}>{t}</h2>
              <p className={styles.pillarDesc}>{d}</p>
            </li>
          ))}
        </ul>
      </section>

      <ContactPanel eyebrow="Kennismaken" heading="Zullen we kennismaken?" />
    </>
  );
}
