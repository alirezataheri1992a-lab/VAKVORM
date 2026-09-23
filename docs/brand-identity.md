# NEDERDAM — Brand identity, as implemented

The single source of truth for the visual identity is the NEDERDAM brand board
("Concept 06 — Kader"). This document records how that board was translated into the
website: what is faithful, what is substituted, and where the substitutions are swapped out
later.

---

## Brand architecture

```
NEDERDAM              master brand — the symbol + wordmark, charcoal and warm off-white
├── BOUW              construction, renovation, extensions, structural work — bronze accent
└── INTERIEUR         bespoke cabinetry, furniture, built-in interiors — olive accent
```

Exactly two disciplines. The site never introduces a category above them ("Diensten" is
gone; the navigation is `Bouw · Interieur · Projecten · Werkwijze · Over ons · Contact`) and
never a third pillar beside them. Routes follow the architecture: `/bouw/<service>` and
`/interieur/<service>`.

The accents are subtle by design: the colour of small tracked labels and index numbers, the
top edge of a navigation panel, the tone of a hairline — and bronze for the one primary
action. The site's dominant colours are charcoal and warm off-white.

## Logo

The approved logo files live in `/public/brand/`, byte-for-byte as supplied. They are never
redrawn, recoloured or recomposed; `src/components/chrome/Logo.tsx` only chooses which file
to show and at what height.

| File | Use |
|---|---|
| `nederdam-horizontal-dark.svg` / `-light.svg` | header lockup on light / dark surfaces (also `nederdam-logo.svg`, an exact copy of the dark one) |
| `nederdam-master-dark.svg` / `-light.svg` | stacked master lockup with BOUW & INTERIEUR — the footer |
| `nederdam-bouw-dark.svg` / `-light.svg` | sub-brand lockup, bronze |
| `nederdam-interieur-dark.svg` / `-light.svg` | sub-brand lockup, olive |
| `nederdam-mark-bronze.svg` / `-olive.svg` / `-white.svg` | the symbol alone; bronze is also the favicon (`src/app/icon.svg`, an exact copy) |

Placement: the header always carries the master (horizontal) logo, light colourway on the
charcoal bar. The footer carries the stacked master lockup, reversed. The homepage shows the
two sub-brand lockups side by side (light colourway), as on the board; the discipline pages
introduce the sub-brand with its own mark (bronze on Bouw, olive on Interieur) beside the
opening label. The primary logo never changes per page.

The files carry their own clear space inside the viewBox. Sizing is by height; width follows
the file's aspect ratio. The one layout adjustment is a negative left margin on the footer
lockup so its art aligns with the column edge — the file itself is untouched.

## Colour

| Token | Hex | Use |
|---|---|---|
| `--charcoal` | `#0E0E0E` | the canvas — every page, header and footer |
| (off-white) | `#F4F0E8` | type (`--ink`) — the same tone the reversed logos use |
| `--stone` | `#C9C2B8` | reserved for material and print; not a web surface |
| `--taupe` | `#3A3A36` | a warm-dark band (werkwijze close) and reserved image fields |
| `--bronze` | `#B08B6F` | Bouw accent — marks, labels on dark; `--bronze-deep #7E5F45` as text on light |
| `--olive` | `#4A5A46` | Interieur accent — marks, labels; `--olive-on-dark #8C9C84` on charcoal |

The site follows the KADER board: the page is **charcoal**, type is the warm off-white
`#F4F0E8` the reversed logos use, and structure is drawn in hairlines. Derived values
(`--canvas-raised`, `--panel`, `--ink-soft`, `--muted`, `--line`, `--line-strong`) are in
`src/app/globals.css` with their contrast notes. Bronze reads as text on charcoal (6.3:1);
raw olive does not, which is why `--olive-on-dark` exists. Older names (`--linen`,
`--paper`, `--sand`) are kept as aliases of the dark surfaces.

No gradients (the hero scrim excepted — it is a legibility device over footage, not a
decoration), no shadows, no border radius on anything structural.

## Typography

The board specifies **Söhne** (functional) and **Canela** (editorial). Both are
commercially licensed and not bundled. The site ships the closest open pairing:

| Role | Board | Implemented | Where |
|---|---|---|---|
| Functional — nav, body, labels, buttons, metadata, functional headings | Söhne | **Hanken Grotesk** 300/400/500 | `--font-sans` |
| Editorial — statements, hero, chapter openings, the closing invitation | Canela | **Newsreader** 300 (display optical size) + italic | `--font-serif` |

Chosen side by side against the board: Hanken Grotesk carries Söhne's light, wide-tracked
capitals; Newsreader at display size has Canela's open, light serif. Swapping in the
licensed faces is a change to `src/lib/fonts.ts` only; every stylesheet reads the two
variables.

Rules the system enforces:

- The serif is set light (300), never bold and never used for UI. It appears in
  `.display`, `.heading`, service names and a few statements.
- Metadata is small, uppercase, tracked `0.28em` (`.label`). It is the site's labelling
  layer: eyebrows, captions, index numbers, column heads, breadcrumbs, navigation.
- Board devices: `.tracked` (a statement in tracked capitals — "Eén merk. Twee
  disciplines."), `.stack` (a vertical column of tracked words closed by a short rule),
  `.rule-under` (the 2px bronze rule under the hero statement, as under the logo) and
  `SectionMarker` (index, label, hairline: `01  NEDERDAM ─────`).
- The scale is short on purpose: `.display`, `.heading`, `.title`, `.lede`, body, `.label`.

## Layout

A 12-column grid (`.grid12`) inside a 1520px container with a fluid gutter. Compositions are
deliberately unequal: a statement in columns 3–8 with facts in 10–12; an image in 9–12 beside
text in 1–7 (mirrored on Interieur); a landscape in 1–8 with a portrait in 10–12 set lower.
Chapters open with a numbered `SectionMarker` and are separated by hairlines, as on the
board. Images sit framed inside the margins with small tracked captions beneath.

## UI

- Text links: `.textlink` — tracked capitals, an arrow, a hairline that appears on hover.
- Buttons: square, tracked capitals, 50px. `.btn--bronze` is the primary action
  ("Start uw project"); `.btn` is a hairline outline; `.btn--solid` is off-white.
- Navigation: logo left, the two disciplines first (each opens its services), then the
  pages, in tracked capitals; one bronze action.
- Forms: square fields on `--panel` with a hairline border.
- Motion: slow (`640ms`, `cubic-bezier(0.22, 1, 0.36, 1)`). Light content settles into
  place, photography reveals with a crop, dark chapters stay still. Nothing bounces.

## Photography

Photography is the missing ingredient and the one that matters most. Until it exists, every
image slot is a flat field from the palette with one small label saying what belongs there
(`ProjectMedia`, `tone` prop) — designed as part of the page, not a wireframe. Real
photographs get a warm, neutral treatment (`saturate(0.9) contrast(1.02)`) and a slow
settle on hover when linked.

Brief for the shoot, per discipline — see the board and `/docs/image-sources.md`:

- **Bouw**: concrete, stone, brick, raw structure, construction detail, hands at work.
- **Interieur**: timber, cabinetry, joinery, natural materials, tactile finishes, furniture.
- Both: natural light, shadow, close material detail, finished spaces. Warm, quiet,
  unsaturated. No stock, no obviously generated people.

## What was removed

The previous system's navy/clay palette, Public Sans + IBM Plex Mono, the mono "spec"
layer, the dropdown navigation, the trust ledger, the mid-page CTA band, the review card,
the crosshair placeholders, and every rounded corner. Nothing factual was removed: services,
contact details, forms, the intake flow, SEO metadata and structured data are all intact.
