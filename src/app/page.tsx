import Link from 'next/link';
import type { Metadata } from 'next';
import { bouwServices, interieurService, services } from '@/lib/services';
import { getPublishedProjects, workSlots } from '@/lib/projects';
import { site } from '@/lib/site';
import { SectionMarker } from '@/components/primitives/SectionMarker';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import { Reveal } from '@/components/primitives/Reveal';
import { ServiceIndex } from '@/components/sections/ServiceIndex';
import { ContactPanel } from '@/components/sections/ContactPanel';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd';
import styles from './home.module.css';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  const published = getPublishedProjects();
  const hasProjects = published.length > 0;

  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />

      {/* ---------- A. Opening ---------- */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <span className={`label ${styles.heroEyebrow}`}>
              Aannemer &amp; interieurbouw — {site.city}
            </span>
            <h1 className={`display ${styles.heroTitle}`}>
              Van bouw tot interieur.<br />
              <span className={styles.heroAccent}>Eén partij.</span>
            </h1>
            <p className={`lede ${styles.heroLede}`}>
              Vakvorm realiseert complete verbouwingen, renovaties en maatwerk interieur —
              met één aanspreekpunt, van eerste schets tot oplevering.
            </p>
            <div className={styles.heroActions}>
              <Link href="/projecten" className={styles.btnPrimary}>
                Bekijk projecten
              </Link>
              <Link href="/werkwijze" className={styles.btnGhost}>
                Onze werkwijze
              </Link>
            </div>
          </div>

          <div className={styles.heroMedia}>
            <ProjectMedia
              media={{ alt: 'Recent project van Vakvorm', ratio: '4:5', slot: 'HERO — PROJECT' }}
              priority
              sizes="(max-width: 1040px) 100vw, 42vw"
              caption={
                <SectionMarker index="—" label={`Woningrenovatie · ${site.city}`} />
              }
            />
          </div>
        </div>
      </section>

      {/* ---------- B. Proof early ---------- */}
      <section className={`container ${styles.work}`}>
        <div className={styles.workHead}>
          <SectionMarker index="01" label="Geselecteerd werk" />
          <Link href="/projecten" className={styles.headLink}>
            Alle projecten
          </Link>
        </div>

        {hasProjects ? (
          <div className={styles.workGrid}>
            {published.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 80} className={styles.workItem}>
                <Link href={`/projecten/${p.slug}`}>
                  <ProjectMedia media={p.hero} sizes="(max-width: 900px) 100vw, 40vw" />
                  <div className={styles.workMeta}>
                    <span className={styles.workTitle}>{p.title}</span>
                    <span className="label">{p.meta.location}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <>
            <div className={styles.workGridOffset}>
              <ProjectMedia
                className={styles.workA}
                media={{ alt: 'Projectfoto volgt', ratio: '3:2', slot: workSlots[0].slot }}
                sizes="(max-width: 900px) 100vw, 58vw"
                caption={<span className="label">{workSlots[0].label} · {site.city}</span>}
              />
              <ProjectMedia
                className={styles.workB}
                media={{ alt: 'Projectfoto volgt', ratio: '4:5', slot: workSlots[1].slot }}
                sizes="(max-width: 900px) 100vw, 34vw"
                caption={<span className="label">{workSlots[1].label} · {site.city}</span>}
              />
            </div>
            <p className={styles.workNote}>
              De eerste projecten worden binnenkort toegevoegd. Elk project komt hier als
              volledig uitgewerkte case te staan.
            </p>
          </>
        )}
      </section>

      {/* ---------- C. Two disciplines ---------- */}
      <section className={`${styles.disciplines}`}>
        <div className="container">
          <div className={styles.discIntro}>
            <SectionMarker index="02" label="Twee disciplines" />
            <h2 className={`heading ${styles.discLead}`}>
              Twee vakgebieden, onder één verantwoordelijkheid.
            </h2>
          </div>

          <div className={styles.discBlock}>
            <div className={styles.discMedia}>
              <ProjectMedia
                media={{ alt: 'Bouw en renovatie door Vakvorm', ratio: '4:3', slot: 'BOUW' }}
                sizes="(max-width: 900px) 100vw, 52vw"
              />
            </div>
            <div className={styles.discText}>
              <span className={`num ${styles.discNum}`}>01</span>
              <h3 className={`heading ${styles.discTitle}`}>Bouw &amp; Renovatie</h3>
              <p className="body">
                Complete renovaties, verbouwingen, badkamers, aan- en uitbouw, opbouw en
                stucwerk. Wij coördineren alle vakmensen en dragen de verantwoordelijkheid
                voor het hele traject.
              </p>
              <ul className={styles.discList}>
                {bouwServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={s.path}>{s.navLabel}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`${styles.discBlock} ${styles.discBlockAlt}`}>
            <div className={styles.discText}>
              <span className={`num ${styles.discNum}`}>02</span>
              <h3 className={`heading ${styles.discTitle}`}>Maatwerk Interieurbouw</h3>
              <p className="body">
                Een volwaardige discipline binnen Vakvorm. Van maatwerkkasten en wandmeubels
                tot volledig ingerichte ruimtes — ontworpen en gemaakt tot in het detail.
              </p>
              <ul className={styles.discList}>
                <li>
                  <Link href={interieurService.path}>Maatwerk interieurbouw</Link>
                </li>
              </ul>
              <Link href={interieurService.path} className={styles.discLink}>
                Naar interieurbouw
              </Link>
            </div>
            <div className={styles.discMedia}>
              <ProjectMedia
                media={{ alt: 'Maatwerk interieur door Vakvorm', ratio: '4:5', slot: 'INTERIEUR' }}
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- D. One-partner statement ---------- */}
      <section className={`container ${styles.statement}`}>
        <SectionMarker index="03" label="Het principe" />
        <p className={styles.statementText}>
          U huurt <em>één</em> professionele partij in — geen los verzameld team van
          specialisten dat u zelf moet aansturen. Vakvorm plant, coördineert en levert op.
        </p>
      </section>

      {/* ---------- E. Services index ---------- */}
      <section className={`container ${styles.servicesSec}`}>
        <div className={styles.servicesHead}>
          <SectionMarker index="04" label="Diensten" />
        </div>
        <ServiceIndex items={services} />
      </section>

      {/* ---------- F. Werkwijze preview ---------- */}
      <section className={`${styles.proces}`}>
        <div className="container">
          <div className={styles.procesHead}>
            <SectionMarker index="05" label="Werkwijze" />
            <Link href="/werkwijze" className={styles.headLink}>
              Volledige werkwijze
            </Link>
          </div>
          <ol className={styles.procesList}>
            {[
              ['01', 'Kennismaking', 'We bespreken uw plannen, wensen en mogelijkheden.'],
              ['02', 'Plan & afstemming', 'Uitwerking van ontwerp, planning en offerte.'],
              ['03', 'Realisatie', 'Uitvoering en coördinatie van alle vakmensen.'],
              ['04', 'Oplevering', 'Controle, afwerking en nette oplevering.'],
            ].map(([n, t, d]) => (
              <li key={n} className={styles.procesStep}>
                <span className={`num ${styles.procesNum}`}>{n}</span>
                <span className={styles.procesLine} aria-hidden="true" />
                <h3 className={styles.procesTitle}>{t}</h3>
                <p className={styles.procesDesc}>{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- I. Contact ---------- */}
      <ContactPanel />
    </>
  );
}
