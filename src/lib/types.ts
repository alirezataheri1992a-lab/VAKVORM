// Core content types. These mirror the Sanity schemas in /sanity/schemas so the
// front-end can switch from local seed data to Sanity with a localised change.

export type Pillar = 'bouw' | 'interieur';

export interface MediaSlot {
  /** Real image URL once available (Sanity asset or /public). Empty => placeholder. */
  src?: string;
  alt: string;
  /** Aspect ratio as "w:h" — always set so layout holds before assets arrive. */
  ratio: `${number}:${number}`;
  /** Short label shown in the dev placeholder, e.g. "GEVEL" or "DETAIL". */
  slot?: string;
}

export interface Service {
  slug: string;
  /** Full route, e.g. /bouw/badkamerrenovatie or /interieur/maatwerkkasten */
  path: string;
  pillar: Pillar;
  /** Index shown in the datum-line system, e.g. "01". */
  index: string;
  title: string;
  navLabel: string;
  /** One-line descriptor for indexes and dropdown. */
  descriptor: string;
  /** Editorial intro paragraph for the service page. */
  intro: string;
  /** What Nederdam Bouw takes responsibility for on this service. */
  responsibilities: string[];
  hero: MediaSlot;
  seoTitle: string;
  metaDescription: string;
}

export interface ProjectMeta {
  projectType: string;
  location: string;
  propertyType?: string;
  services: string[]; // service slugs
  duration?: string;
}

export interface Project {
  slug: string;
  title: string;
  /** True only for real, publishable projects. Placeholders stay false. */
  published: boolean;
  pillar: Pillar;
  meta: ProjectMeta;
  hero: MediaSlot;
  /** Editorial gallery slots in intended order. */
  gallery: MediaSlot[];
  objective?: string;
  approach?: string;
  result?: string;
  /** Optional editor SEO overrides; fall back to a generated title/description. */
  seoTitle?: string;
  metaDescription?: string;
}

export interface SiteSettings {
  /** Full trading name — metadata, JSON-LD, e-mail signatures, legal pages. */
  name: string;
  /** Display wordmark in the header/footer lockup. Uppercase, one word. */
  wordmark: string;
  /** How the brand reads inside a running sentence. */
  shortName: string;
  descriptor: string;
  email: string;
  phoneDisplay: string;
  phoneHref: string;
  city: string;
  serviceArea: string;
  /** Address is intentionally omitted until confirmed by the owner. */
  addressText?: string;
  baseUrl: string;
}
