import type { Metadata } from 'next';
import { getServiceGroups, getSiteSettings } from '@/lib/content';
import { DisciplineView } from '@/components/pages/DisciplineView';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const { interieurHub } = await getServiceGroups();
  const title = interieurHub?.seoTitle ?? 'Interieur — maatwerk interieurbouw in Utrecht';
  return {
    title,
    description: interieurHub?.metaDescription,
    alternates: { canonical: '/interieur' },
    openGraph: { title, description: interieurHub?.metaDescription, url: '/interieur' },
  };
}

export default async function InterieurPage() {
  const [{ interieurHub, interieurSubs }, site] = await Promise.all([getServiceGroups(), getSiteSettings()]);
  return <DisciplineView pillar="interieur" services={interieurSubs} hub={interieurHub} site={site} />;
}
