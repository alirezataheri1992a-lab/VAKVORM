import { Hanken_Grotesk } from 'next/font/google';

// One typeface for the whole site. The brand board names Söhne, which is commercially
// licensed and not bundled; Hanken Grotesk is the closest open grotesk and is set in
// sturdy weights (medium/semibold for headings) so the site reads as a builder, not a
// boutique. Swapping in Söhne later is a change to this file only: every stylesheet reads
// `--font-sans`, which globals.css builds from `--font-sans-src` (the names differ on
// purpose — a token that references itself is invalid CSS and drops the whole stack).
export const sans = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-sans-src',
});
