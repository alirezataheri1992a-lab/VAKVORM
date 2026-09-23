import Link from 'next/link';
import type { Metadata } from 'next';
import { areas, provinces } from '@/lib/areas';
import { getServiceGroups } from '@/lib/content';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { ContactPanel } from '@/components/sections/ContactPanel';
import styles from './werkgebied.module.css';

export const metadata: Metadata = {
  title: 'Werkgebied — Utrecht, Rotterdam, Amsterdam en heel Nederland',
  description:
    'Nederdam Bouw werkt in heel Nederland, met Utrecht, Rotterdam en Amsterdam als vaste werkgebieden. Verbouw, renovatie en maatwerk interieur uit eigen werkplaats.',
  alternates: { canonical: '/werkgebied' },
};

export const revalidate = 60;

export default async function WerkgebiedPage() {
  const { bouw, interieurHub } = await getServiceGroups();

  return (
    <>
      <section className={`container ${styles.open}`}>
        <Breadcrumbs items={[{ name: 'Werkgebied', path: '/werkgebied' }]} />
        <h1 className={`display ${styles.title}`}>Werkgebied: heel Nederland.</h1>
        <p className="lede">
          We werken door het hele land, met Utrecht, Rotterdam en Amsterdam als vaste werkgebieden. Het
          maatwerk interieur maken we in onze eigen werkplaats en monteren we op locatie.
        </p>
      </section>

      <section className={`container ${styles.cities}`}>
        <ul className={styles.cityList}>
          {areas.map((a) => (
            <li key={a.slug}>
              <Link href={`/werkgebied/${a.slug}`} className={styles.city}>
                <span className={styles.cityName}>Aannemer in {a.name}</span>
                <span className={styles.cityText}>{a.housing}</span>
                <span className={styles.cityMore}>Naar {a.name} →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${styles.rest}`}>
        <div className={styles.restGrid}>
          <h2 className="heading">Ook elders in Nederland.</h2>
          <div>
            <p className="body">
              Woont u buiten deze steden? We nemen ook projecten aan in de rest van het land. Vraag een
              offerte aan, dan bespreken we uw plannen en de planning.
            </p>
            <ul className={styles.provinces} aria-label="Provincies">
              {provinces.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className={styles.services}>
              <span className="label">Diensten</span>
              <ul>
                {[...bouw, ...(interieurHub ? [interieurHub] : [])].map((s) => (
                  <li key={s.slug}>
                    <Link href={s.path}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactPanel heading="Een project in uw regio?" />
    </>
  );
}
