import { Fraunces, Hanken_Grotesk, IBM_Plex_Mono } from 'next/font/google';

// Display / editorial layer — Fraunces: a warm, high-contrast old-style serif with real
// character (contemporary revival). Used for display, headings, quotes and the index
// numerals — the brand "voice". (SIL OFL.)
export const serif = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

// Readable layer — Hanken Grotesk: a clean, faintly warm humanist grotesque for body,
// navigation, labels, buttons and UI. Legible large and small, not anonymous. (SIL OFL.)
export const sans = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

// Technical spec layer — IBM Plex Mono: capability strips and genuine spec tags only.
// A quiet counterpoint to the editorial serif. Never used for reading copy. (SIL OFL.)
export const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-mono',
});
