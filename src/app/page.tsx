import Link from 'next/link';
import type { Metadata } from 'next';
import { workSlots } from '@/lib/projects';
import { heroVideo } from '@/lib/site';
import { getServiceGroups, getPublishedProjects, getSiteSettings } from '@/lib/content';
import { Logo } from '@/components/chrome/Logo';
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

const STEPS = [
  ['01', 'Kennismaking', 'We bespreken uw plannen, wensen en mogelijkheden.'],
  ['02', 'Plan & afstemming', 'Uitwerking van ontwerp, planning en offerte.'],
  ['03', 'Realisatie', 'Uitvoering en coördinatie van alle vakmensen.'],
  ['04', 'Oplevering', 'Controle, afwerking en nette oplevering.'],
] as const;

export default async function HomePage() {
  const [groups, published, site] = await Promise.all([
    getServiceGroups(),
    getPublishedProjects(),
    getSiteSettings(),
  ]);
  const { bouw, interieurHub, interieurSubs } = groups;

  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />

      {/* ============================================================
          HERO — one framed image, the statement in the light serif with
          the bronze rule beneath it, and a margin note of tracked words.
          ============================================================ */}
      <section className={`container ${styles.heroWrap}`}>
        <div className={styles.hero}>
          <HeroVideo src={heroVideo.src} poster={heroVideo.poster} objectPosition="60% 35%" />
          <div className={styles.heroScrim} aria-hidden="true" />
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <span className={`label ${styles.heroLabel}`}>Nederdam · Bouw &amp; Interieur · {site.city}</span>
              <h1 className={`display rule-under ${styles.heroTitle}`}>Van idee tot leefbare werkelijkheid.</h1>
              <div className={styles.heroActions}>
                <Link href="/start-uw-project" className="btn btn--bronze">
                  Start uw project
                </Link>
                <Link href="/projecten" className="textlink">
                  Bekijk projecten
                </Link>
              </div>
            </div>
            <p className={`stack ${styles.heroStack}`} aria-label="Bouwen met mensen voor morgen">
              <span>Bouwen</span>
              <span>met mensen</span>
              <span>voor</span>
              <span>morgen</span>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          01 NEDERDAM — the position in tracked capitals and a short text,
          with the board's two margin notes beside it.
          ============================================================ */}
      <section className={`container ${styles.chapter}`}>
        <SectionMarker index="01" label="Nederdam" />
        <div className={styles.intro}>
          <div className={styles.introMain}>
            <p className={`tracked ${styles.introStatement}`}>Eén merk. Twee disciplines.</p>
            <p className={styles.introText}>
              Nederdam bouwt aan wat blijft. Met vakmanschap, oog voor detail en een integrale
              benadering van bouw en interieur realiseren we ruimtes die mensen versterken — vandaag,
              morgen en voor de volgende generatie.
            </p>
            <Link href="/over-ons" className="textlink">
              Over Nederdam
            </Link>
          </div>
          <p className={`stack ${styles.introStack}`}>
            <span>Ruimte</span>
            <span>maakt</span>
            <span>mogelijk.</span>
          </p>
          <ul className={`stack ${styles.introStack}`} aria-label="Waar wij voor staan">
            <li>Mensen</li>
            <li>Materiaal</li>
            <li>Vakmanschap</li>
            <li>Omgeving</li>
            <li>Toekomst</li>
          </ul>
        </div>
      </section>

      {/* ============================================================
          02 TWEE DISCIPLINES — the two approved lockups side by side,
          divided by one hairline, each with its services.
          ============================================================ */}
      <section className={`container ${styles.chapter}`}>
        <SectionMarker index="02" label="Twee disciplines" />
        <div className={styles.split}>
          <div className={styles.discipline} data-pillar="bouw">
            <Link href="/bouw" className={styles.lockup} aria-label="Nederdam Bouw">
              <Logo variant="bouw" tone="light" height={250} decorative />
            </Link>
            <p className={styles.disciplineText}>
              Renovaties, verbouwingen, badkamers, aan- en uitbouw, opbouw en stucwerk. Wij coördineren
              alle vakmensen en dragen de verantwoordelijkheid voor het hele traject.
            </p>
            <ol className={styles.serviceList}>
              {bouw.map((s, i) => (
                <li key={s.slug}>
                  <Link href={s.path} className={styles.serviceRow}>
                    <span className="label">{String(i + 1).padStart(2, '0')}</span>
                    <span className={styles.serviceName}>{s.navLabel}</span>
                  </Link>
                </li>
              ))}
            </ol>
            <Link href="/bouw" className={`textlink ${styles.disciplineLink}`}>
              Naar Bouw
            </Link>
          </div>

          <div className={styles.discipline} data-pillar="interieur">
            <Link href={interieurHub?.path ?? '/interieur'} className={styles.lockup} aria-label="Nederdam Interieur">
              <Logo variant="interieur" tone="light" height={250} decorative />
            </Link>
            <p className={styles.disciplineText}>
              Maatwerkkasten, wandmeubels en complete interieurs — ontworpen en in eigen beheer gemaakt,
              in hout, fineer en zorgvuldig afgewerkte verbindingen.
            </p>
            <ol className={styles.serviceList}>
              {interieurSubs.map((s, i) => (
                <li key={s.slug}>
                  <Link href={s.path} className={styles.serviceRow}>
                    <span className="label">{String(i + 1).padStart(2, '0')}</span>
                    <span className={styles.serviceName}>{s.navLabel}</span>
                  </Link>
                </li>
              ))}
            </ol>
            <Link href={interieurHub?.path ?? '/interieur'} className={`textlink ${styles.disciplineLink}`}>
              Naar Interieur
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          03 WERKWIJZE — the rationale in tracked capitals, the sequence
          on hairlines, and the values as a margin note.
          ============================================================ */}
      <section className={`container ${styles.chapter}`}>
        <SectionMarker index="03" label="Werkwijze" />
        <div className={styles.process}>
          <div className={styles.processIntro}>
            <p className={`tracked ${styles.processStatement}`}>
              Eén aanspreekpunt.
              <br />
              Twee disciplines.
              <br />
              Meerwaarde in elk detail.
            </p>
            <p className={styles.processText}>
              De meeste verbouwingen lopen vast op afstemming: veel partijen, weinig regie. Nederdam
              plant, coördineert en levert op — met eigen vakmensen en een vast netwerk van specialisten.
            </p>
            <Link href="/werkwijze" className="textlink">
              De volledige werkwijze
            </Link>
          </div>
          <ol className={styles.steps}>
            {STEPS.map(([n, t, d]) => (
              <li key={n} className={styles.step}>
                <span className={styles.stepNum}>{n}</span>
                <span className={styles.stepName}>{t}</span>
                <span className={styles.stepDesc}>{d}</span>
              </li>
            ))}
          </ol>
          <ul className={`stack ${styles.processStack}`} aria-label="Uitgangspunten">
            <li>Balans</li>
            <li>Precisie</li>
            <li>Vakmanschap</li>
            <li>Continuïteit</li>
            <li>Duurzaamheid</li>
          </ul>
        </div>
      </section>

      {/* ============================================================
          04 PROJECTEN — framed images with small captions beneath, as the
          board presents its applications. Honest placeholders until real
          cases are published.
          ============================================================ */}
      <section className={`container ${styles.chapter}`}>
        <SectionMarker index="04" label="Projecten" />
        <ul className={styles.work}>
          {published.length > 0
            ? published.slice(0, 3).map((p) => (
                <li key={p.slug}>
                  <Link href={`/projecten/${p.slug}`} className={styles.workItem}>
                    <ProjectMedia media={{ ...p.hero, ratio: '4:3' }} sizes="(max-width: 900px) 100vw, 36vw" />
                    <span className={`label ${styles.workCaption}`}>
                      {p.title} · {p.meta.location}
                    </span>
                  </Link>
                </li>
              ))
            : workSlots.slice(0, 3).map((w, i) => (
                <li key={w.slot}>
                  <div className={styles.workItem}>
                    <ProjectMedia
                      media={{ alt: `${w.label} — beeld volgt`, ratio: '4:3', slot: 'Beeld volgt' }}
                      tone={i === 1 ? 'taupe' : 'stone'}
                      sizes="(max-width: 900px) 100vw, 36vw"
                    />
                    <span className={`label ${styles.workCaption}`}>
                      {w.label} · In voorbereiding
                    </span>
                  </div>
                </li>
              ))}
        </ul>
        <div className={styles.workFoot}>
          {published.length === 0 && (
            <p className={styles.workNote}>
              De eerste projecten van Nederdam worden nu voorbereid. Ze verschijnen hier als complete
              cases — de opgave, onze aanpak en het resultaat, met beeld van het echte werk.
            </p>
          )}
          <Link href="/projecten" className="textlink">
            Alle projecten
          </Link>
        </div>
      </section>

      {/* A client's words — marked as sample until a real review exists */}
      <Testimonial testimonial={homeTestimonial} />

      {/* The close */}
      <ContactPanel
        heading="Plannen om te bouwen of te verbouwen?"
        body="Vertel kort wat u wilt realiseren. Wij nemen contact op om uw project vrijblijvend te bespreken — van bouwkundige ingreep tot maatwerk interieur."
        facts
      />
    </>
  );
}
