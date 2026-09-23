import Link from 'next/link';
import type { Metadata } from 'next';
import { getServiceGroups } from '@/lib/content';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { Logo } from '@/components/chrome/Logo';
import { ServiceCards } from '@/components/sections/ServiceCards';
import { ContactPanel } from '@/components/sections/ContactPanel';
import styles from './diensten.module.css';

export const metadata: Metadata = {
  title: 'Diensten — bouw en maatwerk interieur',
  description:
    'Alle diensten van Nederdam Bouw: renovatie en verbouwing, badkamerrenovatie, aan- en uitbouw, opbouw, stucwerk en maatwerk interieur in Utrecht en omgeving.',
  alternates: { canonical: '/diensten' },
};

export const revalidate = 60;

export default async function DienstenPage() {
  const { bouw, interieurHub, interieurSubs } = await getServiceGroups();
  const interieur = interieurHub ? [interieurHub, ...interieurSubs] : interieurSubs;

  return (
    <>
      <section className={`container ${styles.head}`}>
        <Breadcrumbs items={[{ name: 'Diensten', path: '/diensten' }]} />
        <div className={styles.center}>
          <span className="label">Bouw &amp; Interieur</span>
          <h1 className="display">Onze diensten</h1>
          <p className="lede">
            Twee disciplines, één aanspreekpunt. Van bouwkundige ingreep tot het laatste stuk maatwerk —
            wij plannen, coördineren en leveren op.
          </p>
        </div>
      </section>

      <section className={`container ${styles.group}`} data-pillar="bouw">
        <header className={styles.groupHead}>
          <Logo variant="mark" mark="bronze" height={40} decorative />
          <div>
            <span className="label">01</span>
            <h2 className="heading">Bouw</h2>
          </div>
          <Link href="/bouw" className={`textlink ${styles.groupLink}`}>
            Over Bouw
          </Link>
        </header>
        <ServiceCards items={bouw} />
      </section>

      <section className={`on-sand ${styles.band}`}>
        <div className={`container ${styles.group}`} data-pillar="interieur">
          <header className={styles.groupHead}>
            <Logo variant="mark" mark="olive" height={40} decorative />
            <div>
              <span className="label">02</span>
              <h2 className="heading">Interieur</h2>
            </div>
            <Link href={interieurHub?.path ?? '/interieur'} className={`textlink ${styles.groupLink}`}>
              Over Interieur
            </Link>
          </header>
          <ServiceCards items={interieur} />
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
