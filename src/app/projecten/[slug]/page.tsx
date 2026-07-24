import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, getProjectSlugs, getServiceBySlug } from '@/lib/content';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { SectionMarker } from '@/components/primitives/SectionMarker';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import { ContactPanel } from '@/components/sections/ContactPanel';
import styles from './project.module.css';

export const revalidate = 60;

export async function generateStaticParams() {
  return (await getProjectSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};
  return {
    title: project.seoTitle ?? project.title,
    description:
      project.metaDescription ??
      `${project.meta.projectType} in ${project.meta.location} door VAKVORM.`,
    alternates: { canonical: `/projecten/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  // Resolve related services once (async lookups can't run inside the JSX map).
  const svcList = await Promise.all(
    project.meta.services.map(async (s) => ({ slug: s, svc: await getServiceBySlug(s) })),
  );

  const metaRows: [string, string | undefined][] = [
    ['Type', project.meta.projectType],
    ['Locatie', project.meta.location],
    ['Woning', project.meta.propertyType],
    ['Duur', project.meta.duration],
  ];

  return (
    <>
      <section className={`container ${styles.head}`}>
        <Breadcrumbs
          items={[
            { name: 'Projecten', path: '/projecten' },
            { name: project.title, path: `/projecten/${project.slug}` },
          ]}
        />
        <h1 className={`display ${styles.title}`}>{project.title}</h1>
      </section>

      <section className={`container ${styles.heroSec}`}>
        <ProjectMedia media={project.hero} priority sizes="100vw" />
      </section>

      {/* metadata datum block */}
      <section className={`container ${styles.metaSec}`}>
        <dl className={styles.metaGrid}>
          {metaRows
            .filter(([, v]) => v)
            .map(([k, v]) => (
              <div key={k} className={styles.metaItem}>
                <dt className="label">{k}</dt>
                <dd className={styles.metaValue}>{v}</dd>
              </div>
            ))}
          {svcList.length > 0 && (
            <div className={styles.metaItem}>
              <dt className="label">Diensten</dt>
              <dd className={styles.metaValue}>
                {svcList.map(({ slug: s, svc }, i) => (
                  <span key={s}>
                    {svc ? <Link href={svc.path}>{svc.title}</Link> : s}
                    {i < svcList.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </dd>
            </div>
          )}
        </dl>
      </section>

      {/* editorial narrative alternating with gallery */}
      {project.objective && (
        <NarrativeBlock index="01" label="De opgave" text={project.objective} />
      )}
      {project.gallery[0] && (
        <FullMedia media={project.gallery[0]} />
      )}
      {project.approach && (
        <NarrativeBlock index="02" label="Onze aanpak" text={project.approach} />
      )}
      {project.gallery.length > 1 && (
        <section className={`container ${styles.pair}`}>
          {project.gallery.slice(1, 3).map((m, i) => (
            <ProjectMedia key={i} media={m} sizes="(max-width: 900px) 100vw, 50vw" />
          ))}
        </section>
      )}
      {project.result && (
        <NarrativeBlock index="03" label="Het resultaat" text={project.result} />
      )}

      {/* related services */}
      {svcList.some(({ svc }) => svc) && (
        <section className={`container ${styles.related}`}>
          <SectionMarker label="Gerelateerde diensten" />
          <ul className={styles.relatedList}>
            {svcList.map(({ slug: s, svc }) =>
              svc ? (
                <li key={s}>
                  <Link href={svc.path} className={styles.relatedLink}>
                    {svc.title}
                  </Link>
                </li>
              ) : null,
            )}
          </ul>
        </section>
      )}

      <ContactPanel />
    </>
  );
}

function NarrativeBlock({ index, label, text }: { index: string; label: string; text: string }) {
  return (
    <section className={`container ${styles.narrative}`}>
      <div className={styles.narrativeGrid}>
        <SectionMarker index={index} label={label} />
        <p className={styles.narrativeText}>{text}</p>
      </div>
    </section>
  );
}

function FullMedia({ media }: { media: Parameters<typeof ProjectMedia>[0]['media'] }) {
  return (
    <section className={styles.full}>
      <ProjectMedia media={media} sizes="100vw" />
    </section>
  );
}
