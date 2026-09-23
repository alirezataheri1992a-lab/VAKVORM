import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import { ContactPanel } from '@/components/sections/ContactPanel';
import styles from './werkwijze.module.css';

export const metadata: Metadata = {
  title: 'Werkwijze — van ontwerp en vergunning tot oplevering',
  description:
    'Zo werkt Nederdam Bouw: advies en ontwerp, de vergunning waar nodig, één planning, uitvoering door eigen vakmensen en een vast netwerk, en oplevering met garantie.',
  alternates: { canonical: '/werkwijze' },
};

// The method for every project — the one place the process is described. The homepage and
// the other pages link here instead of repeating it; the nieuwbouw page tells the buyer's
// own journey (see src/lib/nieuwbouw.ts), not this method again.
const steps = [
  {
    n: '01',
    title: 'Advies & ontwerp',
    text: 'We bespreken uw plannen en wensen en werken ze uit tot een ontwerp: indeling, materialen, kleuren en maatwerk. Zo weet u vooraf precies hoe het wordt.',
    slot: 'Ontwerp',
    ratio: '4:5' as const,
  },
  {
    n: '02',
    title: 'Vergunning, waar nodig',
    text: 'Is voor uw plan een vergunning nodig, bijvoorbeeld voor een uitbouw, dan verzorgen wij de aanvraag. U hoeft zelf niets uit te zoeken.',
    slot: 'Vergunning',
    ratio: '3:2' as const,
  },
  {
    n: '03',
    title: 'Voorbereiding & planning',
    text: 'We meten in, bestellen de materialen en maken één planning voor alle vakmensen. U ontvangt een heldere offerte; alles is vooraf afgestemd.',
    slot: 'Voorbereiding',
    ratio: '4:5' as const,
  },
  {
    n: '04',
    title: 'Uitvoering',
    text: 'Onze eigen vakmensen en ons vaste netwerk van specialisten — zoals vloerleggers en behangers — voeren het werk uit. Eén aanspreekpunt houdt kwaliteit, planning en communicatie in de hand.',
    slot: 'Uitvoering',
    ratio: '3:2' as const,
  },
  {
    n: '05',
    title: 'Oplevering & garantie',
    text: 'We controleren het werk, werken de details af en leveren netjes op — met garantie op ons werk. Pas als het klopt, is het klaar.',
    slot: 'Oplevering',
    ratio: '4:5' as const,
  },
];

export const revalidate = 60;

export default async function WerkwijzePage() {
  return (
    <>
      <section className={`container ${styles.open}`}>
        <Breadcrumbs items={[{ name: 'Werkwijze', path: '/werkwijze' }]} />
        <div className={`grid12 ${styles.openGrid}`}>
          <h1 className={`display ${styles.title}`}>Van ontwerp tot oplevering. U heeft er geen omkijken naar.</h1>
          <p className={`lede ${styles.lede}`}>
            Eén partij regelt het hele traject: het ontwerp, de vergunning, de planning, alle vakmensen
            en de oplevering. U heeft één aanspreekpunt en hoeft niet zelf losse partijen aan te sturen.
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

      {/* the nieuwbouw buyer's journey lives on its own page — link, don't repeat */}
      <section className={`container ${styles.nieuwbouw}`}>
        <div className={styles.nieuwbouwInner}>
          <div>
            <p className={`label ${styles.nieuwbouwKicker}`}>Nieuwbouw</p>
            <h2 className="heading">Net de sleutel van uw nieuwbouwwoning?</h2>
          </div>
          <p className={styles.nieuwbouwText}>
            Bekijk stap voor stap hoe we een kale woning afwerken en inrichten — van de tekening tot de
            dag dat u erin woont.
          </p>
          <Link href="/nieuwbouw" className="textlink">
            Van sleutel tot thuis
          </Link>
        </div>
      </section>

      <section className={`on-taupe ${styles.closing}`}>
        <div className="container">
          <p className={`display ${styles.closingText}`}>
            Rust, overzicht en één verantwoordelijke partij.
          </p>
          <p className={styles.closingNote}>In Utrecht, Rotterdam, Amsterdam en heel Nederland.</p>
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
