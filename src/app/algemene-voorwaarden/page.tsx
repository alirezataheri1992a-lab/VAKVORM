import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { getSiteSettings } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Algemene voorwaarden',
  description: 'Algemene voorwaarden van Nederdam Bouw.',
  alternates: { canonical: '/algemene-voorwaarden' },
  robots: { index: false, follow: true },
};

export const revalidate = 60;

export default async function VoorwaardenPage() {
  const site = await getSiteSettings();
  return (
    <section className="container section" style={{ minHeight: '50vh' }}>
      <Breadcrumbs items={[{ name: 'Algemene voorwaarden', path: '/algemene-voorwaarden' }]} />
      <h1 className="display" style={{ margin: '48px 0 32px', maxWidth: '12ch' }}>
        Algemene voorwaarden
      </h1>
      <span className="label">Nog toe te voegen</span>
      <p className="body" style={{ marginTop: '20px' }}>
        De algemene voorwaarden worden hier gepubliceerd zodra deze zijn vastgesteld. Voor vragen kunt
        u contact opnemen via{' '}
        <a href={`mailto:${site.email}`} style={{ borderBottom: '1px solid currentColor' }}>
          {site.email}
        </a>
        .
      </p>
    </section>
  );
}
