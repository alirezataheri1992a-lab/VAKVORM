import styles from './ArchDrawing.module.css';

export type DrawingVariant = 'section' | 'joinery' | 'wood' | 'stone' | 'plaster' | 'joint';

/**
 * Architectural line drawings in the house style: thin lines, square geometry, the
 * conventions of a construction drawing. They hold the image positions honestly until real
 * Nederdam photography exists — a drawing of how something is built, never a stock photo
 * and never a picture passed off as a project. Decorative: the surrounding text carries the
 * meaning, so they are hidden from assistive technology.
 *
 *   section  a wall and floor build-up (Bouw)
 *   joinery  the elevation of a built-in cabinet wall (Interieur)
 *   wood · stone · plaster   material details
 *   joint    a mitred corner joint in section
 */
export function ArchDrawing({ variant, className }: { variant: DrawingVariant; className?: string }) {
  return (
    <svg
      viewBox={VIEWBOX[variant]}
      className={`${styles.drawing} ${className ?? ''}`}
      preserveAspectRatio={TEXTURES.includes(variant) ? 'xMidYMid slice' : 'xMidYMid meet'}
      aria-hidden="true"
      focusable="false"
    >
      {DRAWINGS[variant]}
    </svg>
  );
}

// material textures fill their frame; drawings sit inside it
const TEXTURES: DrawingVariant[] = ['wood', 'stone', 'plaster'];

const VIEWBOX: Record<DrawingVariant, string> = {
  section: '0 0 600 720',
  joinery: '0 0 800 600',
  wood: '0 0 300 300',
  stone: '0 0 300 300',
  plaster: '0 0 300 300',
  joint: '0 0 300 300',
};

const range = (n: number) => Array.from({ length: n }, (_, i) => i);

/* ---------------------------------------------------------------- section (Bouw) */
const brickCourses = range(33).map((i) => {
  const y = 112 + i * 12;
  const off = i % 2 ? 0 : 10;
  return (
    <g key={i}>
      <path d={`M112 ${y} H148`} className={styles.fine} />
      <path d={`M${122 + off} ${y} V${y + 12} M${140 - off / 2} ${y} V${y + 12}`} className={styles.fine} />
    </g>
  );
});
const cavityZig = `M152 108 ${range(66)
  .map((i) => `L${i % 2 ? 166 : 152} ${114 + i * 6}`)
  .join(' ')}`;
const floorZig = (y: number, x0: number, x1: number) =>
  `M${x0} ${y} ${range(Math.floor((x1 - x0) / 8))
    .map((i) => `L${x0 + (i + 1) * 8} ${i % 2 ? y : y + 14}`)
    .join(' ')}`;
const earth = range(26).map((i) => <path key={i} d={`M${40 + i * 22} 612 l-18 18`} className={styles.fine} />);

const section = (
  <g>
    {/* flat roof with parapet */}
    <path d="M100 96 H540 M100 108 H540 M100 84 V108 M112 84 V96 M100 84 H112" />
    <path d={floorZig(70, 120, 536)} className={styles.fine} />
    {/* cavity wall: brick outer leaf, insulated cavity, block inner leaf */}
    <path d="M112 108 V520 M148 108 V520 M170 108 V520 M200 108 V520" />
    <g>{brickCourses}</g>
    <path d={cavityZig} className={styles.fine} />
    <path d="M204 108 V520" className={styles.dash} />
    {/* window with lintel and sill */}
    <rect x="106" y="210" width="100" height="130" className={styles.paper} />
    <path d="M106 210 H206 M106 340 H206 M118 210 V340 M194 210 V340 M118 275 H194" />
    <path d="M100 202 H212 M100 346 H218" />
    {/* intermediate floor */}
    <path d="M200 300 H540 M200 322 H540" />
    <path d="M200 330 H540" className={styles.fine} />
    {/* ground floor slab on insulation */}
    <path d="M200 500 H540 M200 520 H540" />
    <path d={floorZig(522, 200, 536)} className={styles.fine} />
    <path d="M200 540 H540" />
    {/* foundation strip */}
    <path d="M96 520 H216 V690 H96 Z" />
    {range(22).map((i) => (
      <circle key={i} cx={104 + ((i * 37) % 104)} cy={536 + ((i * 53) % 148)} r="1.4" className={styles.dot} />
    ))}
    {/* ground line and earth */}
    <path d="M20 600 H96 M216 600 H580" />
    {earth}
    {/* dimension line */}
    <path d="M570 96 V520 M564 96 H576 M564 311 H576 M564 520 H576" className={styles.fine} />
  </g>
);

/* ---------------------------------------------------------------- joinery (Interieur) */
const grain = range(9).map((i) => (
  <path key={i} d={`M${96 + i * 7} 104 C ${100 + i * 7} 220, ${92 + i * 7} 340, ${97 + i * 7} 470`} className={styles.fine} />
));
const books = [
  [300, 150, 12, 58],
  [314, 146, 10, 62],
  [326, 158, 14, 50],
  [344, 140, 9, 68],
  [420, 176, 60, 10],
  [424, 164, 52, 12],
  [470, 232, 14, 44],
  [486, 228, 11, 48],
].map(([x, y, w, h], i) => <rect key={i} x={x} y={y} width={w} height={h} />);

const joinery = (
  <g>
    {/* ceiling, floor and the cabinet wall between them */}
    <path d="M40 72 H760 M40 548 H760" />
    <path d="M80 80 H720 V540 H80 Z" />
    {/* left: three tall doors, one with grain */}
    <path d="M146 80 V520 M213 80 V520 M280 80 V540 M80 520 H280" />
    {grain}
    <path d="M140 290 V330 M152 290 V330 M207 290 V330" />
    {/* hinged-door convention: dashed opening lines */}
    <path d="M213 80 L280 300 L213 520" className={styles.dash} />
    {/* middle: open shelves above a low drawer unit */}
    <path d="M280 220 H520 M280 290 H520 M400 80 V220" />
    {books}
    <path d="M280 420 H520 M280 480 H520 M400 420 V540" />
    <path d="M330 450 H350 M450 450 H470 M330 510 H350 M450 510 H470" />
    <path d="M300 376 H500" className={styles.fine} />
    {/* right: tall doors */}
    <path d="M520 80 V540 M620 80 V520 M520 520 H720" />
    <path d="M614 290 V330 M626 290 V330" />
    <path d="M620 80 L720 300 L620 520" className={styles.dash} />
    {/* plinth and ceiling scribe */}
    <path d="M80 528 H280 M520 528 H720" className={styles.fine} />
    <path d="M80 88 H720" className={styles.fine} />
  </g>
);

/* ---------------------------------------------------------------- materials */
const wood = (
  <g>
    <rect x="1" y="1" width="298" height="298" className={styles.none} />
    {range(20).map((i) => {
      const x = 8 + i * 15;
      const bend = i > 8 && i < 13 ? 22 - Math.abs(i - 10.5) * 6 : 0;
      return (
        <path
          key={i}
          d={`M${x} 0 C ${x + 6} 70, ${x - 4 + bend} 130, ${x + bend} 150 S ${x - 6} 240, ${x + 2} 300`}
          className={i % 3 ? styles.fine : undefined}
        />
      );
    })}
    <ellipse cx="160" cy="150" rx="9" ry="20" />
    <ellipse cx="160" cy="150" rx="4" ry="10" className={styles.fine} />
  </g>
);
const stone = (
  <g>
    {range(90).map((i) => (
      <circle key={i} cx={(i * 67) % 296 + 2} cy={(i * 131) % 296 + 2} r={i % 5 ? 1 : 2.2} className={styles.dot} />
    ))}
    <path d="M-10 70 C 60 90, 120 40, 190 80 S 280 60, 310 90" />
    <path d="M40 300 C 70 230, 150 250, 180 200 S 250 170, 310 190" className={styles.fine} />
    <path d="M190 80 C 200 120, 180 160, 180 200" className={styles.fine} />
  </g>
);
const plaster = (
  <g>
    {range(14).map((i) => (
      <path
        key={i}
        d={`M${(i * 53) % 220 - 20} ${16 + i * 20} q 60 ${i % 2 ? -10 : 10} 150 ${i % 3 ? 4 : -6} t 120 0`}
        className={i % 2 ? styles.fine : undefined}
      />
    ))}
  </g>
);
const joint = (
  <g>
    {/* two boards meeting in a mitre, with a loose tongue */}
    <path d="M40 60 H260 V110 H90 V260 H40 Z" />
    <path d="M40 60 L90 110" />
    <path d="M58 78 L70 66 M72 92 L84 80" />
    {range(6).map((i) => (
      <path key={i} d={`M${100 + i * 26} 60 v50`} className={styles.fine} />
    ))}
    {range(6).map((i) => (
      <path key={i} d={`M40 ${122 + i * 24} h50`} className={styles.fine} />
    ))}
    {/* dimension */}
    <path d="M40 34 H260 M40 28 V40 M260 28 V40" className={styles.fine} />
    <path d="M274 60 V110 M268 60 H280 M268 110 H280" className={styles.fine} />
  </g>
);

const DRAWINGS: Record<DrawingVariant, React.ReactNode> = { section, joinery, wood, stone, plaster, joint };
