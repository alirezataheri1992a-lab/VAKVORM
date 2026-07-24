import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { services, interieurSubServices } from '@/lib/services';
import { getPublishedProjects } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '/',
    '/diensten',
    '/projecten',
    '/werkwijze',
    '/over-vakvorm',
    '/contact',
    '/interieurbouw',
  ];

  const servicePaths = services
    .filter((s) => s.pillar === 'bouw')
    .map((s) => s.path)
    .concat(interieurSubServices.map((s) => s.path));

  const projectPaths = getPublishedProjects().map((p) => `/projecten/${p.slug}`);

  const all = [...new Set([...staticPaths, ...servicePaths, ...projectPaths])];

  return all.map((path) => ({
    url: `${site.baseUrl}${path}`,
    changeFrequency: path === '/' ? 'monthly' : 'yearly',
    priority: path === '/' ? 1 : path.startsWith('/projecten') ? 0.7 : 0.8,
  }));
}
