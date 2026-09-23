import Link from 'next/link';
import type { Metadata } from 'next';
import { heroVideo } from '@/lib/site';
import { areas } from '@/lib/areas';
import { journey } from '@/lib/nieuwbouw';
import { getServiceGroups, getPublishedProjects, getSiteSettings } from '@/lib/content';
import { Placeholder } from '@/components/primitives/Placeholder';
import { CertificationMark } from '@/components/primitives/CertificationMark';
import { InstagramLink } from '@/components/primitives/InstagramLink';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import { HeroVideo } from '@/components/sections/HeroVideo';
import { ServiceCards } from '@/components/sections/ServiceCards';
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
  const { bouw, interieurHub, interieurSubs } = groups;
  const featured = published[0];

  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />

      {/* ---------------------------------------------------------------- hero
          The moving footage full width, with what we are, where, and how to reach
          us set on it. */}
      <section className={styles.hero}>
        <HeroVideo src={heroVideo.src} poster={heroVideo.poster} objectPosition={heroVideo.objectPosition} />
        <div className={styles.heroScrim} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <p className={`label ${styles.heroKicker}`}>Aannemer · Bouw &amp; interieur · Heel Nederland</p>
          <h1 className={`display ${styles.heroTitle}`}>
            Aannemer voor verbouw, renovatie en maatwerk interieur.
          </h1>
          <p className={`lede ${styles.heroLede}`}>
            Van ontwerp en vergunning tot oplevering: één bouwbedrijf dat alles regelt, met eigen
            vakmensen, een vast netwerk en een eigen werkplaats. U heeft er geen omkijken naar — in
            Utrecht, Rotterdam, Amsterdam en heel Nederland.
          </p>
          <div className={styles.heroActions}>
            <Link href="/start-uw-project" className="btn btn--primary">
              Vraag een offerte aan
            </Link>
            <a href={`tel:${site.phoneHref}`} className={styles.heroPhone}>
              <span className={styles.heroPhoneLabel}>Of bel direct</span>
              <span className={styles.heroPhoneNumber}>{site.phoneDisplay}</span>
            </a>
          </div>
          <nav className={styles.heroAreas} aria-label="Werkgebied">
            {areas.map((a) => (
              <Link key={a.slug} href={`/werkgebied/${a.slug}`}>
                {a.name}
              </Link>
            ))}
            <Link href="/werkgebied">Heel Nederland</Link>
          </nav>
        </div>
      </section>

      {/* ---------------------------------------------------------------- trust
          Four confirmed facts. Details that still need supplying are marked. */}
      <section className={`on-dark ${styles.trust}`} aria-label="Waarom Nederdam">
        <ul className={`container ${styles.trustList}`}>
          <li className={styles.trustItem}>
            <strong>Erkend bouwbedrijf</strong>
            <span>
              Aangesloten bij <Placeholder>naam erkenning</Placeholder>
            </span>
            <CertificationMark tone="dark" />
          </li>
          <li className={styles.trustItem}>
            <strong>Garantie op ons werk</strong>
            <span>
              <Placeholder>Garantievoorwaarden en termijn</Placeholder>
            </span>
          </li>
          <li className={styles.trustItem}>
            <strong>Eigen werkplaats</strong>
            <span>Maatwerk interieur maken we zelf, van tekening tot montage.</span>
          </li>
          <li className={styles.trustItem}>
            <strong>Verzekerd</strong>
            <span>
              <Placeholder>Soort verzekering, bijv. CAR en aansprakelijkheid</Placeholder>
            </span>
          </li>
        </ul>
      </section>

      {/* ---------------------------------------------------------------- services */}
      <section className={`container ${styles.section}`}>
        <header className={styles.head}>
          <h2 className="heading">Wat we voor u doen</h2>
          <Link href="/diensten" className="textlink">
            Alle diensten
          </Link>
        </header>

        <div className={styles.discipline} data-pillar="bouw">
          <div className={styles.disciplineHead}>
            <h3 className={styles.disciplineTitle}>Bouw</h3>
            <p>Renovatie, verbouw, badkamers, aan- en uitbouw, opbouw en stucwerk.</p>
            <Link href="/bouw" className="textlink">
              Over Bouw
            </Link>
          </div>
          <ServiceCards
            items={bouw}
            extra={
              <Link href="/start-uw-project" className={styles.comboTile}>
                <span className={styles.comboTitle}>Meerdere klussen tegelijk?</span>
                <span className={styles.comboText}>
                  Eén offerte, één planning en één aanspreekpunt voor het hele project.
                </span>
                <span className={styles.comboAction}>Vraag een offerte aan →</span>
              </Link>
            }
          />
        </div>

        <div className={styles.discipline} data-pillar="interieur">
          <div className={styles.disciplineHead}>
            <h3 className={styles.disciplineTitle}>Interieur</h3>
            <p>Kasten, wandmeubels en complete interieurs op maat, gemaakt in onze eigen werkplaats.</p>
            <Link href={interieurHub?.path ?? '/interieur'} className="textlink">
              Over Interieur
            </Link>
          </div>
          <ServiceCards items={interieurSubs} />
        </div>
      </section>

      {/* ---------------------------------------------------------------- project
          Before and after, with the facts of the job. Until the first case is
          published this shows the layout, clearly marked as an example. */}
      <section className={`on-taupe ${styles.section} ${styles.projectBand}`}>
        <div className="container">
          <header className={styles.head}>
            <h2 className="heading">Recent werk</h2>
            <div className={styles.headLinks}>
              <InstagramLink handle={site.instagram} label="Meer werk op Instagram" showHandle={false} />
              <Link href="/projecten" className="textlink">
                Alle projecten
              </Link>
            </div>
          </header>

          {featured ? (
            <Link href={`/projecten/${featured.slug}`} className={styles.project}>
              <div className={styles.projectMedia}>
                <ProjectMedia media={{ ...featured.hero, ratio: '4:3' }} sizes="(max-width: 900px) 100vw, 66vw" />
              </div>
              <div className={styles.projectFacts}>
                <h3 className="title">{featured.title}</h3>
                <dl>
                  <div>
                    <dt>Locatie</dt>
                    <dd>{featured.meta.location}</dd>
                  </div>
                  <div>
                    <dt>Soort klus</dt>
                    <dd>{featured.meta.projectType}</dd>
                  </div>
                </dl>
              </div>
            </Link>
          ) : (
            <div className={styles.project}>
              <div className={styles.beforeAfter}>
                <ProjectMedia media={{ alt: 'Situatie vooraf — foto volgt', ratio: '4:3', slot: 'Voor' }} tone="stone" sizes="(max-width: 900px) 100vw, 33vw" />
                <ProjectMedia media={{ alt: 'Resultaat — foto volgt', ratio: '4:3', slot: 'Na' }} tone="dark" sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <div className={styles.projectFacts}>
                <p className={`label ${styles.example}`}>Voorbeeldindeling — eerste project volgt</p>
                <h3 className="title">
                  <Placeholder>Projectnaam</Placeholder>
                </h3>
                <dl>
                  <div>
                    <dt>Locatie</dt>
                    <dd>
                      <Placeholder>Plaats</Placeholder>
                    </dd>
                  </div>
                  <div>
                    <dt>Soort klus</dt>
                    <dd>
                      <Placeholder>Bijv. badkamerrenovatie</Placeholder>
                    </dd>
                  </div>
                  <div>
                    <dt>Doorlooptijd</dt>
                    <dd>
                      <Placeholder>Aantal weken</Placeholder>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ---------------------------------------------------------------- nieuwbouw
          A doorway to the buyer's journey. Only the step names appear here; the journey
          itself lives on /nieuwbouw, the method on /werkwijze. */}
      <section className={`container ${styles.section}`}>
        <div className={styles.nieuwbouw}>
          <div className={styles.nieuwbouwText}>
            <p className={`label ${styles.nieuwbouwKicker}`}>Nieuwbouw</p>
            <h2 className="heading">Net de sleutel van uw nieuwbouwwoning?</h2>
            <p>
              Een nieuwbouwwoning wordt vaak kaal opgeleverd. Daarna zoekt u voor ieder onderdeel een
              aparte vakman. Wij nemen het hele traject over — van de tekening tot de dag dat u erin
              woont.
            </p>
            <div className={styles.nieuwbouwLinks}>
              <Link href="/nieuwbouw" className="btn btn--primary">
                Van sleutel tot thuis
              </Link>
              <Link href="/werkwijze" className="textlink">
                Onze werkwijze
              </Link>
            </div>
          </div>
          <ol className={styles.nieuwbouwRail} aria-label="Het nieuwbouwtraject in stappen">
            {journey.map((j, i) => (
              <li key={j.id} data-pillar={j.discipline}>
                <span className={styles.railNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.railTitle}>{j.title}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* A client's words — marked as sample until a real review exists */}
      <Testimonial testimonial={homeTestimonial} />

      {/* ---------------------------------------------------------------- close */}
      <ContactPanel
        heading="Plannen voor een verbouwing of maatwerk interieur?"
        body="Vertel kort wat u wilt laten doen. We nemen contact op om uw project vrijblijvend te bespreken."
      />
    </>
  );
}
