import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteSettings } from '@/lib/content';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { SectionMarker } from '@/components/primitives/SectionMarker';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import { ContactPanel } from '@/components/sections/ContactPanel';
import styles from './over.module.css';

export const metadata: Metadata = {
  title: 'Over ons',
  description:
    'Nederdam Bouw is één professionele partij voor bouw, renovatie en maatwerk interieurbouw in Utrecht. Over de naam, de filosofie en de manier van werken.',
  alternates: { canonical: '/over-ons' },
};

export const revalidate = 60;

export default async function OverPage() {
  const site = await getSiteSettings();
  return (
    <>
      <section className={`container ${styles.open}`}>
        <Breadcrumbs items={[{ name: 'Over ons', path: '/over-ons' }]} />
        <div className={`grid12 ${styles.openGrid}`}>
          <h1 className={`display ${styles.title}`}>Eén partij die het hele project draagt.</h1>
          <p className={`lede ${styles.lede}`}>
            Nederdam Bouw bundelt bouw, renovatie en maatwerk interieurbouw onder één naam en één
            verantwoordelijkheid — in {site.city} en omgeving.
          </p>
        </div>
      </section>

      <section className={styles.heroSec}>
        <ProjectMedia
          media={{ alt: 'Nederdam Bouw aan het werk — beeld volgt', ratio: '21:9', slot: 'Werkplaats — team' }}
          tone="taupe"
          priority
          sizes="100vw"
        />
      </section>

      <section className={`container ${styles.story}`}>
        <div className="grid12">
          <div className={styles.storyMark}>
            <SectionMarker label="De gedachte" />
          </div>
          <div className={styles.storyBody}>
            <p className={`heading ${styles.storyLead}`}>
              De meeste verbouwingen lopen vast op afstemming: veel partijen, weinig regie. Nederdam
              draait dat om.
            </p>
            <p className="body">
              Wij organiseren en realiseren complete projecten met eigen vakmensen en een vast netwerk
              van specialisten. De klant heeft één aanspreekpunt en één partij die verantwoordelijk is —
              van planning en coördinatie tot de laatste afwerking.
            </p>
            <p className="body">
              Nederdam Bouw is de nieuwe naam waaronder dit werk wordt voortgezet. Dezelfde vakmensen,
              een scherpere focus: bouw én interieur, professioneel op elkaar afgestemd.
            </p>
          </div>
        </div>
      </section>

      {/* the two disciplines, as two columns on one hairline */}
      <section className={`container ${styles.disciplines}`}>
        <div className={styles.discGrid}>
          <Link href="/bouw" className={styles.disc} data-pillar="bouw">
            <span className={`label ${styles.discMark}`}>01 · Bouw</span>
            <span className={`heading ${styles.discTitle}`}>Bouwen aan wat blijft.</span>
            <span className={styles.discText}>
              Renovaties, verbouwingen, badkamers, aan- en uitbouw, opbouw en stucwerk.
            </span>
            <span className="textlink">Naar Bouw</span>
          </Link>
          <Link href="/interieur" className={styles.disc} data-pillar="interieur">
            <span className={`label ${styles.discMark}`}>02 · Interieur</span>
            <span className={`heading ${styles.discTitle}`}>Ruimte, tot in het detail gemaakt.</span>
            <span className={styles.discText}>
              Maatwerkkasten, wandmeubels en complete interieurs, in eigen beheer gemaakt.
            </span>
            <span className="textlink">Naar Interieur</span>
          </Link>
        </div>
      </section>

      <section className={`on-stone ${styles.values}`}>
        <div className="container">
          <div className="grid12">
            <h2 className={`heading ${styles.valuesTitle}`}>Waar wij voor staan.</h2>
            <ul className={styles.valuesList}>
              {[
                ['Eén aanspreekpunt', 'Geen los verzameld team dat u zelf moet aansturen — één partij, één contact.'],
                ['Vakmanschap', 'Eigen vakmensen en een vast netwerk van specialisten, per project op maat samengesteld.'],
                ['Verantwoordelijk tot oplevering', 'Wij bewaken kwaliteit, planning en afwerking tot het project echt klaar is.'],
              ].map(([t, d], i) => (
                <li key={t} className={styles.value}>
                  <span className={`label ${styles.valueNum}`}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={`title ${styles.valueTitle}`}>{t}</span>
                  <span className={styles.valueText}>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactPanel heading="Zullen we kennismaken?" />
    </>
  );
}
