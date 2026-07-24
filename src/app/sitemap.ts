import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { getServiceGroups, getPublishedProjects } from '@/lib/content';

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = [
    '/',
    '/diensten',
    '/projecten',
    '/werkwijze',
    '/over-vakvorm',
    '/contact',
    '/interieurbouw',
  ];

  const [groups, projects] = await Promise.all([getServiceGroups(), getPublishedProjects()]);

  const servicePaths = [...groups.bouw, ...groups.interieurSubs].map((s) => s.path);
  const projectPaths = projects.map((p) => `/projecten/${p.slug}`);

  const all = [...new Set([...staticPaths, ...servicePaths, ...projectPaths])];

  return all.map((path) => ({
    url: `${site.baseUrl}${path}`,
    changeFrequency: path === '/' ? 'monthly' : 'yearly',
    priority: path === '/' ? 1 : path.startsWith('/projecten') ? 0.7 : 0.8,
  }));
}
