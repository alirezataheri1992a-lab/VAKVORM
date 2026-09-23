import Link from 'next/link';
import type { Metadata } from 'next';
import { workSlots } from '@/lib/projects';
import { heroVideo } from '@/lib/site';
import { getServiceGroups, getPublishedProjects, getSiteSettings } from '@/lib/content';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import { ServiceIcon, type IconName } from '@/components/primitives/ServiceIcon';
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
  const { bouw, interieurHub } = groups;

  const featured = [
    ...['renovatie-verbouwing', 'badkamerrenovatie', 'aanbouw-uitbouw']
      .map((slug) => bouw.find((s) => s.slug === slug))
      .filter((s): s is NonNullable<typeof s> => Boolean(s)),
    ...(interieurHub ? [interieurHub] : []),
  ];

  const pillars: { icon: IconName; label: string; href: string }[] = [
    { icon: 'renovatie', label: 'Renovatie', href: '/bouw/renovatie-verbouwing' },
    { icon: 'badkamer', label: 'Badkamers', href: '/bouw/badkamerrenovatie' },
    { icon: 'uitbouw', label: 'Aan- & uitbouw', href: '/bouw/aanbouw-uitbouw' },
    { icon: 'interieur', label: 'Maatwerk interieur', href: interieurHub?.path ?? '/interieur' },
    { icon: 'oplevering', label: 'Sleutelklaar opgeleverd', href: '/werkwijze' },
  ];

  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />

      {/* 1. HERO — statement left on linen, moving footage right, bleeding to the edge */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <span className={`label ${styles.heroLabel}`}>Bouw &amp; Interieur · {site.city}</span>
          <h1 className={`display rule-under ${styles.heroTitle}`}>Van idee tot leefbare werkelijkheid.</h1>
          <p className={`lede ${styles.heroLede}`}>
            Nederdam realiseert complete verbouwingen, renovaties en maatwerkinterieurs — met één
            aanspreekpunt van voorbereiding tot oplevering.
          </p>
          <div className={styles.heroActions}>
            <Link href="/projecten" className="btn btn--bronze">
              Onze projecten
            </Link>
            <Link href="/contact" className="btn">
              Neem contact op
            </Link>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <HeroVideo src={heroVideo.src} poster={heroVideo.poster} objectPosition="50% 35%" />
        </div>
      </section>

      {/* 2. WHAT WE DO — five line icons on hairlines */}
      <section className={styles.pillars} aria-label="Wat wij doen">
        <ul className={`container ${styles.pillarList}`}>
          {pillars.map((p) => (
            <li key={p.label}>
              <Link href={p.href} className={styles.pillar}>
                <ServiceIcon name={p.icon} size={36} className={styles.pillarIcon} />
                <span className={styles.pillarLabel}>{p.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. ABOUT — statement on charcoal, image with a quote card beside it */}
      <section className={`on-dark ${styles.about}`}>
        <div className={styles.aboutText}>
          <span className={`label ${styles.aboutLabel}`}>Over Nederdam</span>
          <h2 className={`heading rule-under ${styles.aboutTitle}`}>
            Eén partij die bouwt én inricht — en verantwoordelijk is voor het geheel.
          </h2>
          <p className={styles.aboutBody}>
            De meeste verbouwingen lopen vast op afstemming: veel partijen, weinig regie. Nederdam
            organiseert en realiseert complete projecten met eigen vakmensen en een vast netwerk van
            specialisten. U heeft één aanspreekpunt, van eerste schets tot oplevering.
          </p>
          <dl className={styles.aboutFacts}>
            <div>
              <dt className="label">Werkgebied</dt>
              <dd>{site.serviceArea}</dd>
            </div>
            <div>
              <dt className="label">Disciplines</dt>
              <dd>Bouw · Interieur</dd>
            </div>
          </dl>
          <Link href="/over-ons" className="btn btn--bronze">
            Meer over ons
          </Link>
        </div>
        <div className={styles.aboutMedia}>
          <ProjectMedia
            media={{ alt: 'Vakmanschap van Nederdam Bouw', ratio: '4:5', slot: 'Vakmanschap — detail' }}
            tone="taupe"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <blockquote className={styles.aboutQuote}>
            <p>Van fundering tot verfijning.</p>
            <footer className="label">Nederdam · Bouw &amp; Interieur</footer>
          </blockquote>
        </div>
      </section>

      {/* 4. SERVICES — four cards, the fourth is the Interieur discipline */}
      <section className={`container ${styles.services}`}>
        <header className={styles.center}>
          <span className="label">Diensten</span>
          <h2 className="heading rule-under rule-under--center">Onze diensten</h2>
          <p className={styles.centerText}>
            Van bouwkundige ingreep tot het laatste stuk maatwerk — alles onder één regie.
          </p>
        </header>
        <ServiceCards items={featured} />
        <div className={styles.more}>
          <Link href="/diensten" className="btn">
            Alle diensten
          </Link>
        </div>
      </section>

      {/* 5. PROJECTS — real cases when published, honest placeholders until then */}
      <section className={`on-sand ${styles.work}`}>
        <div className="container">
          <header className={styles.workHead}>
            <div>
              <span className="label">Projecten</span>
              <h2 className="heading rule-under">Geselecteerd werk</h2>
            </div>
            <Link href="/projecten" className="textlink">
              Alle projecten
            </Link>
          </header>

          <ul className={styles.workGrid}>
            {published.length > 0
              ? published.slice(0, 3).map((p) => (
                  <li key={p.slug}>
                    <Link href={`/projecten/${p.slug}`} className={styles.workItem}>
                      <ProjectMedia media={{ ...p.hero, ratio: '4:3' }} sizes="(max-width: 900px) 100vw, 33vw" />
                      <span className={styles.workName}>{p.title}</span>
                      <span className="label">
                        {p.pillar === 'bouw' ? 'Bouw' : 'Interieur'} · {p.meta.location}
                      </span>
                    </Link>
                  </li>
                ))
              : workSlots.slice(0, 3).map((w, i) => (
                  <li key={w.slot}>
                    <div className={styles.workItem} data-pending="true">
                      <ProjectMedia
                        media={{ alt: `${w.label} — beeld volgt`, ratio: '4:3', slot: w.slot }}
                        tone={i === 1 ? 'taupe' : 'stone'}
                        sizes="(max-width: 900px) 100vw, 33vw"
                      />
                      <span className={styles.workName}>{w.label}</span>
                      <span className="label">In voorbereiding · {w.place}</span>
                    </div>
                  </li>
                ))}
          </ul>
          {published.length === 0 && (
            <p className={styles.workNote}>
              De eerste projecten van Nederdam worden nu voorbereid. Ze verschijnen hier als complete
              cases — de opgave, onze aanpak en het resultaat, met beeld van het echte werk.
            </p>
          )}
        </div>
      </section>

      {/* 6. WERKWIJZE — four steps in a row */}
      <section className={`container ${styles.process}`}>
        <header className={styles.center}>
          <span className="label">Werkwijze</span>
          <h2 className="heading rule-under rule-under--center">Zo werken wij</h2>
          <p className={styles.centerText}>Eén aanspreekpunt dat plant, coördineert en oplevert.</p>
        </header>
        <ol className={styles.steps}>
          {STEPS.map(([n, t, d]) => (
            <li key={n} className={styles.step}>
              <span className={styles.stepNum}>{n}</span>
              <span className={styles.stepName}>{t}</span>
              <span className={styles.stepDesc}>{d}</span>
            </li>
          ))}
        </ol>
        <div className={styles.more}>
          <Link href="/werkwijze" className="textlink">
            De volledige werkwijze
          </Link>
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
