import Link from 'next/link';
import type { Metadata } from 'next';
import { bouwServices, interieurService, interieurSubServices, services } from '@/lib/services';
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

      {/* ---------- A. Opening — image-participating, full-bleed right ---------- */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <span className={styles.heroEyebrow}>
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
              <Link href="/contact" className={styles.btnPrimary}>
                Vrijblijvend kennismaken
              </Link>
              <Link href="/werkwijze" className={styles.btnGhost}>
                Onze werkwijze
              </Link>
            </div>
          </div>

          <div className={styles.heroMedia}>
            <ProjectMedia
              media={{ alt: 'Recent project van Vakvorm', ratio: '3:4', slot: 'HERO — PROJECT' }}
              priority
              fill
              sizes="(max-width: 1040px) 100vw, 46vw"
            />
          </div>
        </div>

        {/* full-width capability datum baseline — a functional use of the line system
            that also states the build breadth (construction register) */}
        <div className={`container ${styles.heroBaseline}`}>
          {['Constructie', 'Renovatie', 'Aanbouw', 'Stucwerk', 'Interieurbouw', 'Coördinatie'].map(
            (cap) => (
              <span key={cap} className={`spec ${styles.cap}`}>
                {cap}
              </span>
            ),
          )}
        </div>
      </section>

      {/* ---------- Trust band — integrated, non-fabricated reassurance ---------- */}
      <section className={`on-sand ${styles.trust}`}>
        <div className="container">
          <ul className={styles.trustGrid}>
            {[
              ['Eén aanspreekpunt', 'Van eerste schets tot oplevering heeft u één vast contact.'],
              ['Complete begeleiding', 'Wij coördineren alle vakmensen en bewaken het geheel.'],
              ['Heldere planning', 'Vooraf afgestemd, zodat u weet waar u aan toe bent.'],
              ['Hoogwaardige afwerking', 'Vakmanschap tot in het detail, netjes opgeleverd.'],
            ].map(([t, d]) => (
              <li key={t} className={styles.trustItem}>
                <h2 className={styles.trustTitle}>{t}</h2>
                <p className={styles.trustDesc}>{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- B. Proof early ---------- */}
      <section className={`container ${styles.work}`}>
        <div className={styles.workHead}>
          <SectionMarker label="Geselecteerd werk" />
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

      {/* ---------- C. Two disciplines — distinct colour-field chapters ---------- */}
      <section className={styles.discIntroSec}>
        <div className="container">
          <div className={styles.discIntro}>
            <SectionMarker label="Twee disciplines" />
            <h2 className={`heading ${styles.discLead}`}>
              Twee vakgebieden, onder één verantwoordelijkheid.
            </h2>
          </div>
        </div>
      </section>

      {/* Bouw & Renovatie — navy field (structural, architectural weight) */}
      <section className={`on-ink ${styles.discBand}`}>
        <div className={`container ${styles.discBandInner}`}>
          <div className={styles.discBandText}>
            <SectionMarker index="01" label="Bouw & Renovatie" tone="ink" />
            <h3 className={`heading ${styles.discBandTitle}`}>Bouw &amp; Renovatie</h3>
            <p className={styles.discBandBody}>
              Complete renovaties, verbouwingen, badkamers, aan- en uitbouw, opbouw en
              stucwerk. Wij coördineren alle vakmensen en dragen de verantwoordelijkheid
              voor het hele traject.
            </p>
            <ul className={styles.discBandList}>
              {bouwServices.map((s) => (
                <li key={s.slug}>
                  <Link href={s.path}>{s.navLabel}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.discBandMedia}>
            <ProjectMedia
              media={{ alt: 'Bouw en renovatie door Vakvorm', ratio: '4:3', slot: 'BOUW' }}
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>
        </div>
      </section>

      {/* Maatwerk Interieurbouw — warm material chapter (tactile, editorial, two images) */}
      <section className={`on-material ${styles.discInterieur}`}>
        <div className={`container ${styles.discIntInner}`}>
          <div className={styles.discIntText}>
            <SectionMarker index="02" label="Interieurbouw" />
            <h3 className={`heading ${styles.discBandTitle}`}>Maatwerk Interieurbouw</h3>
            <p className={styles.discBandBody}>
              Een volwaardige discipline binnen Vakvorm. Van maatwerkkasten en wandmeubels
              tot volledig ingerichte ruimtes — ontworpen en gemaakt tot in het detail, in
              hout, fineer en zorgvuldig afgewerkte verbindingen.
            </p>
            <ul className={styles.discBandList}>
              {interieurSubServices.map((s) => (
                <li key={s.slug}>
                  <Link href={s.path}>{s.navLabel}</Link>
                </li>
              ))}
            </ul>
            <Link href={interieurService.path} className={styles.discLink}>
              Naar interieurbouw
            </Link>
          </div>
          <div className={styles.discIntMedia}>
            <ProjectMedia
              className={styles.discIntMain}
              media={{ alt: 'Maatwerk interieur door Vakvorm', ratio: '4:5', slot: 'INTERIEUR' }}
              sizes="(max-width: 900px) 100vw, 36vw"
            />
            <ProjectMedia
              className={styles.discIntDetail}
              media={{ alt: 'Detail van maatwerk — houtverbinding', ratio: '1:1', slot: 'DETAIL' }}
              sizes="(max-width: 900px) 60vw, 20vw"
            />
          </div>
        </div>
      </section>

      {/* ---------- D. One-partner statement — ink, to break the bone and add weight ---------- */}
      <section className={`on-ink ${styles.statement}`}>
        <div className="container">
          <SectionMarker label="Het principe" tone="ink" />
          <p className={styles.statementText}>
            Een complete verbouwing bestaat uit veel disciplines. Voor u voelt het als{' '}
            <em>één</em> project — georganiseerd, gebouwd en afgewerkt door één partij.
          </p>
          <div className={styles.triad}>
            {['Organiseren', 'Bouwen', 'Afwerken'].map((v) => (
              <span key={v} className={`spec ${styles.triadItem}`}>
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- E. Services index ---------- */}
      <section className={`container ${styles.servicesSec}`}>
        <div className={styles.servicesHead}>
          <SectionMarker label="Diensten" />
        </div>
        <ServiceIndex items={services} />
      </section>

      {/* ---------- F. Werkwijze — process with presence (media + progression) ---------- */}
      <section className={`on-sand ${styles.proces}`}>
        <div className="container">
          <div className={styles.procesHead}>
            <SectionMarker label="Werkwijze" />
            <Link href="/werkwijze" className={styles.headLink}>
              Volledige werkwijze
            </Link>
          </div>
          <div className={styles.procesGrid}>
            <div className={styles.procesIntro}>
              <h2 className={`heading ${styles.procesLead}`}>
                Eén partij die uw project plant, coördineert en oplevert.
              </h2>
              <div className={styles.procesMedia}>
                <ProjectMedia
                  media={{ alt: 'Vakvorm coördineert op de bouwplaats', ratio: '4:3', slot: 'PROCES — UITVOERING' }}
                  sizes="(max-width: 940px) 100vw, 40vw"
                />
              </div>
            </div>
            <ol className={styles.procesSteps}>
              {[
                ['01', 'Kennismaking', 'We bespreken uw plannen, wensen en mogelijkheden.'],
                ['02', 'Plan & afstemming', 'Uitwerking van ontwerp, planning en offerte.'],
                ['03', 'Realisatie', 'Uitvoering en coördinatie van alle vakmensen.'],
                ['04', 'Oplevering', 'Controle, afwerking en nette oplevering.'],
              ].map(([n, t, d]) => (
                <li key={n} className={styles.procesStep}>
                  <span className={`num ${styles.procesNum}`}>{n}</span>
                  <div className={styles.procesStepBody}>
                    <h3 className={styles.procesTitle}>{t}</h3>
                    <p className={styles.procesDesc}>{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- I. Project intake — strong navy conversion moment ---------- */}
      <ContactPanel
        eyebrow="Aan de slag"
        heading="Plannen om te verbouwen?"
        body="Vertel kort wat u wilt realiseren. Wij nemen contact op om uw project vrijblijvend te bespreken — van bouwkundige ingreep tot maatwerk interieur."
        facts
      />
    </>
  );
}
