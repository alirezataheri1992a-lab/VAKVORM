import type { Metadata } from 'next';
import { getSiteSettings } from '@/lib/content';
import { ProjectJourney } from '@/components/journey/ProjectJourney';

export const metadata: Metadata = {
  title: 'Start uw project',
  description:
    'Start uw project bij VAKVORM. Beantwoord een paar gerichte vragen over uw bouw-, renovatie- of interieurplannen — daarna nemen we persoonlijk contact met u op.',
  alternates: { canonical: '/start-uw-project' },
};

export const revalidate = 60;

export default async function StartUwProjectPage() {
  const site = await getSiteSettings();
  return (
    <ProjectJourney
      phoneDisplay={site.phoneDisplay}
      phoneHref={site.phoneHref}
      email={site.email}
    />
  );
}
