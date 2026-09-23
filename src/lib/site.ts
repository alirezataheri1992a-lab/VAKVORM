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
// NOTE: contact details below are the owner's temporary details (to be replaced by a
// Nederdam-branded email + confirmed business address). Address is omitted until confirmed.
export const site: SiteSettings = {
  name: 'Nederdam Bouw',
  wordmark: 'NEDERDAM',
  shortName: 'Nederdam',
  descriptor: 'Bouw & Interieur',
  email: 'alireza_taheri92@hotmail.com',
  phoneDisplay: '06 42241075',
  phoneHref: '+31642241075',
  city: 'Utrecht',
  serviceArea: 'Utrecht en omgeving',
  addressText: undefined,
  baseUrl: 'https://www.nederdambouw.nl',
};

// Primary navigation: the two disciplines first, then the supporting pages. No "Home"
// (the logo is home) and no category above the disciplines — NEDERDAM has exactly two.
export const nav = [
  { label: 'Bouw', path: '/bouw', discipline: 'bouw' },
  { label: 'Interieur', path: '/interieur', discipline: 'interieur' },
  { label: 'Projecten', path: '/projecten' },
  { label: 'Werkwijze', path: '/werkwijze' },
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
