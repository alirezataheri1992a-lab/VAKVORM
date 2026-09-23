import type { SiteSettings } from './types';

// Single source of truth for organisation details. Never hard-code these in
// components. In production this is replaced by the Sanity `siteSettings` singleton.
//
// The brand reads in three registers and they are deliberately separate:
//   name      "Nederdam Bouw"  full trading name — metadata, JSON-LD, e-mail, legal
//   wordmark  "NEDERDAM"       the header/footer lockup; `descriptor` sits under it,
//                              so the lockup reads as the full name without doubling "Bouw"
//   shortName "Nederdam"       inside a running sentence
//
// NOTE: the business address is omitted until confirmed.
export const site: SiteSettings = {
  name: 'Nederdam Bouw',
  wordmark: 'NEDERDAM',
  shortName: 'Nederdam',
  descriptor: 'Bouw & Interieur',
  email: 'info@nederdambouw.nl',
  phoneDisplay: '06 42241075',
  phoneHref: '+31642241075',
  city: 'Utrecht',
  serviceArea: 'Heel Nederland',
  addressText: undefined,
  // Instagram account name (without @). Not yet supplied — the site shows a marked
  // placeholder until it is set; never guess it, it could be someone else's account.
  instagram: undefined,
  baseUrl: 'https://www.nederdambouw.nl',
};

// Primary navigation. "Diensten" opens a submenu with the two disciplines (Bouw, Interieur)
// and their services; the discipline pages keep their own URLs.
// Main navigation: the two disciplines lead (each opens its services), then the pages in
// the order a client looks for them.
export const nav = [
  { label: 'Bouw', path: '/bouw', menu: 'bouw' },
  { label: 'Interieur', path: '/interieur', menu: 'interieur' },
  { label: 'Nieuwbouw', path: '/nieuwbouw' },
  { label: 'Projecten', path: '/projecten' },
  { label: 'Werkwijze', path: '/werkwijze' },
  { label: 'Contact', path: '/contact' },
] as const;

// Page list for the footer and the mobile menu.
export const pages = [
  { label: 'Nieuwbouw', path: '/nieuwbouw' },
  { label: 'Diensten', path: '/diensten' },
  { label: 'Projecten', path: '/projecten' },
  { label: 'Werkwijze', path: '/werkwijze' },
  { label: 'Werkgebied', path: '/werkgebied' },
  { label: 'Over ons', path: '/over-ons' },
  { label: 'Contact', path: '/contact' },
] as const;

// --- Homepage hero video ---------------------------------------------------
// Single source of truth for the cinematic hero background. Swap `src`/`poster`
// here to replace the footage — no component changes needed. `objectPosition`
// keeps the craftsmanship action framed when the portrait source is cover-cropped
// into the wide desktop hero (tuned to the current placeholder clip).
// NOTE: the current file is a TEMPORARY stock placeholder — see /docs/video-sources.md.
export const heroVideo = {
  src: '/videos/hero-placeholder.mp4',
  poster: '/images/hero/hero-poster.jpg',
  objectPosition: '50% 25%',
} as const;
