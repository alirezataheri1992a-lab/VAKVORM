import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { interieurSubServices, getService } from '@/lib/services';
import { ServicePageView } from '@/components/pages/ServicePageView';

export function generateStaticParams() {
  return interieurSubServices.map((s) => ({ slug: s.slug }));
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

export default async function InterieurSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  const isSub = interieurSubServices.some((s) => s.slug === slug);
  if (!service || !isSub) notFound();

  return (
    <ServicePageView
      service={service}
      crumbs={[
        { name: 'Interieurbouw', path: '/interieurbouw' },
        { name: service.title, path: service.path },
      ]}
    />
  );
}
