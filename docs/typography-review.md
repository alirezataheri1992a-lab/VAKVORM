# VAKVORM — Typography Review (De-AI Pass)

A focused typographic art-direction pass. Structural design, IA and compositions were
already approved and are unchanged; only the type system changed.

## Why the previous system felt AI-generated

The old system was **Bricolage Grotesque (display) + Archivo (body) + tiny tracked-uppercase
labels + an orange accent word ("Eén partij." in oxide) + a solid black rectangular CTA**.
That specific combination — fashionable rounded grotesk, huge bold stacked headline, 0.16em
uppercase micro-labels, one coloured statement word, black startup button — is *exactly* the
default output of "make a modern premium website," and reads creative-tech / Framer, not like
an established Dutch build + interior company. Hierarchy leaned on colour (the orange trick)
rather than typographic craft.

## The three directions tested

Rendered on the real hero + header lockup, **monochrome** (oxide disabled), one-line headline:

| # | System | Read | Score /10 |
|---|---|---|---|
| A | **Public Sans**, single family, normal-case metadata (Swiss/architectural) | Neutral, mature, architectural-office precision; a touch anonymous alone | 7.5 |
| B | **Archivo + IBM Plex Mono** spec layer (industrial/construction) | Strong construction/spec character via mono metadata; distinctive; Archivo display a bit generic | 8 |
| C | **Libre Franklin**, more scale contrast (editorial European) | Established/editorial; leans slightly interior-magazine | 7 |

## Chosen direction

**Direction B's system, with Public Sans as the neo-grotesk instead of Archivo.** Public Sans
is closer to the Neue-Haas / Suisse / Helvetica-Now references than the Archivo tested, and the
**IBM Plex Mono spec layer** supplies the ownable, non-trendy, architectural-drawing character.
This is a selection + refinement, not a three-way blend.

### Selected typefaces & licensing
- **Public Sans** — SIL OFL, self-hosted via `next/font` (weights 400/500/600/700).
- **IBM Plex Mono** — SIL OFL, self-hosted via `next/font` (weights 400/500).
- No commercial fonts downloaded; both are freely licensed and bundled at build.

### Scale, tracking, uppercase, CTA rules
See `visual-direction.md §5` for the full scale. Key rules:
- Hierarchy from **weight/scale/position**, not colour.
- Uppercase confined to the **mono spec layer**, tracking **0.04em** (down from 0.16em).
- Display **composed** (≤ 4.6rem), no huge-bold-three-line default.
- CTA: **bordered** typographic treatment + restrained `↗` (fills ink on hover).
- **Oxide** removed from hero, static numbers and the "één" emphasis; kept only on
  interactive/active states.

## Mandatory tests

- **Monochrome test:** the hero and full page render with essentially no colour already;
  identity holds on grotesk weight + mono spec layer + hairlines + composition. **Pass.**
- **Architect test:** Public Sans + Plex Mono would sit credibly on a drawing cover, spec
  sheet, van, or a €150k quotation — not only on a website. **Pass.**
- **AI test:** the default "premium construction website" prompt produces the *old* pattern
  (rounded grotesk + huge bold + tiny uppercase + orange + black button); this system is the
  deliberate opposite. **Pass.**

## Before / after observations
- Hero reads architectural and confident rather than startup-loud; "Eén partij." earns emphasis
  through weight, not colour.
- Metadata now reads like real technical information (mono, tabular) instead of decorative
  microcopy.
- The header CTA reads mature and precise instead of app-like.
- The page is now effectively monochrome, so future photography — not colour — carries warmth.

## Scores (before → after)

| Dimension | Before | After |
|---|---|---|
| AI-template risk (10 = generic AI) | 6 | **3** |
| Construction credibility | 6 | **8** |
| Interior sophistication | 6.5 | **8** |
| Timelessness | 6 | **8.5** |
| Brand maturity | 6 | **8.5** |
| Typography distinctiveness | 6 | **8** |
| Readability | 8 | **9** |
| Overall brand fit | 6 | **8.5** |

Targets (AI-risk ≤ 3, positive dimensions ≥ 8) met.

TYPOGRAPHY GATE: READY FOR OWNER REVIEW
