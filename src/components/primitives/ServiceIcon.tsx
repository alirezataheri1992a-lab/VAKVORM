/**
 * NEDERDAM line icons — one set, drawn on a 32-unit grid with a 1.5 stroke, square caps and
 * mitred joins, so they share the angular geometry of the logo. Construction and interior
 * subjects shown as plans, sections and objects; deliberately no house outline and no tools.
 * They inherit `currentColor`.
 */
export type IconName =
  | 'renovatie'
  | 'badkamer'
  | 'uitbouw'
  | 'opbouw'
  | 'stucwerk'
  | 'interieur'
  | 'kasten'
  | 'opmaat'
  | 'wandmeubel'
  | 'oplevering';

const PATHS: Record<IconName, React.ReactNode> = {
  // a wall in running bond
  renovatie: (
    <>
      <path d="M4 7h24v19H4z" />
      <path d="M4 13.3h24M4 19.6h24M12 7v6.3M22 7v6.3M8 13.3v6.3M17 13.3v6.3M26 13.3v6.3M12 19.6V26M22 19.6V26" />
    </>
  ),
  // shower head and falling water over a tiled floor line
  badkamer: (
    <>
      <path d="M7 27V5h12v4" />
      <path d="M14 9h10l-2 3h-6z" />
      <path d="M17 15v3M19 15v5M21 15v3" />
      <path d="M4 27h24" />
    </>
  ),
  // existing volume with a lower extension set against it
  uitbouw: (
    <>
      <path d="M4 27V8h13v19" />
      <path d="M17 15h11v12" />
      <path d="M2 27h28" />
      <path d="M8 13h5M8 18h5" />
    </>
  ),
  // an added storey on an existing volume
  opbouw: (
    <>
      <path d="M6 27V16h20v11" />
      <path d="M9 16V7h14v9" />
      <path d="M3 27h26" />
      <path d="M16 3v2" />
    </>
  ),
  // plastered wall with one smooth pass
  stucwerk: (
    <>
      <path d="M4 5h24v22H4z" />
      <path d="M7 20c4-6 9-6 13-3s5 1 6-1" />
    </>
  ),
  // two-door cabinet on a plinth
  interieur: (
    <>
      <path d="M6 4h20v21H6z" />
      <path d="M16 4v21M14 13v3M18 13v3" />
      <path d="M8 25v3M24 25v3" />
    </>
  ),
  // floor-to-ceiling wardrobe wall
  kasten: (
    <>
      <path d="M3 3h26v26H3z" />
      <path d="M11.7 3v26M20.3 3v26" />
      <path d="M9.5 15v3M13.9 15v3M22.5 15v3" />
    </>
  ),
  // open shelving unit
  opmaat: (
    <>
      <path d="M5 4h22v24H5z" />
      <path d="M5 12h22M5 20h22M16 12v8" />
      <path d="M9 9v3M11 8v4M21 17v3" />
    </>
  ),
  // floating wall unit above a low sideboard
  wandmeubel: (
    <>
      <path d="M8 5h16v7H8z" />
      <path d="M3 17h26v9H3z" />
      <path d="M12 17v9M20 17v9" />
    </>
  ),
  // key
  oplevering: (
    <>
      <circle cx="10.5" cy="21.5" r="5.5" />
      <path d="M14.4 17.6L27 5M22 10l3 3M19 13l2 2" />
    </>
  ),
};

/** Maps a service slug to its icon. */
export function iconForService(slug: string): IconName {
  switch (slug) {
    case 'renovatie-verbouwing':
      return 'renovatie';
    case 'badkamerrenovatie':
      return 'badkamer';
    case 'aanbouw-uitbouw':
      return 'uitbouw';
    case 'opbouw':
      return 'opbouw';
    case 'stucwerk':
      return 'stucwerk';
    case 'maatwerkkasten':
      return 'kasten';
    case 'interieur-op-maat':
      return 'opmaat';
    case 'wandmeubels':
      return 'wandmeubel';
    default:
      return 'interieur';
  }
}

export function ServiceIcon({ name, size = 32, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
