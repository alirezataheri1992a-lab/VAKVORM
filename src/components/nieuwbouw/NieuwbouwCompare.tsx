'use client';

import { useState } from 'react';
import { Logo } from '@/components/chrome/Logo';
import styles from './nieuwbouw.module.css';

type Mode = 'zelf' | 'nederdam';

/**
 * The problem in one switch. "Zelf regelen": every trade a separate party with its own
 * quote, planning and phone number. "Met Nederdam": the same work, one party. The counts
 * are simply the number of trades listed — no invented figures.
 */
export function NieuwbouwCompare({ trades }: { trades: string[] }) {
  const [mode, setMode] = useState<Mode>('zelf');
  const n = trades.length;

  return (
    <div className={styles.compare} data-mode={mode}>
      <div className={styles.toggle} role="group" aria-label="Vergelijk">
        <button type="button" aria-pressed={mode === 'zelf'} onClick={() => setMode('zelf')}>
          Zelf regelen
        </button>
        <button type="button" aria-pressed={mode === 'nederdam'} onClick={() => setMode('nederdam')}>
          Met Nederdam
        </button>
      </div>

      <dl className={styles.tally} aria-live="polite">
        <div>
          <dt>Aanspreekpunten</dt>
          <dd>{mode === 'zelf' ? n : 1}</dd>
        </div>
        <div>
          <dt>Offertes</dt>
          <dd>{mode === 'zelf' ? n : 1}</dd>
        </div>
        <div>
          <dt>Planningen</dt>
          <dd>{mode === 'zelf' ? n : 1}</dd>
        </div>
      </dl>

      {mode === 'zelf' ? (
        <ul className={styles.trades}>
          {trades.map((t) => (
            <li key={t} className={styles.trade}>
              <span className={styles.tradeName}>{t}</span>
              <span className={styles.tradeMeta}>Eigen offerte · eigen planning</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className={`on-dark ${styles.one}`}>
          <Logo variant="horizontal" tone="light" height={56} decorative />
          <p className={styles.oneText}>
            Eén aanspreekpunt, één offerte en één planning — voor wat u bij ons kiest. Wij stemmen de
            vakmensen op elkaar af, met onze eigen mensen en ons vaste netwerk.
          </p>
          <ul className={styles.oneTrades} aria-label="Geregeld via Nederdam">
            {trades.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
