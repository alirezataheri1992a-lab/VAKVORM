import type { Metadata } from 'next';
import { getSiteSettings } from '@/lib/content';
import { ProjectJourney } from '@/components/journey/ProjectJourney';
import { condQuestion } from '@/lib/journey';

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

// ?scope=<ids> carries the steps a visitor put together on /nieuwbouw into the intake's
// 'Waar kunnen we u mee helpen?' question. Only known answer ids pass.
const SCOPE_QUESTION: Record<string, string> = {
  nieuwbouw: 'nieuwbouw-scope',
};

const first = (v?: string | string[]) => (Array.isArray(v) ? v[0] : v);

function presetScope(type: string | undefined, scope: string | undefined): Record<string, string[]> {
  const qid = type && SCOPE_QUESTION[type];
  if (!qid || !scope) return {};
  const known = new Set(condQuestion(qid)?.options.map((o) => o.id));
  const values = [...new Set(scope.split(','))].filter((v) => known.has(v));
  return values.length ? { [qid]: values } : {};
}

export default async function StartUwProjectPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string | string[]; scope?: string | string[] }>;
}) {
  const [site, params] = await Promise.all([getSiteSettings(), searchParams]);
  const type = first(params.type);
  return (
    <ProjectJourney
      phoneDisplay={site.phoneDisplay}
      phoneHref={site.phoneHref}
      email={site.email}
      initialServices={(type && PRESETS[type]) || []}
      initialCond={presetScope(type, first(params.scope))}
    />
  );
}
