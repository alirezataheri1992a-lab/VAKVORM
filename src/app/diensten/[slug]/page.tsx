import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceGroups, getServiceBySlug } from '@/lib/content';
import { ServicePageView } from '@/components/pages/ServicePageView';

export const revalidate = 60;

export async function generateStaticParams() {
  const { bouw } = await getServiceGroups();
  return bouw.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.metaDescription,
    alternates: { canonical: service.path },
    openGraph: { title: service.seoTitle, description: service.metaDescription, url: service.path },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service || service.pillar !== 'bouw') notFound();

  return (
    <ServicePageView
      service={service}
      crumbs={[
        { name: 'Diensten', path: '/diensten' },
        { name: service.title, path: service.path },
      ]}
    />
  );
}
