/* eslint-disable @next/next/no-img-element */
import styles from './Logo.module.css';

/**
 * The approved NEDERDAM logo assets, served exactly as supplied from /public/brand.
 * Nothing here draws, recolours or recomposes a logo: each variant is one fixed SVG file
 * with its own colourway, and the component only chooses which file to show and how large.
 *
 *   horizontal  symbol + NEDERDAM on one line — the header lockup
 *   master      symbol + NEDERDAM + BOUW & INTERIEUR, stacked
 *   bouw        symbol (bronze) + NEDERDAM + BOUW
 *   interieur   symbol (olive) + NEDERDAM + INTERIEUR
 *   mark        the symbol alone, in bronze, olive or off-white
 *
 * `tone` is the surface the logo sits on: 'dark' = the dark colourway for light
 * backgrounds, 'light' = the reversed colourway for charcoal.
 */
export type LogoVariant = 'horizontal' | 'master' | 'bouw' | 'interieur' | 'mark';
export type LogoTone = 'dark' | 'light';
export type MarkColour = 'bronze' | 'olive' | 'white';

const LOCKUPS: Record<Exclude<LogoVariant, 'mark'>, { w: number; h: number; alt: string }> = {
  horizontal: { w: 720, h: 150, alt: 'Nederdam' },
  master: { w: 620, h: 360, alt: 'Nederdam — Bouw & Interieur' },
  bouw: { w: 620, h: 360, alt: 'Nederdam Bouw' },
  interieur: { w: 620, h: 360, alt: 'Nederdam Interieur' },
};

interface Props {
  variant?: LogoVariant;
  tone?: LogoTone;
  /** For `variant="mark"` only: which approved colourway of the symbol. */
  mark?: MarkColour;
  /** Rendered height in px; width follows the file's own aspect ratio. */
  height?: number;
  className?: string;
  /** Decorative use (the accessible name is carried by the surrounding link). */
  decorative?: boolean;
}

export function Logo({ variant = 'horizontal', tone = 'dark', mark = 'bronze', height = 40, className, decorative }: Props) {
  if (variant === 'mark') {
    return (
      <img
        src={`/brand/nederdam-mark-${mark}.svg`}
        alt={decorative ? '' : 'Nederdam'}
        width={120}
        height={105}
        style={{ height, width: 'auto' }}
        className={`${styles.logo} ${className ?? ''}`}
        draggable={false}
      />
    );
  }
  const { w, h, alt } = LOCKUPS[variant];
  return (
    <img
      src={`/brand/nederdam-${variant}-${tone}.svg`}
      alt={decorative ? '' : alt}
      width={w}
      height={h}
      style={{ height, width: 'auto' }}
      className={`${styles.logo} ${className ?? ''}`}
      draggable={false}
    />
  );
}
