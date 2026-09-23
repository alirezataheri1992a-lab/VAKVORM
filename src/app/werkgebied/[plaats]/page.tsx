import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { areas, getArea } from '@/lib/areas';
import { getServiceGroups, getPublishedProjects, getSiteSettings } from '@/lib/content';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import { ContactPanel } from '@/components/sections/ContactPanel';
import { AreaJsonLd } from '@/components/seo/JsonLd';
import styles from '../werkgebied.module.css';

export const revalidate = 60;
export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((a) => ({ plaats: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ plaats: string }> }): Promise<Metadata> {
  const area = getArea((await params).plaats);
  if (!area) return {};
  const title = `Aannemer ${area.name} — verbouw & maatwerk interieur`;
  const description = `Verbouwing, renovatie, badkamer, aanbouw of maatwerk interieur in ${area.name}? Nederdam Bouw: één aanspreekpunt, eigen werkplaats, garantie. Vraag een offerte aan.`;
  return {
    title,
    description,
    alternates: { canonical: `/werkgebied/${area.slug}` },
    openGraph: { title, description, url: `/werkgebied/${area.slug}` },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ plaats: string }> }) {
  const area = getArea((await params).plaats);
  if (!area) notFound();

  const [groups, projects, site] = await Promise.all([getServiceGroups(), getPublishedProjects(), getSiteSettings()]);
  const { bouw, interieurHub, interieurSubs } = groups;
  // only real, published projects whose location names this city
  const local = projects.filter((p) => p.meta.location?.toLowerCase().includes(area.name.toLowerCase()));
  const others = areas.filter((a) => a.slug !== area.slug);
  const path = `/werkgebied/${area.slug}`;

  return (
    <>
      <AreaJsonLd settings={site} city={area.name} path={path} />

      <section className={`container ${styles.open}`}>
        <Breadcrumbs
          items={[
            { name: 'Werkgebied', path: '/werkgebied' },
            { name: area.name, path },
          ]}
        />
        <p className={`label ${styles.kicker}`}>
          Werkgebied · {area.name}
          {area.province !== area.name && ` · ${area.province}`}
        </p>
        <h1 className={`display ${styles.title}`}>Aannemer in {area.name}.</h1>
        <p className="lede">{area.intro}</p>
        <div className={styles.actions}>
          <Link href="/start-uw-project" className="btn btn--primary">
            Vraag een offerte aan
          </Link>
          <a href={`tel:${site.phoneHref}`} className={styles.phone}>
            Of bel {site.phoneDisplay}
          </a>
        </div>
      </section>

      {/* what we do there */}
      <section className={`container ${styles.block}`}>
        <h2 className="heading">Wat we in {area.name} voor u doen</h2>
        <div className={styles.serviceCols}>
          <div data-pillar="bouw">
            <h3 className={styles.colTitle}>Bouw</h3>
            <ul className={styles.serviceList}>
              {bouw.map((s) => (
                <li key={s.slug}>
                  <Link href={s.path} className={styles.serviceLink}>
                    <span>
                      {s.title} in {area.name}
                    </span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div data-pillar="interieur">
            <h3 className={styles.colTitle}>Interieur</h3>
            <ul className={styles.serviceList}>
              {[...(interieurHub ? [interieurHub] : []), ...interieurSubs].map((s) => (
                <li key={s.slug}>
                  <Link href={s.path} className={styles.serviceLink}>
                    <span>
                      {s.title} in {area.name}
                    </span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* building in this city */}
      <section className={`on-sand ${styles.band}`}>
        <div className="container">
          <div className={styles.localGrid}>
            <div>
              <h2 className="heading">Verbouwen in {area.name}</h2>
              <p className={`body ${styles.localIntro}`}>{area.housing}</p>
            </div>
            <ul className={styles.notes}>
              {area.notes.map((n) => (
                <li key={n.title}>
                  <h3 className={styles.noteTitle}>{n.title}</h3>
                  <p>{n.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* real projects in this city, when they exist */}
      {local.length > 0 && (
        <section className={`container ${styles.block}`}>
          <h2 className="heading">Projecten in {area.name}</h2>
          <ul className={styles.projects}>
            {local.slice(0, 3).map((p) => (
              <li key={p.slug}>
                <Link href={`/projecten/${p.slug}`} className={styles.project}>
                  <ProjectMedia media={{ ...p.hero, ratio: '4:3' }} sizes="(max-width: 900px) 100vw, 33vw" />
                  <span className={styles.projectName}>{p.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* surrounding places and the other cities */}
      <section className={`container ${styles.block}`}>
        <div className={styles.localGrid}>
          <div>
            <h2 className="heading">Ook in de omgeving</h2>
            <p className={`body ${styles.localIntro}`}>
              We werken in heel {area.province} en de rest van Nederland, onder meer in:
            </p>
          </div>
          <div>
            <ul className={styles.nearby}>
              {area.nearby.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <p className={styles.otherCities}>
              Andere werkgebieden:{' '}
              {others.map((o, i) => (
                <span key={o.slug}>
                  <Link href={`/werkgebied/${o.slug}`}>{o.name}</Link>
                  {i < others.length - 1 ? ', ' : ' en '}
                </span>
              ))}
              <Link href="/werkgebied">heel Nederland</Link>.
            </p>
          </div>
        </div>
      </section>

      <ContactPanel
        heading={`Een verbouwing in ${area.name}?`}
        body={`Vertel kort wat u in ${area.name} wilt laten doen. We nemen contact op om uw project vrijblijvend te bespreken.`}
      />
    </>
  );
}
