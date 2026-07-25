'use client';

import styles from './journey.module.css';

interface Option {
  id: string;
  label: string;
  hint?: string;
}

interface Props {
  name: string;
  type: 'single' | 'multi';
  options: Option[];
  value: string[];
  onChange: (next: string[]) => void;
  cols?: 1 | 2;
  ariaLabel?: string;
}

function Check() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.5l3.2 3.2L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Native radio/checkbox semantics with VAKVORM's typographic row styling — keyboard and
 * screen-reader correct (real inputs, visually hidden), never colour-only selected state.
 */
export function OptionSelector({ name, type, options, value, onChange, cols = 1, ariaLabel }: Props) {
  const toggle = (id: string) => {
    if (type === 'single') {
      onChange([id]);
    } else {
      onChange(value.includes(id) ? value.filter((v) => v !== id) : [...value, id]);
    }
  };

  return (
    <div
      className={styles.options}
      data-cols={cols}
      role={type === 'single' ? 'radiogroup' : 'group'}
      aria-label={ariaLabel}
    >
      {options.map((o) => {
        const selected = value.includes(o.id);
        return (
          <label key={o.id} className={styles.option} data-selected={selected}>
            <input
              className="visually-hidden"
              type={type === 'single' ? 'radio' : 'checkbox'}
              name={name}
              value={o.id}
              checked={selected}
              onChange={() => toggle(o.id)}
            />
            <span className={styles.mark} data-radio={type === 'single'} aria-hidden="true">
              <Check />
            </span>
            <span>
              <span className={styles.optLabel}>{o.label}</span>
              {o.hint && <span className={styles.optHint}>{o.hint}</span>}
            </span>
          </label>
        );
      })}
    </div>
  );
}
