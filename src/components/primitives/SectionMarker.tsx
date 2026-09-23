import styles from './SectionMarker.module.css';

interface Props {
  index?: string;
  label: string;
  /** Place label before the rule (default) or after it. */
  align?: 'start' | 'end';
  tone?: 'default' | 'ink';
}

/**
 * Section marker: an optional index, a hairline, and a small tracked label.
 *
 *   01 ────────────────────────────────────────  BOUW
 */
export function SectionMarker({ index, label, align = 'start', tone = 'default' }: Props) {
  return (
    <div className={`${styles.marker} ${tone === 'ink' ? styles.ink : ''}`} data-align={align}>
      {index && <span className={`label ${styles.index}`}>{index}</span>}
      <span className={styles.rule} aria-hidden="true" />
      <span className="label">{label}</span>
    </div>
  );
}
