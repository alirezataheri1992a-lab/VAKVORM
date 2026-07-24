import { Public_Sans, IBM_Plex_Mono } from 'next/font/google';

// Primary neo-grotesk — the human-readable layer (display, headings, body, navigation).
// Public Sans: a disciplined Franklin/Helvetica-lineage workhorse gothic — mature,
// neutral-but-not-anonymous, excellent large and small. (SIL OFL.)
export const sans = Public_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

// Technical spec layer — metadata, section labels, capability strips, index numbers.
// IBM Plex Mono gives an architectural drawing / specification character with tabular
// figures. Used sparingly for information, never for reading copy. (SIL OFL.)
export const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-mono',
});
