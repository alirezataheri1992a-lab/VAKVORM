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
      `${project.meta.projectType} in ${project.meta.location} door Nederdam Bouw.`,
    alternates: { canonical: `/projecten/${project.slug}` },
  };
}

/**
 * A project as an architectural case study: the title and the facts, one large image,
 * then the narrative — opgave, aanpak, resultaat — sequenced with the gallery.
 */
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const svcList = await Promise.all(
    project.meta.services.map(async (s) => ({ slug: s, svc: await getServiceBySlug(s) })),
  );
  const discipline = project.pillar === 'bouw' ? 'Bouw' : 'Interieur';

  const facts: [string, React.ReactNode][] = [
    ['Discipline', discipline],
    ['Type', project.meta.projectType],
    ['Locatie', project.meta.location],
    ['Woning', project.meta.propertyType],
    ['Duur', project.meta.duration],
    [
      'Diensten',
      svcList.length
        ? svcList.map(({ slug: s, svc }, i) => (
            <span key={s}>
              {svc ? <Link href={svc.path}>{svc.title}</Link> : s}
              {i < svcList.length - 1 ? ', ' : ''}
            </span>
          ))
        : undefined,
    ],
  ];

  return (
    <div data-pillar={project.pillar}>
      <section className={`container ${styles.open}`}>
        <Breadcrumbs
          items={[
            { name: 'Projecten', path: '/projecten' },
            { name: project.title, path: `/projecten/${project.slug}` },
          ]}
        />
        <div className={`grid12 ${styles.openGrid}`}>
          <div className={styles.openText}>
            <span className={`label ${styles.openMark}`}>
              {discipline} · {project.meta.location}
            </span>
            <h1 className={`display ${styles.title}`}>{project.title}</h1>
          </div>
          <dl className={styles.facts}>
            {facts
              .filter(([, v]) => v)
              .map(([k, v]) => (
                <div key={k}>
                  <dt className="label">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
          </dl>
        </div>
      </section>

      <section className={styles.heroSec}>
        <ProjectMedia media={{ ...project.hero, ratio: '21:9' }} priority sizes="100vw" />
      </section>

      {project.objective && <Narrative index="01" label="De opgave" text={project.objective} />}
      {project.gallery[0] && (
        <section className={`container ${styles.single}`}>
          <ProjectMedia media={project.gallery[0]} sizes="(max-width: 900px) 100vw, 70vw" className={styles.singleMedia} />
        </section>
      )}
      {project.approach && <Narrative index="02" label="Onze aanpak" text={project.approach} />}
      {project.gallery.length > 1 && (
        <section className={`container ${styles.pair}`}>
          {project.gallery.slice(1, 3).map((m, i) => (
            <ProjectMedia key={i} media={{ ...m, ratio: i === 0 ? '4:5' : '3:2' }} sizes="(max-width: 900px) 100vw, 50vw" />
          ))}
        </section>
      )}
      {project.result && <Narrative index="03" label="Het resultaat" text={project.result} />}
      {project.gallery.length > 3 && (
        <section className={styles.heroSec}>
          <ProjectMedia media={{ ...project.gallery[3], ratio: '21:9' }} sizes="100vw" />
        </section>
      )}

      <section className={`container ${styles.back}`}>
        <div className={styles.backRow}>
          <SectionMarker label="Projecten" />
          <Link href="/projecten" className="textlink">
            Alle projecten
          </Link>
        </div>
      </section>

      <ContactPanel heading="Een vergelijkbaar project?" />
    </div>
  );
}

function Narrative({ index, label, text }: { index: string; label: string; text: string }) {
  return (
    <section className={`container ${styles.narrative}`}>
      <div className="grid12">
        <div className={styles.narrativeMark}>
          <SectionMarker index={index} label={label} />
        </div>
        <p className={styles.narrativeText}>{text}</p>
      </div>
    </section>
  );
}
