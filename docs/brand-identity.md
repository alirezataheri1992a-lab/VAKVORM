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

The accents are subtle by design: a short bar above a discipline's name, the top edge of a
navigation panel, the line under a service tile — and bronze for the one primary action
("Offerte aanvragen"). The site's dominant colours are warm white and charcoal.

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

Placement: the header carries the master (horizontal) logo — dark colourway on the warm
white bar, light colourway when the mobile menu is open. The footer carries the stacked
master lockup, reversed. The discipline pages introduce the sub-brand with its own mark
(bronze on Bouw, olive on Interieur). The primary logo never changes per page.

The certification logo ("erkend bouwbedrijf") has not been supplied yet;
`CertificationMark` renders a marked empty slot until the file is added to `/public/brand/`.

The files carry their own clear space inside the viewBox. Sizing is by height; width follows
the file's aspect ratio. The one layout adjustment is a negative left margin on the footer
lockup so its art aligns with the column edge — the file itself is untouched.

## Colour

| Token | Hex | Use |
|---|---|---|
| `--charcoal` | `#0E0E0E` | type; the closing call to action, the mobile menu, the footer |
| `--stone` | `#C9C2B8` | the review band and reserved image fields |
| `--taupe` | `#3A3A36` | secondary text; a warm-dark band |
| `--bronze` | `#B08B6F` | Bouw accent — marks, labels on dark; `--bronze-deep #7E5F45` as text on light |
| `--olive` | `#4A5A46` | Interieur accent — marks, labels; `--olive-on-dark #8C9C84` on charcoal |

The page is a warm white (`--canvas #F5F2EC`) with charcoal type; charcoal carries the
closing call to action, the mobile menu and the footer. Derived values (`--canvas-raised`,
`--panel`, `--ink-soft`, `--muted`, `--line`) are in `src/app/globals.css` with their
contrast notes. Raw bronze fails as small text on the canvas, which is why `--bronze-text`
exists; raw olive fails on charcoal, which is why `--olive-on-dark` exists.

No gradients (the hero scrim excepted — it is a legibility device over footage, not a
decoration), no shadows, no border radius on anything structural.

## Typography

The board specifies **Söhne**, which is commercially licensed and not bundled. The site uses
one typeface, **Hanken Grotesk** (400/500/600/700), the closest open grotesk, via
`--font-sans`. Swapping in Söhne is a change to `src/lib/fonts.ts` only. There is no serif:
a builder's site reads sturdier in one grotesk, and the logo itself is a sans.

Rules the system enforces:

- Hierarchy by size and weight, not ornament: `.display`, `.heading`, `.title`, `.lede`,
  body, `.label`. Headings are semibold with tight tracking.
- Capitals only for small labels (`.label`, tracked `0.08em`). Navigation, buttons and links
  are in sentence case.
- No decorative devices: no rules under headings, no numbered chapters, no word stacks, no
  veils over photographs.

## Layout

A 12-column grid inside a 1440px container. Sections open with a heading and, where useful,
one link on the same line; groups are separated by a 1.5px charcoal rule. The homepage runs:
hero (statement, offer, phone — and the work beside it), four confirmed facts, services by
discipline as photo tiles, a before/after project, the process in four steps, a review, the
close.

## UI

- Buttons: square, sentence case, 52px. `.btn--primary` is the primary action ("Offerte
  aanvragen"): charcoal everywhere, with a bronze hover. On charcoal grounds (the close, the
  mobile menu, the intake's opening) it keeps its fill and gains a light hairline. `.btn` is
  a charcoal outline.
- Header: logo, Bouw and Interieur (each opens its services), the pages; then, after one
  hairline, the phone number (icon + number, the secondary action) and "Offerte aanvragen →"
  (primary). Below 1240px the number collapses to its icon; on mobile a 44px call button sits
  next to "Menu". Werkgebied is linked from the hero, service pages, mobile menu and footer,
  not the top bar, to keep it calm.
- Placeholders: `<Placeholder>` marks any detail still to be supplied (KvK number,
  certification name, warranty terms, insurance) with a dashed bronze frame, so nothing
  reads as a claim before it is confirmed.
- Motion: short (240ms). Nothing bounces.

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
