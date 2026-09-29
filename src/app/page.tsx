import Link from 'next/link';
import type { Metadata } from 'next';
import { heroVideo, primaryCta } from '@/lib/site';
import { areas } from '@/lib/areas';
import { journey } from '@/lib/nieuwbouw';
import { homeImages } from '@/lib/media';
import { getServiceGroups, getPublishedProjects } from '@/lib/content';
import { homeTestimonial } from '@/lib/testimonials';
import { ImageFrame } from '@/components/primitives/ImageFrame';
import { HeroVideo } from '@/components/sections/HeroVideo';
import { HeroFrame } from '@/components/sections/HeroFrame';
import { ContactPanel } from '@/components/sections/ContactPanel';
import { Testimonial } from '@/components/sections/Testimonial';
import { NieuwbouwPlan } from '@/components/nieuwbouw/NieuwbouwPlan';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd';
import styles from './home.module.css';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export const revalidate = 60;

// The two processes on this page answer different questions: the nieuwbouw steps are what
// happens to a bare new home; the werkwijze is how working with Nederdam goes, for any job.
const nieuwbouwSteps = [
  { title: 'Plan & ontwerp', text: 'Samen vertalen we uw wensen naar een doordacht plan.' },
  { title: 'Realisatie', text: 'We bouwen met vakmanschap en betrouwbare partners.' },
  { title: 'Interieur', text: 'Maatwerk dat aansluit op de architectuur.' },
  { title: 'Oplevering', text: 'Een thuis dat klopt, tot in het kleinste detail.' },
];

const werkwijze = [
  { title: 'Kennismaken', text: 'Uw wensen en de mogelijkheden van uw woning.' },
  { title: 'Ontwerp & advies', text: 'Een helder plan op maat, met één offerte.' },
  { title: 'Realisatie', text: 'Vakkundige uitvoering in één planning.' },
  { title: 'Oplevering', text: 'Samen nagelopen, tot en met de laatste details.' },
];

const trust = [
  { strong: 'Bouw & interieur', text: 'onder één dak', icon: 'frames' },
  { strong: 'Eén vast', text: 'aanspreekpunt', icon: 'point' },
  { strong: 'Vakmanschap', text: 'tot in detail', icon: 'detail' },
] as const;

export default async function HomePage() {
  const [groups, published] = await Promise.all([getServiceGroups(), getPublishedProjects()]);
  const { bouw, interieurHub, interieurSubs } = groups;
  const [lead, ...more] = published;

  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />

      {/* ---------------------------------------------------------------- hero
          The moving footage, full-bleed; on the first scroll it comes to rest in a kader. */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <HeroFrame>
          <HeroVideo src={heroVideo.src} poster={heroVideo.poster} objectPosition={heroVideo.objectPosition} />
          <div className={styles.heroScrim} />
        </HeroFrame>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <h1 id="hero-title" className={styles.heroTitle}>
              <span className={`label ${styles.heroKicker}`}>Bouw en interieur</span>
              <span className={styles.heroLine}>Van eerste plan tot laatste detail.</span>
            </h1>
            <p className={styles.heroLede}>
              Nederdam bouwt aan wat blijft. Met vakmanschap, oog voor detail en een integrale
              benadering van bouw en interieur realiseren we ruimtes die mensen, bedrijven en
              omgevingen versterken.
            </p>
            <div className={styles.heroActions}>
              <Link href={primaryCta.path} className="btn btn--primary">
                {primaryCta.label}
                <span className="btn-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
              <Link href="/werkwijze" className="textlink">
                Onze werkwijze
              </Link>
            </div>
          </div>
          <p className={styles.wordColumn} aria-hidden="true">
            Ruimte
            <br />
            maakt
            <br />
            mogelijk.
          </p>
          <nav className={styles.heroAreas} aria-label="Werkgebied">
            <span>Aannemer in</span>
            {areas.map((a) => (
              <Link key={a.slug} href={`/werkgebied/${a.slug}`}>
                {a.name}
              </Link>
            ))}
            <Link href="/werkgebied">heel Nederland</Link>
          </nav>
        </div>
      </section>

      {/* ---------------------------------------------------------------- trust */}
      <section className={styles.trust} aria-label="Waarom Nederdam">
        <ul className={`container ${styles.trustList}`}>
          {trust.map((t) => (
            <li key={t.strong} className={styles.trustItem}>
              <TrustIcon kind={t.icon} />
              <p>
                <strong>{t.strong}</strong>
                <span>{t.text}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------------------------------------------------------------- disciplines
          One brand, two disciplines — equal weight, mirrored, the same visual language. */}
      <section className={`container ${styles.section}`} aria-labelledby="disciplines">
        <header className={styles.intro}>
          <p className="label">Eén merk. Twee disciplines.</p>
          <h2 id="disciplines" className={`heading ${styles.introTitle}`}>
            De bouwkundige kant en het interieur, ontworpen en uitgevoerd als één geheel.
          </h2>
        </header>

        <div className={styles.division} data-pillar="bouw">
          <Link href="/bouw" className={styles.divisionMedia} aria-hidden="true" tabIndex={-1}>
            <ImageFrame {...homeImages.bouw} ratio={4 / 5} tone="stone" kader sizes="(max-width: 900px) 100vw, 45vw" />
          </Link>
          <div className={styles.divisionText}>
            <p className={`label ${styles.divisionLabel}`}>
              <span>01</span> Bouw
            </p>
            <h3 className={styles.divisionTitle}>Nieuwbouw, verbouw en renovatie.</h3>
            <p className={styles.divisionBody}>Een solide basis, doordacht van eerste schets tot oplevering.</p>
            <ul className={styles.services}>
              {bouw.map((s) => (
                <li key={s.slug}>
                  <Link href={s.path}>{s.navLabel}</Link>
                </li>
              ))}
              <li>
                <Link href="/nieuwbouw">Nieuwbouw afwerken</Link>
              </li>
            </ul>
            <Link href="/bouw" className="textlink">
              Ontdek Nederdam Bouw
            </Link>
          </div>
        </div>

        <div className={`${styles.division} ${styles.divisionMirror}`} data-pillar="interieur">
          <Link
            href={interieurHub?.path ?? '/interieur'}
            className={styles.divisionMedia}
            aria-hidden="true"
            tabIndex={-1}
          >
            <ImageFrame {...homeImages.interieur} ratio={4 / 3} tone="paper" kader sizes="(max-width: 900px) 100vw, 55vw" />
          </Link>
          <div className={styles.divisionText}>
            <p className={`label ${styles.divisionLabel}`}>
              <span>02</span> Interieur
            </p>
            <h3 className={styles.divisionTitle}>Interieurs die kloppen.</h3>
            <p className={styles.divisionBody}>
              Maatwerk waarin rust, functionaliteit en karakter samenkomen — gemaakt in onze eigen
              werkplaats.
            </p>
            <ul className={styles.services}>
              {interieurSubs.map((s) => (
                <li key={s.slug}>
                  <Link href={s.path}>{s.navLabel}</Link>
                </li>
              ))}
            </ul>
            <Link href={interieurHub?.path ?? '/interieur'} className="textlink">
              Ontdek Nederdam Interieur
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- projects
          Only real, published work. Until the first case is published this section is left
          out entirely — no sample project stands in for one. */}
      {lead && (
        <section className={`container ${styles.section}`} aria-labelledby="projecten">
          <header className={styles.sectionHead}>
            <div>
              <p className="label">Uitgelichte projecten</p>
              <h2 id="projecten" className={`heading ${styles.headTitle}`}>
                Werk waarin bouw, materiaal en detail samenkomen.
              </h2>
            </div>
            <Link href="/projecten" className="textlink">
              Alle projecten
            </Link>
          </header>
          <div className={styles.projects} data-count={Math.min(published.length, 3)}>
            {[lead, ...more.slice(0, 2)].map((p, i) => (
              <Link key={p.slug} href={`/projecten/${p.slug}`} className={styles.project} data-pillar={p.pillar}>
                <ImageFrame
                  src={p.hero.src}
                  alt={p.hero.alt}
                  drawing={p.pillar === 'interieur' ? 'joinery' : 'section'}
                  ratio={i === 0 ? 3 / 2 : 4 / 3}
                  sizes={i === 0 ? '(max-width: 900px) 100vw, 62vw' : '(max-width: 900px) 100vw, 34vw'}
                />
                <div className={styles.projectMeta}>
                  <h3 className={styles.projectTitle}>{p.title}</h3>
                  <p className="label">
                    {[p.meta.location, p.pillar === 'interieur' ? 'Interieur' : 'Bouw', p.meta.projectType]
                      .filter(Boolean)
                      .join(' · ')}
                  </p>
                  <span className={styles.projectArrow} aria-hidden="true">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ---------------------------------------------------------------- material */}
      <section className={`container ${styles.section}`} aria-labelledby="materiaal">
        <div className={styles.material}>
          <div className={styles.materialText}>
            <p className="label">Detail maakt het verschil</p>
            <h2 id="materiaal" className="heading">
              Pure materialen.
              <br />
              Echte kwaliteit.
            </h2>
            <p className={styles.materialBody}>
              Wij werken met natuurlijke, duurzame materialen die mooi ouder worden en hun karakter
              houden. Het maatwerk maken we in onze eigen werkplaats.
            </p>
            <p className={`serif ${styles.statement}`}>
              Vakmanschap zit in wat u ziet. En in wat u niet ziet.
            </p>
            <Link href="/over-ons" className="textlink">
              Over ons vakmanschap
            </Link>
          </div>
          <div className={styles.materialGrid}>
            {homeImages.materials.map((m, i) => (
              <figure key={m.alt} className={styles.materialItem} data-i={i}>
                <ImageFrame {...m} ratio={i === 0 ? 3 / 4 : 1} tone={i === 1 ? 'paper' : 'stone'} sizes="(max-width: 900px) 50vw, 22vw" />
                <figcaption className="label">{m.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- nieuwbouw */}
      <section className={`on-sand ${styles.band}`} aria-labelledby="nieuwbouw">
        <div className={`container ${styles.nieuwbouw}`}>
          <div className={`on-dark ${styles.nieuwbouwPlan}`}>
            <NieuwbouwPlan layers={journey.map((j) => ({ layer: j.layer, discipline: j.discipline }))} active={-1} />
            <p className="label">Van casco tot thuis</p>
          </div>
          <div className={styles.nieuwbouwText}>
            <p className="label">Nieuwbouw</p>
            <h2 id="nieuwbouw" className="heading">
              Van casco naar een thuis dat klopt.
            </h2>
            <p className={styles.nieuwbouwBody}>
              Wij begeleiden het volledige traject — van eerste schets tot de laatste afwerking. U kiest
              zelf welke stappen u bij ons afneemt.
            </p>
            <ol className={styles.steps}>
              {nieuwbouwSteps.map((s, i) => (
                <li key={s.title}>
                  <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
            <div className={styles.actionsRow}>
              <Link href="/nieuwbouw" className="btn btn--primary">
                Bekijk nieuwbouw
                <span className="btn-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
              <Link href="/nieuwbouw/traject-samenstellen" className="textlink">
                Stel uw traject samen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- method
          An architectural timeline: one line drawn across, four points on it. */}
      <section className={`container ${styles.section} ${styles.sectionLast}`} aria-labelledby="werkwijze">
        <header className={styles.sectionHead}>
          <div>
            <p className="label">Onze werkwijze</p>
            <h2 id="werkwijze" className={`heading ${styles.headTitle}`}>
              Van idee tot leefbare werkelijkheid.
            </h2>
            <p className={styles.headText}>Een helder proces, korte lijnen en één vast aanspreekpunt.</p>
          </div>
          <Link href="/werkwijze" className="textlink">
            Hoe wij werken
          </Link>
        </header>
        <ol className={styles.timeline}>
          {werkwijze.map((s, i) => (
            <li key={s.title}>
              <span className={styles.timelineNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.timelineTitle}>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* A client's words — only once a real review exists; there is no sample stand-in. */}
      {!homeTestimonial.placeholder && <Testimonial testimonial={homeTestimonial} />}

      <ContactPanel />
    </>
  );
}

/** Three small line marks for the trust strip, drawn in the geometry of the logo's kader. */
function TrustIcon({ kind }: { kind: 'frames' | 'point' | 'detail' }) {
  return (
    <svg viewBox="0 0 32 32" width="32" height="32" className={styles.trustIcon} aria-hidden="true" focusable="false">
      {kind === 'frames' && <path d="M4 10 V28 H22 M10 4 H28 V22 H10 Z" />}
      {kind === 'point' && (
        <>
          <path d="M4 16 H12 M20 16 H28 M16 4 V12 M16 20 V28" />
          <rect x="12.5" y="12.5" width="7" height="7" />
        </>
      )}
      {kind === 'detail' && <path d="M16 3 L29 16 L16 29 L3 16 Z M16 10 L22 16 L16 22 L10 16 Z" />}
    </svg>
  );
}
