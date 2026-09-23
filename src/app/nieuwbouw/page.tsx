import Link from 'next/link';
import type { Metadata } from 'next';
import { getSiteSettings } from '@/lib/content';
import { journey, tradesYourself, nieuwbouwFaq } from '@/lib/nieuwbouw';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { NieuwbouwPlan } from '@/components/nieuwbouw/NieuwbouwPlan';
import { NieuwbouwCompare } from '@/components/nieuwbouw/NieuwbouwCompare';
import { NieuwbouwJourney } from '@/components/nieuwbouw/NieuwbouwJourney';
import { ContactPanel } from '@/components/sections/ContactPanel';
import styles from './nieuwbouw.module.css';

export const metadata: Metadata = {
  title: 'Nieuwbouwwoning afwerken — van sleutel tot thuis',
  description:
    'Kale nieuwbouwwoning? Nederdam Bouw neemt het hele traject over: meekijken met meer- en minderwerk, ontwerp, afbouw, badkamer en keuken, interieur op maat en oplevering. Eén aanspreekpunt.',
  alternates: { canonical: '/nieuwbouw' },
};

export const revalidate = 60;

export default async function NieuwbouwPage() {
  const site = await getSiteSettings();
  const layers = journey.map((s) => ({ layer: s.layer, discipline: s.discipline }));

  // FAQ as structured data — the same questions and answers as on the page
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: nieuwbouwFaq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ---------------------------------------------------------------- opening */}
      <section className={`on-dark ${styles.open}`}>
        <div className={`container ${styles.openGrid}`}>
          <div className={styles.openText}>
            <Breadcrumbs items={[{ name: 'Nieuwbouw', path: '/nieuwbouw' }]} />
            <p className={`label ${styles.kicker}`}>Nieuwbouw · afwerken & inrichten</p>
            <h1 className={`display ${styles.title}`}>Nieuwbouwwoning afwerken. Van sleutel tot thuis.</h1>
            <p className={`lede ${styles.lede}`}>
              Een nieuwbouwwoning wordt vaak kaal opgeleverd. Daarna begint het zoeken: een stukadoor,
              een vloerlegger, een tegelzetter, een keukenmonteur. Nederdam neemt dat hele traject van u
              over — van de tekening tot de dag dat u erin woont. U kiest zelf wat u bij ons afneemt:
              één onderdeel, een paar stappen of het hele traject.
            </p>
            <div className={styles.actions}>
              <Link href="/start-uw-project?type=nieuwbouw" className="btn btn--primary">
                Start uw nieuwbouwproject
              </Link>
              <a href={`tel:${site.phoneHref}`} className={styles.phone}>
                Of bel {site.phoneDisplay}
              </a>
            </div>
          </div>
          {/* the empty shell the buyer receives — the journey below fills it in */}
          <div className={styles.openPlan}>
            <NieuwbouwPlan layers={layers} active={0} />
            <p className={`label ${styles.openCaption}`}>Zo krijgt u de sleutel</p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- the problem */}
      <section className={`container ${styles.section}`}>
        <div className={styles.head}>
          <h2 className="heading">{tradesYourself.length} vakmensen zelf zoeken — of één partij die het regelt.</h2>
          <p className={styles.headText}>
            Wie zelf afwerkt, stemt iedere vakman apart af: elk een eigen offerte, eigen planning en
            eigen telefoonnummer. Zet de schakelaar om en zie het verschil.
          </p>
        </div>
        <NieuwbouwCompare trades={tradesYourself} />
      </section>

      {/* ---------------------------------------------------------------- the journey */}
      <section className={`container ${styles.section}`} aria-labelledby="traject">
        <div className={styles.head}>
          <h2 id="traject" className="heading">
            Het traject, stap voor stap
          </h2>
          <p className={styles.headText}>
            Stel uw eigen traject samen. Alleen inmeten en oplevering horen bij elk project; de rest is
            naar keuze. Zet aan wat u wilt — wat u niet kiest, ziet u gestippeld in de tekening.
          </p>
        </div>
        <NieuwbouwJourney steps={journey} />
      </section>

      {/* ---------------------------------------------------------------- questions */}
      <section className={`on-sand ${styles.faq}`}>
        <div className={`container ${styles.faqGrid}`}>
          <h2 className="heading">Veelgestelde vragen over nieuwbouw</h2>
          <div className={styles.faqList}>
            {nieuwbouwFaq.map((f) => (
              <details key={f.q} className={styles.faqItem}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
            <p className={styles.faqMore}>
              Meer over hoe we elk project aanpakken leest u bij onze{' '}
              <Link href="/werkwijze">werkwijze</Link>.
            </p>
          </div>
        </div>
      </section>

      <ContactPanel
        heading="Wanneer krijgt u de sleutel?"
        body="Vertel ons uw sleuteldatum en wat u wilt laten doen. Dan plannen we terug vanaf die dag."
        href="/start-uw-project?type=nieuwbouw"
        cta="Start uw nieuwbouwproject"
      />
    </>
  );
}
