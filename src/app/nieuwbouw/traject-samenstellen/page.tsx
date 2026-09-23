import type { Metadata } from 'next';
import { getSiteSettings } from '@/lib/content';
import { defaultPreset, journey, journeyPresets } from '@/lib/nieuwbouw';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { NieuwbouwBuilder } from '@/components/nieuwbouw/NieuwbouwBuilder';
import styles from './traject.module.css';

export const metadata: Metadata = {
  title: 'Stel uw nieuwbouwtraject samen',
  description:
    'Kies wat Nederdam Bouw in uw nieuwbouwwoning doet: alleen de afbouw, instapklaar of van sleutel tot thuis. Pas het per stap aan en vraag in één keer een offerte aan.',
  alternates: { canonical: '/nieuwbouw/traject-samenstellen' },
};

// ?start=<preset> lets a link (an ad, a post, the homepage) open on a starting point
export default async function TrajectSamenstellenPage({
  searchParams,
}: {
  searchParams: Promise<{ start?: string | string[] }>;
}) {
  const [site, params] = await Promise.all([getSiteSettings(), searchParams]);
  const start = Array.isArray(params.start) ? params.start[0] : params.start;
  const fromLink = journeyPresets.some((p) => p.id === start);

  return (
    <>
      <section className={`container ${styles.head}`}>
        <Breadcrumbs
          items={[
            { name: 'Nieuwbouw', path: '/nieuwbouw' },
            { name: 'Traject samenstellen', path: '/nieuwbouw/traject-samenstellen' },
          ]}
        />
        <div className={styles.headGrid}>
          <h1 className={`display ${styles.title}`}>Stel uw nieuwbouwtraject samen.</h1>
          <p className={`lede ${styles.lede}`}>
            Kies een startpunt en pas het per stap aan. Inmeten en oplevering horen bij elk project; al
            het andere kiest u zelf. Daarna vraagt u in één keer een offerte aan.
          </p>
        </div>
      </section>

      <section className={`container ${styles.body}`}>
        <NieuwbouwBuilder
          steps={journey}
          presets={journeyPresets}
          initialPreset={fromLink ? start! : defaultPreset}
          presetFromLink={fromLink}
          phoneDisplay={site.phoneDisplay}
          phoneHref={site.phoneHref}
        />
      </section>
    </>
  );
}
