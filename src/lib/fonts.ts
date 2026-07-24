import { Bricolage_Grotesque, Archivo } from 'next/font/google';

// Display / editorial identity. Distinctive contemporary grotesk (SIL OFL).
export const display = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
});

// UI / body / technical labels. Neutral grotesk with tabular figures (SIL OFL).
export const text = Archivo({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-text',
});
