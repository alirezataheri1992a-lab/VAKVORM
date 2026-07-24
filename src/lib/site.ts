import type { SiteSettings } from './types';

// Single source of truth for organisation details. Never hard-code these in
// components. In production this is replaced by the Sanity `siteSettings` singleton.
// NOTE: contact details below are the owner's temporary details (to be replaced by a
// VAKVORM-branded email + confirmed business address). Address is omitted until confirmed.
export const site: SiteSettings = {
  name: 'VAKVORM',
  descriptor: 'Bouw & Interieur',
  email: 'alireza_taheri92@hotmail.com',
  phoneDisplay: '06 42241075',
  phoneHref: '+31642241075',
  city: 'Utrecht',
  serviceArea: 'Utrecht en omgeving',
  addressText: undefined,
  baseUrl: 'https://www.vakvorm.nl',
};

export const nav = [
  { label: 'Home', path: '/' },
  { label: 'Diensten', path: '/diensten' },
  { label: 'Projecten', path: '/projecten' },
  { label: 'Werkwijze', path: '/werkwijze' },
  { label: 'Over VAKVORM', path: '/over-vakvorm' },
] as const;

// --- Homepage hero video ---------------------------------------------------
// Single source of truth for the cinematic hero background. Swap `src`/`poster`
// here to replace the footage — no component changes needed. `objectPosition`
// keeps the craftsmanship action framed when the portrait source is cover-cropped
// into the wide desktop hero (tuned to the current placeholder clip).
// NOTE: the current file is a TEMPORARY stock placeholder — see /docs/video-sources.md.
export const heroVideo = {
  src: '/videos/vakvorm-hero-placeholder.mp4',
  poster: '/images/hero/hero-poster.jpg',
  objectPosition: '50% 25%',
} as const;
