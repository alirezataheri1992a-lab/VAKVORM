import type { Metadata } from 'next';
import { getServiceGroups, getSiteSettings } from '@/lib/content';
import { DisciplineView } from '@/components/pages/DisciplineView';

export const metadata: Metadata = {
  title: 'Bouw — renovatie, verbouwing, aan- en uitbouw',
  description:
    'Nederdam Bouw: complete renovaties en verbouwingen, badkamerrenovatie, aan- en uitbouw, opbouw en stucwerk in Utrecht, Rotterdam, Amsterdam en heel Nederland. Eén partij die plant, coördineert en oplevert.',
  alternates: { canonical: '/bouw' },
};

export const revalidate = 60;

export default async function BouwPage() {
  const [{ bouw }, site] = await Promise.all([getServiceGroups(), getSiteSettings()]);
  return <DisciplineView pillar="bouw" services={bouw} site={site} />;
}
