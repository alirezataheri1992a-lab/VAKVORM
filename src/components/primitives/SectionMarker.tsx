import styles from './SectionMarker.module.css';

interface Props {
  index?: string;
  label: string;
  /** Rule after the label (default, as on the board) or before it. */
  align?: 'start' | 'end';
  /** Kept for existing call sites; every surface is dark now. */
  tone?: 'default' | 'ink';
}

/**
 * Chapter marker, as on the KADER board: an index, a tracked label, then a hairline
 * running to the edge of the column.
 *
 *   01    HOOFDLOGO  ─────────────────────────────────
 */
export function SectionMarker({ index, label, align = 'start' }: Props) {
  return (
    <div className={styles.marker} data-align={align}>
      {index && <span className={`label ${styles.index}`}>{index}</span>}
      <span className={`label ${styles.name}`}>{label}</span>
      <span className={styles.rule} aria-hidden="true" />
    </div>
  );
}
