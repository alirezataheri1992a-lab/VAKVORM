import Link from 'next/link';
import type { Metadata } from 'next';
import { workSlots } from '@/lib/projects';
import { heroVideo } from '@/lib/site';
import { getServiceGroups, getPublishedProjects, getSiteSettings } from '@/lib/content';
import type { Project } from '@/lib/types';
import { SectionMarker } from '@/components/primitives/SectionMarker';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import { Reveal } from '@/components/primitives/Reveal';
import { HeroVideo } from '@/components/sections/HeroVideo';
import { ServiceIndex } from '@/components/sections/ServiceIndex';
import { ContactPanel } from '@/components/sections/ContactPanel';
import { Testimonial } from '@/components/sections/Testimonial';
import { homeTestimonial } from '@/lib/testimonials';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd';
import styles from './home.module.css';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export const revalidate = 60;

export default async function HomePage() {
  const [groups, published, site] = await Promise.all([
    getServiceGroups(),
    getPublishedProjects(),
    getSiteSettings(),
  ]);
  const { bouw: bouwServices, interieurHub: interieurService, interieurSubs: interieurSubServices, main: services } = groups;
  const featured = published[0];

  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />

      {/* ============================================================
          1. HERO — cinematic craftsmanship video; editorial copy dissolving
          into the moving footage. Real semantic HTML; video is enhancement.
          ============================================================ */}
      <section className={styles.hero}>
        <HeroVideo
          src={heroVideo.src}
          poster={heroVideo.poster}
          objectPosition={heroVideo.objectPosition}
        />
        <div className={styles.heroScrim} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <span className={styles.heroEyebrow}>Aannemer &amp; interieurbouwer in Utrecht</span>
            <h1 className={`display ${styles.heroTitle}`}>
              Van bouw tot interieur.<br />
              <span className={styles.heroAccent}>Eén partij.</span>
            </h1>
            <p className={styles.heroLede}>
              VAKVORM realiseert complete verbouwingen, renovaties en maatwerkinterieurs —
              met één aanspreekpunt van voorbereiding tot oplevering.
            </p>
            <div className={styles.heroActions}>
              <Link href="/start-uw-project" className={styles.btnPrimary}>
                Start uw project
              </Link>
              <Link href="/projecten" className={styles.btnGhost}>
                Bekijk projecten <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. TRUST — one claim, four assurances written as running copy
          (an editorial ledger, deliberately not a benefit-card row)
          ============================================================ */}
      <section className={`on-sand ${styles.trust}`}>
        <div className={`container ${styles.trustInner}`}>
          <h2 className={`heading ${styles.trustClaim}`}>
            Eén partij,<br />van A tot Z.
          </h2>
          <ul className={styles.trustLedger}>
            {[
              ['Eén aanspreekpunt', ' — van eerste schets tot oplevering heeft u één vast contact.'],
              ['Complete begeleiding', ' — wij coördineren alle vakmensen en bewaken het geheel.'],
              ['Heldere planning', ' — vooraf afgestemd, zodat u weet waar u aan toe bent.'],
              ['Hoogwaardige afwerking', ' — vakmanschap tot in het detail, netjes opgeleverd.'],
            ].map(([t, d]) => (
              <li key={t} className={styles.trustLine}>
                <strong>{t}</strong>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================================
          3. SELECTED WORK — one dominant project story, with overlap
          ============================================================ */}
      <section className={`container ${styles.work}`}>
        <div className={styles.workHead}>
          <SectionMarker label="Geselecteerd werk" />
          <Link href="/projecten" className={styles.headLink}>
            Alle projecten
          </Link>
        </div>

        {featured ? (
          <FeaturedProject p={featured} city={site.city} />
        ) : (
          <div className={styles.featured}>
            <div className={styles.featuredMedia}>
              <Reveal className={styles.featuredMain}>
                <ProjectMedia
                  media={{ alt: 'Projectbeeld volgt', ratio: '3:2', slot: 'WONINGRENOVATIE' }}
                  sizes="(max-width: 940px) 100vw, 66vw"
                />
              </Reveal>
              <ProjectMedia
                className={styles.featuredDetail}
                media={{ alt: 'Detailbeeld volgt', ratio: '4:5', slot: 'DETAIL' }}
                sizes="(max-width: 940px) 100vw, 30vw"
              />
            </div>
            <div className={styles.featuredMeta}>
              <div className={styles.featuredMetaText}>
                <span className="spec">Binnenkort — eerste projecten</span>
                <h3 className={styles.featuredTitle}>Elk project als volledige case.</h3>
              </div>
              <p className={styles.featuredNote}>
                De eerste VAKVORM-projecten worden nu voorbereid. Ze verschijnen hier als
                complete cases — de opgave, onze aanpak en het resultaat, met beeld van het
                echte werk.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* ============================================================
          4. TWO WORLDS — Bouw (navy) and Interieurbouw (material)
          ============================================================ */}
      <section className={styles.discIntroSec}>
        <div className="container">
          <div className={styles.discIntro}>
            <h2 className={`heading ${styles.discLead}`}>
              Twee vakgebieden, onder één verantwoordelijkheid.
            </h2>
          </div>
        </div>
      </section>

      {/* Bouw & Renovatie — navy field, broad and structural */}
      <section className={`on-ink ${styles.discBand}`}>
        <div className={`container ${styles.discBandInner}`}>
          <div className={styles.discBandText}>
            <SectionMarker index="01" label="Bouw & Renovatie" tone="ink" />
            <h3 className={`display ${styles.discBandTitle}`}>Bouw &amp; Renovatie</h3>
            <p className={styles.discBandBody}>
              Complete renovaties, verbouwingen, badkamers, aan- en uitbouw, opbouw en
              stucwerk. Wij coördineren alle vakmensen en dragen de verantwoordelijkheid
              voor het hele traject — van fundering tot afwerking.
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
              media={{ alt: 'Bouw en renovatie door VAKVORM', ratio: '4:5', slot: 'BOUW — RUWBOUW' }}
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
        </div>
      </section>

      {/* Maatwerk Interieurbouw — warm material chapter, tactile & overlapping */}
      <section className={`on-material ${styles.discInterieur}`}>
        <div className={`container ${styles.discIntInner}`}>
          <div className={styles.discIntText}>
            <SectionMarker index="02" label="Interieurbouw" />
            <h3 className={`display ${styles.discBandTitle}`}>Maatwerk Interieurbouw</h3>
            <p className={styles.discBandBody}>
              Een volwaardige discipline binnen VAKVORM. Van maatwerkkasten en wandmeubels
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
            <Link href={interieurService?.path ?? '/interieurbouw'} className={styles.discLink}>
              Naar interieurbouw
            </Link>
          </div>
          <div className={styles.discIntMedia}>
            <ProjectMedia
              className={styles.discIntMain}
              media={{ alt: 'Maatwerk interieur door VAKVORM', ratio: '4:5', slot: 'INTERIEUR — RUIMTE' }}
              sizes="(max-width: 900px) 100vw, 38vw"
            />
            <ProjectMedia
              className={styles.discIntDetail}
              media={{ alt: 'Detail van maatwerk — houtverbinding', ratio: '1:1', slot: 'MATERIAAL' }}
              sizes="(max-width: 900px) 55vw, 20vw"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          5. BRAND PRINCIPLE — protected dark statement
          ============================================================ */}
      <section className={`on-ink ${styles.statement}`}>
        <div className="container">
          <p className={styles.statementText}>
            Een complete verbouwing bestaat uit veel disciplines. Voor u voelt het als{' '}
            <em>één</em> project — georganiseerd, gebouwd en afgewerkt door één partij.
          </p>
        </div>
      </section>

      {/* ============================================================
          6. SERVICES — refined interactive catalogue
          ============================================================ */}
      <section className={`container ${styles.servicesSec}`}>
        <div className={styles.servicesHead}>
          <SectionMarker label="Diensten" />
          <Link href="/diensten" className={styles.headLink}>
            Alle diensten
          </Link>
        </div>
        <ServiceIndex items={services} />
      </section>

      {/* ============================================================
          7. CRAFT MOMENT — full-bleed emotional anchor (stop explaining)
          ============================================================ */}
      <section className={styles.craft}>
        <div className={styles.craftMedia}>
          <ProjectMedia
            media={{ alt: 'Afgewerkt VAKVORM-project — ruimte en detail', ratio: '16:9', slot: 'AFWERKING — RUIMTE' }}
            fill
            sizes="100vw"
          />
          <div className={styles.craftOverlay}>
            <p className={styles.craftLine}>
              Van ruwbouw tot<br />laatste detail.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          8. MID-PAGE CTA — a first, obvious next step before the end
          ============================================================ */}
      <section className={`on-material ${styles.midCta}`}>
        <div className="container">
          <div className={styles.midCtaInner}>
            <h2 className={`heading ${styles.midCtaTitle}`}>
              Een verbouwing op de planning? Vertel ons kort wat u wilt realiseren.
            </h2>
            <div className={styles.midCtaActions}>
              <Link href="/start-uw-project" className={styles.midCtaBtn}>
                Plan een projectgesprek
              </Link>
              <a href={`tel:${site.phoneHref}`} className={styles.midCtaPhone}>
                of bel {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          9. WERKWIJZE — a real trust chapter: big image + process
          ============================================================ */}
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
              <h2 className={`display ${styles.procesLead}`}>
                Eén partij die uw project plant, coördineert en oplevert.
              </h2>
              <div className={styles.procesMedia}>
                <ProjectMedia
                  media={{ alt: 'VAKVORM coördineert op de bouwplaats', ratio: '4:5', slot: 'PROCES — UITVOERING' }}
                  sizes="(max-width: 940px) 100vw, 42vw"
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

      {/* ============================================================
          10. PROOF — client reference (placeholder review until a real one exists)
          ============================================================ */}
      <Testimonial testimonial={homeTestimonial} />

      {/* ============================================================
          11. CONVERSION — the destination (distinct from the footer)
          ============================================================ */}
      <ContactPanel
        heading="Plannen om te verbouwen?"
        body="Vertel kort wat u wilt realiseren. Wij nemen contact op om uw project vrijblijvend te bespreken — van bouwkundige ingreep tot maatwerk interieur."
        facts
      />
    </>
  );
}

/* One dominant, real project: large hero image, offset+overlapping detail, meta bar. */
function FeaturedProject({ p, city }: { p: Project; city: string }) {
  const detail = p.gallery[0] ?? { alt: `${p.title} — detail`, ratio: '4:5' as const, slot: 'DETAIL' };
  return (
    <div className={styles.featured}>
      <div className={styles.featuredMedia}>
        <Reveal className={styles.featuredMain}>
          <Link href={`/projecten/${p.slug}`}>
            <ProjectMedia media={{ ...p.hero, ratio: '3:2' }} sizes="(max-width: 940px) 100vw, 66vw" />
          </Link>
        </Reveal>
        <ProjectMedia
          className={styles.featuredDetail}
          media={{ ...detail, ratio: '4:5' }}
          sizes="(max-width: 940px) 100vw, 30vw"
        />
      </div>
      <div className={styles.featuredMeta}>
        <div className={styles.featuredMetaText}>
          <span className="spec">{p.meta.projectType || 'Project'}</span>
          <h3 className={styles.featuredTitle}>{p.title}</h3>
          <span className={styles.featuredLoc}>{p.meta.location || city}</span>
        </div>
        <Link href={`/projecten/${p.slug}`} className={styles.featuredLink}>
          Bekijk project
        </Link>
      </div>
    </div>
  );
}
