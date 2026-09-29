# NEDERDAM — Brand identity, as implemented

> The canonical brand guide is **`docs/huisstijl.md`** (from the KADER board; online: https://claude.ai/artifact/JcV8kyjAY2DY495Pe2Fssi). This file describes how the current website implements it and may lag behind.

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

The five brand colours stay exact (`--charcoal #0E0E0E`, `--bronze #B08B6F`, `--stone #C9C2B8`,
`--olive #4A5A46`, `--taupe #3A3A36`, plus `--canvas` paper `#F4F0E8`). The website reads them
**light**: paper is the ground, charcoal is used strategically — type, the hero veil, the
nieuwbouw drawing, the footer.

| Where | Ground |
|---|---|
| Hero | the moving footage under a charcoal veil |
| Content | paper; `--canvas-raised` for one quiet band (nieuwbouw) |
| Image positions | stone or raised paper, with a drawing until photos exist |
| Closing call to action | taupe — the second dark ground, apart from the footer |
| Footer | charcoal |

Bronze: the primary button, active navigation, numbering, the hairline under the word
column, the trust marks. As text on paper use `--bronze-text` (5.1:1). Olive only marks
Interieur, never a background. The brief's approximate tokens (`#A67C52`, `#6F7563`,
`#A89B8A`) are not brand colours and are not used.

## Typography

**Söhne** and **Canela** are licensed and not bundled; **Hanken Grotesk** and **Newsreader
Light** stand in (`src/lib/fonts.ts` — the only file to change when the licences arrive).

- About 90% grotesk: headings, text, navigation, buttons, labels, forms, footer.
- Headings are **regular/medium, never heavy**: `.display` and `.heading` at 400, `.title`
  at 500, sizes from the `--text-*` scale.
- The hero headline is the one uppercase headline: regular, barely tracked.
- Labels: small capitals, 500, tracked `0.14em` (`--tracking-label`).
- The serif (`.serif`): at most one statement or quote per page, light, never bold —
  on the homepage *"Vakmanschap zit in wat u ziet. En in wat u niet ziet."*, in the footer
  the motto.

## Layout

12 columns inside 1440px, gutter `clamp(20px, 4.4vw, 72px)`, sections `clamp(88px, 10.5vw,
152px)` apart, spacing from one scale (`--space-1` … `--space-12`: 4 → 160). Sections open
with a hairline in charcoal, a label and a heading; asymmetric compositions (7/4, 4/7, 8/4,
5/6) instead of rows of identical cards.

Homepage: hero → trust strip (three statements, hairlines) → Bouw / Interieur mirrored →
projects (only real ones) → materials → nieuwbouw → werkwijze timeline → (real review) →
close → footer.

## KADER in the interface

- **Hero framing**: the footage starts full-bleed; over the first half-screen of scroll,
  margins open, the image settles from a 1.04 scale and a hairline frame appears inside it
  (`HeroFrame`). Scroll is only read — no pinning — and nothing moves with reduced motion.
- `.kader`: a hairline set a fixed step inside an image.
- Hairlines open sections; the werkwijze is a drawn line with four points.

## UI

- **Primary button**: bronze with charcoal text (6.2:1), square, 50px, arrow moves 3px;
  hover charcoal (on dark grounds: paper). One label everywhere: **"Project bespreken"**
  → the project intake (`primaryCta` in `src/lib/site.ts`).
- Secondary: a text link with an underline that grows from the left.
- **Header**: logo; Bouw, Interieur (panels with their services), Nieuwbouw, Projecten, Over
  ons, Werkwijze, Contact; the primary button. On the homepage it is transparent over the
  hero and turns paper (slight blur) once the hero has passed. Mobile: logo and "Menu".
- **Missing content is hidden**, never marked: no placeholders on the page
  (`docs/content-status.md` tracks what is missing).
- Motion: 240ms for UI, 400–900ms for reveals and images, eased out. No bounces, no loops
  other than the hero footage.

## Photography

There is no real Nederdam photography yet, and stock must not stand in for the company's
work. Image positions therefore show **architectural line drawings** (`ArchDrawing`: a wall
section for Bouw, a cabinet-wall elevation for Interieur, wood/stone/plaster details, a
mitred joint) on stone or paper. They are decorative (hidden from screen readers) and are
replaced by setting a photo in `src/lib/media.ts` or Sanity — the frame keeps its ratio.

Brief for the shoot: Bouw — structure, brick, stone, plaster, construction detail;
Interieur — timber, cabinetry, joinery, hardware, light. Natural light, warm and
unsaturated, no HDR, no people posing for the camera.

## What was removed

The previous system's navy/clay palette, Public Sans + IBM Plex Mono, the mono "spec"
layer, the dropdown navigation, the trust ledger, the mid-page CTA band, the review card,
the crosshair placeholders, and every rounded corner. Nothing factual was removed: services,
contact details, forms, the intake flow, SEO metadata and structured data are all intact.
