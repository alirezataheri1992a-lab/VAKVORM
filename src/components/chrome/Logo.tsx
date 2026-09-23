import styles from './Logo.module.css';

export type Discipline = 'bouw' | 'interieur';

interface Props {
  /** Sub-brand lockup. Omit for the master NEDERDAM logo. */
  discipline?: Discipline;
  /** Light lockup for dark surfaces. */
  tone?: 'light' | 'dark';
  /** Symbol height in px; the wordmark scales with it. */
  size?: number;
  /** Symbol only (favicon-like uses, tight spaces). */
  symbolOnly?: boolean;
  className?: string;
}

/**
 * The NEDERDAM symbol: an N built from two strokes — one per discipline — meeting on the
 * diagonal, drawn as an open architectural frame. Vectorised from the identity board;
 * replace `Symbol` with the original artwork when the source file is available.
 */
export function Symbol({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      fill="none"
      stroke="currentColor"
      strokeWidth="12"
      strokeLinejoin="miter"
      strokeLinecap="butt"
    >
      {title && <title>{title}</title>}
      {/* left stem + first half of the diagonal */}
      <path d="M14 94V6l32 38" />
      {/* second half of the diagonal + right stem, cut short at the top */}
      <path d="M54 56l32 38V28" />
    </svg>
  );
}

export function Logo({ discipline, tone = 'dark', size = 28, symbolOnly, className }: Props) {
  const label = discipline
    ? `Nederdam ${discipline === 'bouw' ? 'Bouw' : 'Interieur'}`
    : 'Nederdam';
  return (
    <span
      className={`${styles.logo} ${tone === 'light' ? styles.light : ''} ${className ?? ''}`}
      style={{ ['--logo-size' as string]: `${size}px` }}
      data-pillar={discipline}
    >
      <Symbol className={styles.symbol} title={label} />
      {!symbolOnly && (
        <span className={styles.words}>
          <span className={styles.word}>NEDERDAM</span>
          {discipline && (
            <span className={styles.sub}>{discipline === 'bouw' ? 'Bouw' : 'Interieur'}</span>
          )}
        </span>
      )}
    </span>
  );
}
