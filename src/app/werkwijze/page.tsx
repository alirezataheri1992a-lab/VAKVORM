import type { Metadata } from 'next';
import { site } from '@/lib/site';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { SectionMarker } from '@/components/primitives/SectionMarker';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import { ContactPanel } from '@/components/sections/ContactPanel';
import styles from './werkwijze.module.css';

export const metadata: Metadata = {
  title: 'Werkwijze — één partij, van plan tot oplevering',
  description:
    'Zo werkt Vakvorm: één aanspreekpunt dat uw project plant, coördineert en oplevert. Van kennismaking tot nette oplevering.',
  alternates: { canonical: '/werkwijze' },
};

// NOTE: process step labels below are provisional and must be confirmed with the owner
// before launch (see master brief §19). They describe a conventional, truthful sequence.
const steps = [
  {
    n: '01',
    title: 'Kennismaking',
    text: 'We bespreken uw plannen, wensen en budget. U krijgt een eerlijk beeld van wat mogelijk is en hoe we het aanpakken.',
    slot: 'KENNISMAKING',
  },
  {
    n: '02',
    title: 'Inventarisatie & voorbereiding',
    text: 'We brengen de situatie in kaart, meten in en werken het plan uit — inclusief materialen, planning en waar nodig vergunningen.',
    slot: 'VOORBEREIDING',
  },
  {
    n: '03',
    title: 'Plan & afstemming',
    text: 'U ontvangt een heldere offerte en planning. Alles is vooraf afgestemd, zodat u weet wat u kunt verwachten.',
    slot: 'PLAN',
  },
  {
    n: '04',
    title: 'Realisatie',
    text: 'Wij voeren uit en coördineren alle vakmensen. Eén aanspreekpunt houdt kwaliteit, planning en communicatie in de hand.',
    slot: 'REALISATIE',
  },
  {
    n: '05',
    title: 'Oplevering',
    text: 'We controleren het werk, werken de details af en leveren netjes op. Pas als het klopt, is het klaar.',
    slot: 'OPLEVERING',
  },
];

export default function WerkwijzePage() {
  return (
    <>
      <section className={`container ${styles.intro}`}>
        <Breadcrumbs items={[{ name: 'Werkwijze', path: '/werkwijze' }]} />
        <div className={styles.introGrid}>
          <div>
            <SectionMarker index="—" label="Werkwijze" />
            <h1 className={`display ${styles.title}`}>
              Eén partij, van eerste schets tot oplevering.
            </h1>
          </div>
          <p className={`lede ${styles.lede}`}>
            U heeft één aanspreekpunt dat het hele traject plant, coördineert en de
            verantwoordelijkheid draagt — u hoeft niet zelf losse specialisten aan te sturen.
          </p>
        </div>
      </section>

      <section className={`container ${styles.steps}`}>
        <ol>
          {steps.map((s, i) => (
            <li key={s.n} className={styles.step}>
              <div className={styles.stepText}>
                <span className={`num ${styles.stepNum}`}>{s.n}</span>
                <span className={styles.stepRule} aria-hidden="true" />
                <h2 className={styles.stepTitle}>{s.title}</h2>
                <p className={styles.stepBody}>{s.text}</p>
              </div>
              <div className={styles.stepMedia} data-flip={i % 2 === 1}>
                <ProjectMedia
                  media={{ alt: `${s.title} — beeld volgt`, ratio: '4:3', slot: s.slot }}
                  sizes="(max-width: 940px) 100vw, 40vw"
                />
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={`container ${styles.closing}`}>
        <p className={styles.closingText}>
          Het resultaat: rust, overzicht en één verantwoordelijke partij — in {site.city} en
          omgeving.
        </p>
      </section>

      <ContactPanel />
    </>
  );
}
