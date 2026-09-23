import { Hanken_Grotesk, Newsreader } from 'next/font/google';

// The brand board specifies Söhne (functional layer) and Canela (editorial layer). Both
// are commercially licensed and not bundled here. These are the closest open faces to the
// board: Hanken Grotesk carries Söhne's light, wide-tracked grotesk voice, and Newsreader
// (display optical size, light weight) Canela's open, high-contrast serif. Swapping in the
// licensed faces later is a change to this file only: the rest of the system reads
// `--font-sans` and `--font-serif`, which globals.css builds from the `*-src` variables
// these fonts expose (the names differ on purpose — a token that references itself
// is invalid CSS and silently drops the whole font stack).

// Functional layer — navigation, body, labels, buttons, metadata.
export const sans = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500'],
  variable: '--font-sans-src',
});

// Editorial layer — statements and headings. Variable, with the optical-size axis so large
// settings get the fine display cut automatically.
export const serif = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-serif-src',
});
