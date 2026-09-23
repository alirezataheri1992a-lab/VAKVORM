import Link from 'next/link';
import type { Metadata } from 'next';
import { workSlots } from '@/lib/projects';
import { heroVideo } from '@/lib/site';
import { getServiceGroups, getPublishedProjects, getSiteSettings } from '@/lib/content';
import type { Project } from '@/lib/types';
import { SectionMarker } from '@/components/primitives/SectionMarker';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import { HeroVideo } from '@/components/sections/HeroVideo';
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
  const { bouw: bouwServices, interieurHub, interieurSubs } = groups;
  const [lead, second] = published;

  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />

      {/* ============================================================
          1. HERO — one statement over moving footage. The header sits
          on top of this in light type; nothing else competes with it.
          ============================================================ */}
      <section className={styles.hero}>
        <HeroVideo src={heroVideo.src} poster={heroVideo.poster} objectPosition={heroVideo.objectPosition} />
        <div className={styles.heroScrim} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <span className={`label ${styles.heroLabel}`}>Bouw &amp; Interieur · {site.city}</span>
            <h1 className={`display ${styles.heroTitle}`}>Van idee tot leefbare werkelijkheid.</h1>
          </div>
          <div className={styles.heroAside}>
            <p className={styles.heroDescriptor}>
              Eén partij voor bouw, renovatie en maatwerk interieur — van fundering tot verfijning.
            </p>
            <Link href="/projecten" className={`textlink ${styles.heroLink}`}>
              Bekijk projecten
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. INTRO — the position, in a narrow column, with the facts
          set as quiet metadata beside it.
          ============================================================ */}
      <section className={`container ${styles.intro}`}>
        <div className="grid12">
          <span className={`label ${styles.introMark}`}>Nederdam</span>
          <div className={styles.introText}>
            <h2 className={`heading ${styles.introTitle}`}>
              Eén partij die bouwt én inricht — en de verantwoordelijkheid draagt voor het geheel.
            </h2>
            <p className="body">
              De meeste verbouwingen lopen vast op afstemming: veel partijen, weinig regie. Nederdam
              organiseert en realiseert complete projecten met eigen vakmensen en een vast netwerk van
              specialisten. U heeft één aanspreekpunt, van eerste schets tot oplevering.
            </p>
            <Link href="/over-ons" className="textlink">
              Over Nederdam
            </Link>
          </div>
          <dl className={styles.introFacts}>
            <div>
              <dt className="label">Werkgebied</dt>
              <dd>{site.serviceArea}</dd>
            </div>
            <div>
              <dt className="label">Disciplines</dt>
              <dd>Bouw · Interieur</dd>
            </div>
            <div>
              <dt className="label">Aanspreekpunt</dt>
              <dd>Eén, tot en met de oplevering</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ============================================================
          3. TWO DISCIPLINES — a split screen: Bouw on charcoal with the
          bronze mark, Interieur on stone with the olive mark.
          ============================================================ */}
      <section className={styles.split}>
        <div className={`on-dark ${styles.half}`} data-pillar="bouw">
          <ProjectMedia
            className={styles.halfMedia}
            media={{ alt: 'Bouw en renovatie door Nederdam Bouw', ratio: '3:2', slot: 'Bouw — ruwbouw' }}
            tone="dark"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className={styles.halfBody}>
            <SectionMarker index="01" label="Bouw" tone="ink" />
            <h2 className={`heading ${styles.halfTitle}`}>Bouwen aan wat blijft.</h2>
            <p className={styles.halfText}>
              Renovaties, verbouwingen, badkamers, aan- en uitbouw, opbouw en stucwerk. Wij coördineren
              alle vakmensen en dragen de verantwoordelijkheid voor het hele traject.
            </p>
            <ul className={styles.halfList}>
              {bouwServices.map((s) => (
                <li key={s.slug}>
                  <Link href={s.path}>{s.navLabel}</Link>
                </li>
              ))}
            </ul>
            <Link href="/bouw" className="textlink">
              Naar Bouw
            </Link>
          </div>
        </div>

        <div className={`on-stone ${styles.half} ${styles.halfFlip}`} data-pillar="interieur">
          <ProjectMedia
            className={styles.halfMedia}
            media={{ alt: 'Maatwerk interieur door Nederdam Bouw', ratio: '3:2', slot: 'Interieur — kastwand' }}
            tone="linen"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className={styles.halfBody}>
            <SectionMarker index="02" label="Interieur" />
            <h2 className={`heading ${styles.halfTitle}`}>Ruimte, tot in het detail gemaakt.</h2>
            <p className={styles.halfText}>
              Maatwerkkasten, wandmeubels en complete interieurs — ontworpen en in eigen beheer gemaakt,
              in hout, fineer en zorgvuldig afgewerkte verbindingen.
            </p>
            <ul className={styles.halfList}>
              {interieurSubs.map((s) => (
                <li key={s.slug}>
                  <Link href={s.path}>{s.navLabel}</Link>
                </li>
              ))}
            </ul>
            <Link href={interieurHub?.path ?? '/interieur'} className="textlink">
              Naar Interieur
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. WORK — an editorial index: one large landscape, one portrait
          set lower, then text-only references on hairlines.
          ============================================================ */}
      <section className={`container ${styles.work}`}>
        <div className={styles.workHead}>
          <SectionMarker label="Geselecteerd werk" />
          <Link href="/projecten" className="textlink">
            Alle projecten
          </Link>
        </div>

        <div className="grid12">
          <div className={styles.workLead}>
            {lead ? (
              <WorkFigure p={lead} ratio="3:2" sizes="(max-width: 900px) 100vw, 62vw" />
            ) : (
              <ProjectMedia
                media={{ alt: 'Projectbeeld volgt', ratio: '3:2', slot: 'Woningrenovatie — Utrecht' }}
                sizes="(max-width: 900px) 100vw, 62vw"
              />
            )}
          </div>
          <div className={styles.workSecond}>
            {second ? (
              <WorkFigure p={second} ratio="4:5" sizes="(max-width: 900px) 100vw, 26vw" />
            ) : (
              <ProjectMedia
                media={{ alt: 'Detailbeeld volgt', ratio: '4:5', slot: 'Maatwerkkast — detail' }}
                sizes="(max-width: 900px) 100vw, 26vw"
              />
            )}
          </div>
        </div>

        <ol className={styles.workRefs}>
          {(published.length > 2 ? published.slice(2, 6) : []).map((p) => (
            <li key={p.slug}>
              <Link href={`/projecten/${p.slug}`} className={styles.workRef}>
                <span className={styles.workRefName}>{p.title}</span>
                <span className="label">{p.meta.projectType}</span>
                <span className="label">{p.meta.location}</span>
                <span className="label">{p.pillar === 'bouw' ? 'Bouw' : 'Interieur'}</span>
              </Link>
            </li>
          ))}
          {published.length === 0 &&
            workSlots.slice(0, 4).map((w) => (
              <li key={w.slot}>
                <div className={styles.workRef} data-pending="true">
                  <span className={styles.workRefName}>{w.label}</span>
                  <span className="label">{w.place}</span>
                  <span className="label">In voorbereiding</span>
                  <span className="label">{/KAST|INTERIEUR/.test(w.slot) ? 'Interieur' : 'Bouw'}</span>
                </div>
              </li>
            ))}
        </ol>
        {published.length === 0 && (
          <p className={styles.workNote}>
            De eerste projecten van Nederdam worden nu voorbereid. Ze verschijnen hier als complete cases —
            de opgave, onze aanpak en het resultaat, met beeld van het echte werk.
          </p>
        )}
      </section>

      {/* ============================================================
          5. A FULL-BLEED MOMENT — one image, one line, no explanation.
          ============================================================ */}
      <section className={styles.moment}>
        <ProjectMedia
          media={{ alt: 'Afgewerkt project van Nederdam Bouw — ruimte en licht', ratio: '21:9', slot: 'Afwerking — ruimte' }}
          tone="taupe"
          fill
          sizes="100vw"
        />
        <div className={`container ${styles.momentInner}`}>
          <p className={`display ${styles.momentLine}`}>Van fundering tot verfijning.</p>
        </div>
      </section>

      {/* ============================================================
          6. WERKWIJZE — the statement left, the sequence right.
          ============================================================ */}
      <section className={`container ${styles.process}`}>
        <div className="grid12">
          <div className={styles.processIntro}>
            <SectionMarker label="Werkwijze" />
            <h2 className={`heading ${styles.processTitle}`}>
              Eén aanspreekpunt dat plant, coördineert en oplevert.
            </h2>
            <Link href="/werkwijze" className="textlink">
              De volledige werkwijze
            </Link>
          </div>
          <ol className={styles.processSteps}>
            {[
              ['01', 'Kennismaking', 'We bespreken uw plannen, wensen en mogelijkheden.'],
              ['02', 'Plan & afstemming', 'Uitwerking van ontwerp, planning en offerte.'],
              ['03', 'Realisatie', 'Uitvoering en coördinatie van alle vakmensen.'],
              ['04', 'Oplevering', 'Controle, afwerking en nette oplevering.'],
            ].map(([n, t, d]) => (
              <li key={n} className={styles.processStep}>
                <span className={`label ${styles.processNum}`}>{n}</span>
                <span className={`title ${styles.processName}`}>{t}</span>
                <span className={styles.processDesc}>{d}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. A client's words — marked as sample until a real review exists */}
      <Testimonial testimonial={homeTestimonial} />

      {/* 8. The close */}
      <ContactPanel
        heading="Plannen om te bouwen of te verbouwen?"
        body="Vertel kort wat u wilt realiseren. Wij nemen contact op om uw project vrijblijvend te bespreken — van bouwkundige ingreep tot maatwerk interieur."
        facts
      />
    </>
  );
}

function WorkFigure({ p, ratio, sizes }: { p: Project; ratio: '3:2' | '4:5'; sizes: string }) {
  return (
    <Link href={`/projecten/${p.slug}`} className={styles.workFigure}>
      <ProjectMedia media={{ ...p.hero, ratio }} sizes={sizes} />
      <span className={styles.workCaption}>
        <span className={styles.workRefName}>{p.title}</span>
        <span className="label">
          {p.meta.projectType} · {p.meta.location}
        </span>
      </span>
    </Link>
  );
}
