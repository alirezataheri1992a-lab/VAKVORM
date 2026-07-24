import styles from './SectionMarker.module.css';

interface Props {
  index?: string;
  label: string;
  /** Place label before the rule (default) or after it. */
  align?: 'start' | 'end';
  tone?: 'default' | 'ink';
}

/**
 * The VAKVORM datum marker: index number + hairline rule + label.
 * The quiet architectural signature used at section intros and indexes.
 *
 *   01 ─────────────────────  BOUW & RENOVATIE
 */
export function SectionMarker({ index, label, align = 'start', tone = 'default' }: Props) {
  return (
    <div className={`${styles.marker} ${tone === 'ink' ? styles.ink : ''}`} data-align={align}>
      {index && <span className={`num ${styles.index}`}>{index}</span>}
      <span className={styles.rule} aria-hidden="true" />
      <span className="label">{label}</span>
    </div>
  );
}
