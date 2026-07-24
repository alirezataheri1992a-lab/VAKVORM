import type { Metadata } from 'next';
import { site } from '@/lib/site';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { SectionMarker } from '@/components/primitives/SectionMarker';
import { ContactForm } from '@/components/sections/ContactForm';
import { LocalBusinessJsonLd } from '@/components/seo/JsonLd';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact & offerte aanvragen',
  description:
    'Bespreek uw bouw-, renovatie- of interieurproject met Vakvorm. Vraag vrijblijvend een offerte aan in Utrecht en omgeving.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <section className={`container ${styles.wrap}`}>
        <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />
        <div className={styles.grid}>
          <div className={styles.intro}>
            <SectionMarker index="—" label="Contact" />
            <h1 className={`display ${styles.title}`}>Uw project bespreken.</h1>
            <p className={`lede ${styles.lede}`}>
              Vertel ons kort over uw plannen. We denken graag mee — vrijblijvend en zonder
              verkooppraat.
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
                <dd className={styles.detailText}>
                  {site.city} &amp; {site.serviceArea}
                </dd>
              </div>
            </dl>
          </div>

          <div className={styles.formCol}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
