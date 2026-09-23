import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteSettings } from '@/lib/content';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { ContactForm } from '@/components/sections/ContactForm';
import { LocalBusinessJsonLd } from '@/components/seo/JsonLd';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact & offerte aanvragen',
  description:
    'Bespreek uw bouw-, renovatie- of interieurproject met Nederdam Bouw. Vraag vrijblijvend een offerte aan in Utrecht en omgeving.',
  alternates: { canonical: '/contact' },
};

export const revalidate = 60;

export default async function ContactPage() {
  const site = await getSiteSettings();
  return (
    <>
      <LocalBusinessJsonLd settings={site} />
      <section className={`container ${styles.open}`}>
        <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />
        <div className={`grid12 ${styles.grid}`}>
          <div className={styles.intro}>
            <h1 className={`display ${styles.title}`}>Uw project bespreken.</h1>
            <p className={`lede ${styles.lede}`}>
              Vertel ons kort over uw plannen. We denken graag mee — vrijblijvend en zonder verkooppraat.
            </p>

            <dl className={styles.details}>
              <div>
                <dt className="label">E-mail</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className={styles.detailLink}>
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label">Telefoon</dt>
                <dd>
                  <a href={`tel:${site.phoneHref}`} className={styles.detailLink}>
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label">Werkgebied</dt>
                <dd>{site.serviceArea}</dd>
              </div>
            </dl>

            <p className={styles.journey}>
              Liever stap voor stap? Met de projectaanvraag stellen we een paar gerichte vragen en kunt u
              tekeningen of foto&apos;s meesturen.{' '}
              <Link href="/start-uw-project" className="textlink">
                Start een project
              </Link>
            </p>
          </div>

          <div className={styles.formCol}>
            <ContactForm email={site.email} phoneHref={site.phoneHref} phoneDisplay={site.phoneDisplay} />
          </div>
        </div>
      </section>
    </>
  );
}
