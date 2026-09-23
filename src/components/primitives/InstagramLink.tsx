import { Placeholder } from './Placeholder';
import styles from './InstagramLink.module.css';

/**
 * Instagram glyph — the platform's own mark, unaltered, in one colour (currentColor), as
 * the brand guidelines allow. Decorative: the link text carries the meaning.
 */
export function InstagramGlyph({ size = 20 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      focusable="false"
      className={styles.glyph}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

interface Props {
  /** Account name without "@"; when missing a marked placeholder is shown instead of a link. */
  handle?: string;
  /** Visible text before the handle, e.g. "Volg ons op Instagram". */
  label?: string;
  /** Show "@handle" after the label. */
  showHandle?: boolean;
  className?: string;
}

/**
 * "Volg ons op Instagram". A secondary link: glyph + text, never a bare icon (an icon alone is
 * ambiguous and hard to hit). It leaves the site, so it opens in a new tab and says so to
 * screen readers.
 */
export function InstagramLink({ handle, label = 'Volg ons op Instagram', showHandle = true, className }: Props) {
  if (!handle) {
    return (
      <span className={`${styles.link} ${className ?? ''}`}>
        <InstagramGlyph />
        <span>
          {label} <Placeholder>@account</Placeholder>
        </span>
      </span>
    );
  }
  return (
    <a
      href={`https://www.instagram.com/${handle}/`}
      target="_blank"
      rel="noopener noreferrer me"
      className={`${styles.link} ${className ?? ''}`}
    >
      <InstagramGlyph />
      <span>
        {label}
        {showHandle && <span className={styles.handle}> @{handle}</span>}
        <span className="visually-hidden"> (opent in een nieuw tabblad)</span>
      </span>
    </a>
  );
}
