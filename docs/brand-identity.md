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

The accents are subtle by design: a 6px square before the discipline's name in the header,
the colour of small tracked labels, the tone of a hairline. Never a background, never a
button. The site's dominant colours are charcoal, warm off-white and stone.

## Logo

`src/components/chrome/Logo.tsx` renders the lockup: the symbol, the tracked NEDERDAM
wordmark, and — for a sub-brand — the discipline in small capitals beneath it, in its tone.

**The symbol is a vector re-drawing from the board image, not the original artwork.** It
reads as the board does — an N built from two open strokes meeting on the diagonal, one
stroke per discipline — but the exact geometry should be replaced by the source file when
it is available. That is a change to the two `<path>` elements in `Symbol` and to
`src/app/icon.svg` (the favicon), nothing else.

Clear space: the lockup itself is tight; callers give it room. The header gives it the
full 88px bar; the footer sets it alone above the statement.

## Colour

| Token | Hex | Use |
|---|---|---|
| `--charcoal` | `#0E0E0E` | dark chapters, the footer, the intake's opening and close |
| `--linen` | `#EFEAE3` | the canvas — warm off-white, never pure white |
| `--stone` | `#C9C2B8` | supporting chapters, the reserved image fields |
| `--taupe` | `#3A3A36` | secondary text on light; warm-dark surfaces |
| `--bronze` | `#B08B6F` | Bouw accent — marks, labels on dark; `--bronze-deep #7E5F45` as text on light |
| `--olive` | `#4A5A46` | Interieur accent — marks, labels; `--olive-on-dark #8C9C84` on charcoal |

Derived values (`--linen-deep`, `--paper`, `--stone-deep`, `--charcoal-soft`, `--muted`,
`--on-dark`, `--on-dark-soft`, hairlines) are in `src/app/globals.css` with their contrast
notes. Raw bronze fails contrast as small text on linen, which is why `--bronze-deep`
exists; raw olive fails on charcoal, which is why `--olive-on-dark` exists.

No gradients (the hero scrim excepted — it is a legibility device over footage, not a
decoration), no shadows, no border radius on anything structural.

## Typography

The board specifies **Söhne** (functional) and **Canela** (editorial). Both are
commercially licensed and not bundled. The site ships the closest open pairing:

| Role | Board | Implemented | Where |
|---|---|---|---|
| Functional — nav, body, labels, buttons, metadata, functional headings | Söhne | **Instrument Sans** 400/500/600 | `--font-sans` |
| Editorial — statements, hero, chapter openings, the closing invitation | Canela | **Instrument Serif** 400 + italic | `--font-serif` |

They are drawn by the same designer and made to sit together. Swapping in the licensed
faces is a change to `src/lib/fonts.ts` only; every stylesheet reads the two variables.

Rules the system enforces:

- The serif is never bold and never used for body copy or UI. It appears in `.display`,
  `.heading`, the serif paragraphs on discipline and project pages, and nowhere else.
- Metadata is small, uppercase, tracked `0.18em` (`.label`). It is the site's quiet
  labelling layer: eyebrows, captions, index numbers, column heads, breadcrumbs.
- The scale is short on purpose: `.display`, `.heading`, `.title`, `.lede`, body, `.label`.

## Layout

A 12-column grid (`.grid12`) inside a 1520px container with a fluid gutter. Compositions are
deliberately unequal: a statement in columns 3–8 with facts in 10–12; an image in 9–12 beside
text in 1–7 (mirrored on Interieur); a landscape in 1–8 with a portrait in 10–12 set lower.
Sections vary in ground — linen, stone, charcoal, taupe — and in structure. No section is a
row of equal cards.

## UI

- Text links: `.textlink` — weight 500, an arrow, a hairline that appears on hover.
- Buttons: `.btn` (1px border, uppercase, 52px) and `.btn--solid` (charcoal). One of each
  per moment at most.
- Forms: square fields on `--paper` with a hairline border that darkens to ink on focus.
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
