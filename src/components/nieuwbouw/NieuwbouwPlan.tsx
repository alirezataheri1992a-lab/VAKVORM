import type { Discipline, PlanLayer } from '@/lib/nieuwbouw';
import styles from './nieuwbouw.module.css';

interface Props {
  /** The layers in journey order; each step of the journey adds one. */
  layers: { layer: PlanLayer; discipline: Discipline }[];
  /** Index of the current step. -1 draws the finished home (no script, or a static view). */
  active: number;
  className?: string;
}

/**
 * A line drawing of a small apartment that fills up as the journey advances: the bare walls,
 * the design, the measurements, the finishing, bathroom and kitchen, the joinery, the
 * handover and finally a home to live in. An illustration — not a real Nederdam project.
 * Past layers stay in the ground's line colour; the current layer takes its discipline's
 * accent (bronze for Bouw, olive for Interieur); future layers are hidden.
 */
export function NieuwbouwPlan({ layers, active, className }: Props) {
  const state = (layer: PlanLayer) => {
    const i = layers.findIndex((l) => l.layer === layer);
    if (active < 0) return 'done';
    if (i < active) return 'done';
    if (i === active) return 'current';
    return 'future';
  };
  const pillar = (layer: PlanLayer) => layers.find((l) => l.layer === layer)?.discipline ?? 'bouw';
  const g = (layer: PlanLayer) => ({
    className: styles.layer,
    'data-state': state(layer),
    'data-pillar': pillar(layer),
  });

  return (
    <svg
      viewBox="0 0 480 360"
      className={`${styles.plan} ${className ?? ''}`}
      role="img"
      aria-label="Plattegrond van een nieuwbouwwoning die stap voor stap wordt afgewerkt en ingericht"
    >
      {/* 1 · the bare shell, as on the developer's drawing */}
      <g {...g('drawing')}>
        <path className={styles.wallOuter} d="M280 320 H40 V40 H440 V320 H320" />
        <path
          className={styles.wall}
          d="M260 40 V230 M260 270 V320 M260 180 H290 M326 180 H440 M350 180 V250 M350 285 V320"
        />
        <path className={styles.thin} d="M90 34 H200 M90 46 H200 M320 34 H410 M320 46 H410 M34 110 V220 M46 110 V220" />
      </g>

      {/* 2 · design: rooms named, zones set out */}
      <g {...g('design')}>
        <path className={styles.dash} d="M52 200 H250" />
        <text className={styles.room} x="56" y="60">
          Woonkamer
        </text>
        <text className={styles.room} x="56" y="282">
          Keuken
        </text>
        <text className={styles.room} x="272" y="60">
          Slaapkamer
        </text>
        <text className={styles.room} x="336" y="306" textAnchor="middle">
          Hal
        </text>
        <text className={styles.room} x="360" y="262">
          Badkamer
        </text>
      </g>

      {/* 3 · measured on site */}
      <g {...g('measure')}>
        <path className={styles.thin} d="M40 20 H440 M40 14 V26 M260 14 V26 M440 14 V26 M20 40 V320 M14 40 H26 M14 180 H26 M14 320 H26" />
      </g>

      {/* 4 · finishing: floors, doors hung */}
      <g {...g('finish')}>
        <path
          className={styles.hair}
          d="M46 64 H254 M46 88 H254 M46 112 H254 M46 136 H254 M46 160 H254 M46 184 H254 M46 208 H254 M46 232 H254 M46 256 H254 M46 280 H254
             M266 64 H434 M266 88 H434 M266 112 H434 M266 136 H434 M266 160 H434"
        />
        <path className={styles.thin} d="M260 230 A40 40 0 0 1 300 270 M290 180 A36 36 0 0 0 326 216 M350 250 A35 35 0 0 1 385 285 M280 320 A40 40 0 0 1 320 280" />
      </g>

      {/* 5 · bathroom and kitchen */}
      <g {...g('wet')}>
        <path className={styles.hair} d="M356 195 H434 M356 210 H434 M356 225 H434 M371 186 V240 M386 186 V240 M401 186 V240 M416 186 V240" />
        <rect className={styles.line} x="398" y="188" width="36" height="36" />
        <path className={styles.line} d="M398 188 L434 224" />
        <ellipse className={styles.line} cx="372" cy="300" rx="8" ry="11" />
        <rect className={styles.line} x="364" y="309" width="16" height="7" />
        <rect className={styles.line} x="408" y="286" width="26" height="28" />
        <circle className={styles.line} cx="421" cy="300" r="6" />
        <rect className={styles.line} x="56" y="290" width="170" height="24" />
        <rect className={styles.line} x="80" y="294" width="26" height="16" />
        <circle className={styles.line} cx="160" cy="302" r="5" />
        <circle className={styles.line} cx="176" cy="302" r="5" />
        <circle className={styles.line} cx="192" cy="302" r="5" />
        <circle className={styles.line} cx="208" cy="302" r="5" />
      </g>

      {/* 6 · joinery from the own workshop */}
      <g {...g('joinery')}>
        <rect className={styles.line} x="410" y="50" width="24" height="124" />
        <path className={styles.line} d="M410 81 H434 M410 112 H434 M410 143 H434" />
        <rect className={styles.line} x="46" y="70" width="14" height="120" />
        <path className={styles.line} d="M46 100 H60 M46 130 H60 M46 160 H60" />
        <rect className={styles.line} x="266" y="186" width="16" height="44" />
      </g>

      {/* 7 · handed over, checked room by room */}
      <g {...g('handover')}>
        <path className={styles.tick} d="M222 186 l5 5 l10 -11 M272 150 l5 5 l10 -11 M318 214 l5 5 l10 -11 M402 272 l5 5 l10 -11 M226 262 l5 5 l10 -11" />
      </g>

      {/* 8 · a home: furniture, lived in */}
      <g {...g('home')}>
        <rect className={styles.line} x="96" y="128" width="112" height="30" />
        <path className={styles.line} d="M96 128 V120 H208 V128" />
        <rect className={styles.line} x="126" y="84" width="52" height="24" />
        <rect className={styles.line} x="118" y="214" width="64" height="34" />
        <path className={styles.line} d="M124 206 h14 M162 206 h14 M124 256 h14 M162 256 h14" />
        <rect className={styles.line} x="300" y="72" width="84" height="92" />
        <path className={styles.line} d="M306 80 h32 v14 h-32 z M346 80 h32 v14 h-32 z M300 110 H384" />
        <circle className={styles.line} cx="236" cy="70" r="10" />
      </g>
    </svg>
  );
}
