import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { getSiteSettings } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Privacyverklaring',
  description: 'Privacyverklaring van Nederdam Bouw.',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: true },
};

export const revalidate = 60;

export default async function PrivacyPage() {
  const site = await getSiteSettings();
  return (
    <section className="container section" style={{ minHeight: '50vh' }}>
      <Breadcrumbs items={[{ name: 'Privacy', path: '/privacy' }]} />
      <h1 className="display" style={{ margin: '48px 0 32px', maxWidth: '12ch' }}>
        Privacyverklaring
      </h1>
      <span className="label">Nog toe te voegen</span>
      <p className="body" style={{ marginTop: '20px' }}>
        De definitieve privacyverklaring wordt hier geplaatst zodra deze is opgesteld. Heeft u vragen
        over hoe wij met uw gegevens omgaan? Neem gerust contact op via{' '}
        <a href={`mailto:${site.email}`} style={{ borderBottom: '1px solid currentColor' }}>
          {site.email}
        </a>
        .
      </p>
    </section>
  );
}
