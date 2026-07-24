import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { bouwServices, getService } from '@/lib/services';
import { ServicePageView } from '@/components/pages/ServicePageView';

export function generateStaticParams() {
  return bouwServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
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
  const service = getService(slug);
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
