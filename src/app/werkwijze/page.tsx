import type { Metadata } from 'next';
import { getSiteSettings } from '@/lib/content';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import { ContactPanel } from '@/components/sections/ContactPanel';
import styles from './werkwijze.module.css';

export const metadata: Metadata = {
  title: 'Werkwijze — één partij, van plan tot oplevering',
  description:
    'Zo werkt Nederdam Bouw: één aanspreekpunt dat uw project plant, coördineert en oplevert. Van kennismaking tot nette oplevering.',
  alternates: { canonical: '/werkwijze' },
};

// NOTE: step labels are provisional and must be confirmed with the owner before launch.
// They describe a conventional, truthful sequence.
const steps = [
  {
    n: '01',
    title: 'Kennismaking',
    text: 'We bespreken uw plannen, wensen en mogelijkheden. U krijgt een eerlijk beeld van wat kan en hoe we het aanpakken.',
    slot: 'Kennismaking',
    ratio: '4:5' as const,
  },
  {
    n: '02',
    title: 'Inventarisatie & voorbereiding',
    text: 'We brengen de situatie in kaart, meten in en werken het plan uit — inclusief materialen, planning en waar nodig vergunningen.',
    slot: 'Voorbereiding',
    ratio: '3:2' as const,
  },
  {
    n: '03',
    title: 'Plan & afstemming',
    text: 'U ontvangt een heldere offerte en planning. Alles is vooraf afgestemd, zodat u weet wat u kunt verwachten.',
    slot: 'Plan',
    ratio: '4:5' as const,
  },
  {
    n: '04',
    title: 'Realisatie',
    text: 'Wij voeren uit en coördineren alle vakmensen. Eén aanspreekpunt houdt kwaliteit, planning en communicatie in de hand.',
    slot: 'Realisatie',
    ratio: '3:2' as const,
  },
  {
    n: '05',
    title: 'Oplevering',
    text: 'We controleren het werk, werken de details af en leveren netjes op. Pas als het klopt, is het klaar.',
    slot: 'Oplevering',
    ratio: '4:5' as const,
  },
];

export const revalidate = 60;

export default async function WerkwijzePage() {
  const site = await getSiteSettings();
  return (
    <>
      <section className={`container ${styles.open}`}>
        <Breadcrumbs items={[{ name: 'Werkwijze', path: '/werkwijze' }]} />
        <div className={`grid12 ${styles.openGrid}`}>
          <h1 className={`display ${styles.title}`}>Eén partij, van eerste schets tot oplevering.</h1>
          <p className={`lede ${styles.lede}`}>
            U heeft één aanspreekpunt dat het hele traject plant, coördineert en de verantwoordelijkheid
            draagt — u hoeft niet zelf losse specialisten aan te sturen.
          </p>
        </div>
      </section>

      {/* the sequence: a numbered column of text; images alternate sides and sizes */}
      <section className={`container ${styles.steps}`}>
        <ol className={styles.list}>
          {steps.map((s, i) => (
            <li key={s.n} className={styles.step} data-flip={i % 2 === 1}>
              <div className={styles.stepText}>
                <span className={`label ${styles.stepNum}`}>{s.n}</span>
                <h2 className={`heading ${styles.stepTitle}`}>{s.title}</h2>
                <p className={styles.stepBody}>{s.text}</p>
              </div>
              <ProjectMedia
                className={styles.stepMedia}
                media={{ alt: `${s.title} — beeld volgt`, ratio: s.ratio, slot: s.slot }}
                tone={i % 2 === 1 ? 'linen' : 'stone'}
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </li>
          ))}
        </ol>
      </section>

      <section className={`on-taupe ${styles.closing}`}>
        <div className="container">
          <p className={`display ${styles.closingText}`}>
            Rust, overzicht en één verantwoordelijke partij.
          </p>
          <p className={styles.closingNote}>In {site.city} en omgeving.</p>
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
