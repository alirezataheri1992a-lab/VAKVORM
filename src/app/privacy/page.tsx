import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { SectionMarker } from '@/components/primitives/SectionMarker';
import { getSiteSettings } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Privacyverklaring',
  description: 'Privacyverklaring van VAKVORM.',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: true },
};

export const revalidate = 60;

export default async function PrivacyPage() {
  const site = await getSiteSettings();
  return (
    <section className="container section" style={{ minHeight: '50vh', maxWidth: '760px' }}>
      <Breadcrumbs items={[{ name: 'Privacy', path: '/privacy' }]} />
      <h1 className="display" style={{ margin: '32px 0 24px', fontSize: 'clamp(2rem,5vw,3.4rem)' }}>
        Privacyverklaring
      </h1>
      <SectionMarker label="Nog toe te voegen" />
      <p className="body" style={{ marginTop: '24px' }}>
        De definitieve privacyverklaring wordt hier geplaatst zodra deze is opgesteld.
        Heeft u vragen over hoe wij met uw gegevens omgaan? Neem gerust contact op via{' '}
        <a href={`mailto:${site.email}`} style={{ borderBottom: '1px solid var(--ink)' }}>
          {site.email}
        </a>
        .
      </p>
    </section>
  );
}
