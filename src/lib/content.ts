import { cache } from 'react';
import type { Project, Service, SiteSettings, MediaSlot, Pillar } from './types';
import { sanityClient } from './sanity/client';
import { sanityEnabled } from './sanity/env';
import {
  settingsQuery,
  servicesQuery,
  publishedProjectsQuery,
  projectBySlugQuery,
  projectSlugsQuery,
} from './sanity/queries';
import { toMediaSlot } from './sanity/image';
// ---- development fallback data (used when Sanity is not configured) ----
import { site as fallbackSite } from './site';
import { services as fbServices, interieurSubServices as fbSubs } from './services';
import { getPublishedProjects as fbProjects } from './projects';

/*
 * Single source of truth for all page content. When Sanity is configured
 * (NEXT_PUBLIC_SANITY_PROJECT_ID set) every getter reads published documents from Sanity;
 * otherwise it returns the local development seed so the site always builds and renders.
 * The public front-end imports ONLY from this module — never the raw seed files.
 */

/* ============================ SiteSettings ============================ */

export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  if (sanityEnabled && sanityClient) {
    const data = await sanityClient.fetch<Partial<SiteSettings> | null>(settingsQuery);
    if (data) {
      // baseUrl is deployment config, never editor-managed; keep it from code. Only
      // override fields the editor actually provided (non-empty).
      const merged: SiteSettings = { ...fallbackSite };
      (Object.keys(data) as (keyof SiteSettings)[]).forEach((k) => {
        const v = data[k];
        if (v !== null && v !== undefined && v !== '')
          (merged as unknown as Record<string, unknown>)[k] = v;
      });
      return merged;
    }
  }
  return fallbackSite;
});

/* ============================== Services ============================== */

function servicePath(pillar: Pillar, slug: string, parentSlug?: string): string {
  if (pillar === 'bouw') return `/diensten/${slug}`;
  if (parentSlug) return `/interieurbouw/${slug}`;
  return '/interieurbouw';
}

interface RawService {
  slug: string;
  pillar: Pillar;
  index?: string;
  title: string;
  navLabel?: string;
  descriptor?: string;
  intro?: string;
  responsibilities?: string[];
  seoTitle?: string;
  metaDescription?: string;
  parentSlug?: string;
  hero?: { alt?: string; asset?: { _ref?: string } };
}

function mapService(r: RawService): Service {
  const ratio: MediaSlot['ratio'] = r.pillar === 'interieur' ? '4:5' : '4:3';
  return {
    slug: r.slug,
    path: servicePath(r.pillar, r.slug, r.parentSlug),
    pillar: r.pillar,
    index: r.index ?? '',
    title: r.title,
    navLabel: r.navLabel ?? r.title,
    descriptor: r.descriptor ?? '',
    intro: r.intro ?? '',
    responsibilities: r.responsibilities ?? [],
    hero: toMediaSlot(r.hero, ratio, r.title.toUpperCase()),
    seoTitle: r.seoTitle ?? r.title,
    metaDescription: r.metaDescription ?? '',
  };
}

export const getAllServices = cache(async (): Promise<Service[]> => {
  if (sanityEnabled && sanityClient) {
    const raw = await sanityClient.fetch<RawService[]>(servicesQuery);
    if (raw?.length) return raw.map(mapService);
  }
  return [...fbServices, ...fbSubs];
});

/**
 * Grouped views used by navigation, footer and index sections.
 * - `main`        : the 6 top-level services (bouw + interieur hub) for the homepage index.
 * - `bouw`        : the 5 construction services.
 * - `interieurHub`: the /interieurbouw pillar page.
 * - `interieurSubs`: interieurbouw specialisations.
 */
export const getServiceGroups = cache(async () => {
  const all = await getAllServices();
  const bouw = all.filter((s) => s.pillar === 'bouw');
  const interieur = all.filter((s) => s.pillar === 'interieur');
  const interieurHub = interieur.find((s) => s.path === '/interieurbouw') ?? interieur[0];
  const interieurSubs = interieur.filter((s) => s.path.startsWith('/interieurbouw/'));
  const main = interieurHub ? [...bouw, interieurHub] : bouw;
  return { all, main, bouw, interieurHub, interieurSubs };
});

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  return (await getAllServices()).find((s) => s.slug === slug);
}

export async function getServiceTitle(slug: string): Promise<string> {
  return (await getServiceBySlug(slug))?.title ?? slug;
}

/* ============================== Projects ============================== */

interface RawProject {
  slug: string;
  title: string;
  published: boolean;
  pillar: Pillar;
  year?: string;
  projectType?: string;
  location?: string;
  propertyType?: string;
  duration?: string;
  services?: string[];
  objective?: string;
  approach?: string;
  result?: string;
  seoTitle?: string;
  metaDescription?: string;
  hero?: { alt?: string; asset?: { _ref?: string } };
  gallery?: { alt?: string; caption?: string; asset?: { _ref?: string } }[];
}

function mapProject(r: RawProject): Project {
  return {
    slug: r.slug,
    title: r.title,
    published: r.published,
    pillar: r.pillar,
    meta: {
      projectType: r.projectType ?? '',
      location: r.location ?? '',
      propertyType: r.propertyType,
      services: (r.services ?? []).filter(Boolean),
      duration: r.duration,
    },
    hero: toMediaSlot(r.hero, '3:2', 'PROJECT'),
    gallery: (r.gallery ?? []).map((g) => toMediaSlot(g, '3:2')),
    objective: r.objective,
    approach: r.approach,
    result: r.result,
    seoTitle: r.seoTitle,
    metaDescription: r.metaDescription,
  };
}

export const getPublishedProjects = cache(async (): Promise<Project[]> => {
  if (sanityEnabled && sanityClient) {
    const raw = await sanityClient.fetch<RawProject[]>(publishedProjectsQuery);
    return (raw ?? []).map(mapProject);
  }
  return fbProjects();
});

export async function getProject(slug: string): Promise<Project | undefined> {
  if (sanityEnabled && sanityClient) {
    const raw = await sanityClient.fetch<RawProject | null>(projectBySlugQuery, { slug });
    return raw ? mapProject(raw) : undefined;
  }
  return fbProjects().find((p) => p.slug === slug);
}

/** Published project slugs for static generation. New slugs still render via ISR. */
export async function getProjectSlugs(): Promise<string[]> {
  if (sanityEnabled && sanityClient) {
    const slugs = await sanityClient.fetch<string[]>(projectSlugsQuery);
    return (slugs ?? []).filter(Boolean);
  }
  return fbProjects().map((p) => p.slug);
}
