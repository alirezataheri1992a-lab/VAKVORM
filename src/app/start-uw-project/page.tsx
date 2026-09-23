import type { Metadata } from 'next';
import { getSiteSettings } from '@/lib/content';
import { ProjectJourney } from '@/components/journey/ProjectJourney';

export const metadata: Metadata = {
  title: 'Start uw project',
  description:
    'Start uw project bij Nederdam Bouw. Beantwoord een paar gerichte vragen over uw bouw-, renovatie- of interieurplannen — daarna nemen we persoonlijk contact met u op.',
  alternates: { canonical: '/start-uw-project' },
};

// ?type=<key> preselects a project type, so a page can send its visitors straight into the
// matching questions (the nieuwbouw page links with ?type=nieuwbouw).
const PRESETS: Record<string, string[]> = {
  nieuwbouw: ['nieuwbouw-afwerken'],
};

export default async function StartUwProjectPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string | string[] }>;
}) {
  const [site, params] = await Promise.all([getSiteSettings(), searchParams]);
  const type = Array.isArray(params.type) ? params.type[0] : params.type;
  return (
    <ProjectJourney
      phoneDisplay={site.phoneDisplay}
      phoneHref={site.phoneHref}
      email={site.email}
      initialServices={(type && PRESETS[type]) || []}
    />
  );
}
