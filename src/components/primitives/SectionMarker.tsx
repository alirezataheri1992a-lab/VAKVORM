import styles from './SectionMarker.module.css';

interface Props {
  index?: string;
  label: string;
  /** Kept for existing call sites. */
  align?: 'start' | 'end';
  tone?: 'default' | 'ink';
}

/**
 * Section label: a hairline across the column with the label beneath it, left-aligned.
 * Plain on purpose — it names the section, it does not decorate it.
 */
export function SectionMarker({ index, label, tone = 'default' }: Props) {
  return (
    <div className={styles.marker} data-tone={tone}>
      {index && <span className={`label ${styles.index}`}>{index}</span>}
      <span className="label">{label}</span>
    </div>
  );
}
