import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { SectionMarker } from '@/components/primitives/SectionMarker';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Algemene voorwaarden',
  description: 'Algemene voorwaarden van Vakvorm.',
  alternates: { canonical: '/algemene-voorwaarden' },
  robots: { index: false, follow: true },
};

export default function VoorwaardenPage() {
  return (
    <section className="container section" style={{ minHeight: '50vh', maxWidth: '760px' }}>
      <Breadcrumbs items={[{ name: 'Algemene voorwaarden', path: '/algemene-voorwaarden' }]} />
      <h1 className="display" style={{ margin: '32px 0 24px', fontSize: 'clamp(2rem,5vw,3.4rem)' }}>
        Algemene voorwaarden
      </h1>
      <SectionMarker label="Nog toe te voegen" />
      <p className="body" style={{ marginTop: '24px' }}>
        De algemene voorwaarden worden hier gepubliceerd zodra deze zijn vastgesteld. Voor
        vragen kunt u contact opnemen via{' '}
        <a href={`mailto:${site.email}`} style={{ borderBottom: '1px solid var(--ink)' }}>
          {site.email}
        </a>
        .
      </p>
    </section>
  );
}
