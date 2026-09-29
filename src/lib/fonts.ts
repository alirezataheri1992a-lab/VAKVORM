import { Hanken_Grotesk, Newsreader } from 'next/font/google';

// Two voices, as in the huisstijl: a grotesk for nearly everything and a serif for one
// statement per page at most. The brand names Söhne and Canela; both are commercially
// licensed and not bundled, so Hanken Grotesk and Newsreader Light stand in. Swapping in
// the real fonts is a change to this file only (next/font/local with the licensed files):
// every stylesheet reads `--font-sans` / `--font-serif`, which globals.css builds from the
// `-src` variables below (a token that references itself is invalid CSS).
export const sans = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-sans-src',
});

export const serif = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300'],
  style: ['normal', 'italic'],
  variable: '--font-serif-src',
});
