import { Instrument_Sans, Instrument_Serif } from 'next/font/google';

// The brand board specifies Söhne (functional layer) and Canela (editorial layer). Both
// are commercially licensed and not bundled here. These are the closest open pairing —
// drawn by the same designer, so they are made to sit together — and swapping in the
// licensed faces later is a change to this file only: the rest of the system reads
// `--font-sans` and `--font-serif`, which globals.css builds from the `*-src` variables
// these fonts expose (the names differ on purpose — a token that references itself
// is invalid CSS and silently drops the whole font stack).

// Functional layer — navigation, body, labels, buttons, metadata, functional headings.
export const sans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-sans-src',
});

// Editorial layer — major statements, selected heroes, section introductions. One
// weight only: the serif is used sparingly and never bold.
export const serif = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif-src',
});
