# VAKVORM — Image Sources & Photography Plan

Tracks every image slot on the site, the curated stock image chosen for it, and the
real Vakvorm photograph that will eventually replace it.

> **Session status — TO SOURCE.** The environment's network policy **blocks the image
> CDNs** (`images.unsplash.com`, `images.pexels.com` — CONNECT denied; npm and Google
> Fonts are allowed, so this is policy, not an outage). The layout is fully
> **art-directed around photography** (crops, ratios, bleeds and overlaps all assume real
> images), so photos can be dropped in without touching components. Two working routes:
>
> 1. **Upload route (proven — the hero video arrived this way):** the owner downloads
>    curated Pexels/Unsplash photos and uploads them into the chat; they get placed,
>    cropped and logged per slot.
> 2. **Policy route:** allow `images.pexels.com` and `images.unsplash.com` in the
>    environment's network settings (claude.ai/code → environment → network access);
>    sourcing can then happen directly in-session.

## How to add an image (no code changes needed)

1. Place the file in `public/images/<page>/<name>.jpg` (or `.webp`).
2. In the content layer (`src/lib/services.ts`, `src/lib/projects.ts`, or the page), set
   the slot's `src` and a real `alt`, keeping the specified `ratio`:
   ```ts
   hero: { src: '/images/home/hero.jpg', alt: '…', ratio: '3:4', slot: 'HERO' }
   ```
   `ProjectMedia` renders the optimised `next/image` automatically when `src` is present;
   the placeholder disappears.
3. Record the image in the table below.

## Curation rules (from the photography brief)

Dutch / NW-European residential architecture (Utrecht, Amsterdam, Haarlem, jaren-30 woningen,
townhouses, rear extensions). Editorial, warm, tactile, natural daylight. **Not** US/Cali,
Mediterranean, mansion, CGI, showroom, or IKEA-retail. Material palette: oak/oak veneer,
walnut (restrained), microcement, lime plaster, natural stone/travertine, muted brick,
blackened/stainless steel, smoked glass. Interieur = made-and-fitted joinery, shadow gaps,
flush doors, close crops. People only documentary (a craftsman measuring, plastering,
fitting cabinetry), never posed hard-hat/handshake stock.

**Balance (owner direction): a MIX, not luxury-interior glamour.** Roughly one third
**process/craft** (plastering, drywall, tiling, measuring, joinery in progress — real
renovation reality), one third **modest finished spaces** (a normal Dutch living room,
bathroom or kitchen done well), one third **material/detail close-ups**. Anything that
reads as a design-magazine villa spread is off-brief — VAKVORM builds for normal Dutch
homeowners, and the photography must feel attainable.

## Licensing

Only Unsplash / Pexels (or equivalently licensed) sources. No architecture-firm/contractor
project photos. **No stock image may be presented as a real Vakvorm project** — Projects stay
placeholder until genuine case studies are loaded.

---

## Slot manifest

| Page | Section | Slot | Ratio | Direction (search intent) | Source / URL / author | License | Status |
|---|---|---|---|---|---|---|---|
| Home | Hero | video + poster | 16:9 view | Craftsman at work (interior finishing) — placeholder clip in place, see `video-sources.md` | Pexels 6474181 | Pexels | PLACEHOLDER IN PLACE |
| Home | Geselecteerd werk | WONINGRENOVATIE + DETAIL | 3:2 + 4:5 | **REAL VAKVORM PROJECTS ONLY — never stock.** Keeps its honest "binnenkort" state until genuine cases exist | — | — | AWAITS REAL WORK |
| Home | Bouw-chapter | BOUW — RUWBOUW | 4:5 | Structural renovation in progress: steel/beam, brick, drywall — process-credible, portrait | — | — | TO SOURCE |
| Home | Interieur-chapter | INTERIEUR — RUIMTE | 4:5 | Modest finished space with bespoke joinery, portrait | — | — | TO SOURCE |
| Home | Interieur-chapter | MATERIAAL | 1:1 | Oak/veneer joinery close-up, tactile | — | — | TO SOURCE |
| Home | Craft moment | AFWERKING — RUIMTE | 16:9 full-bleed | One strong image: finished modest interior OR hands finishing a surface — carries "Van ruwbouw tot laatste detail" | — | — | TO SOURCE |
| Home | Werkwijze | PROCES — UITVOERING | 4:5 | Documentary process: measuring, coordinating, plastering | — | — | TO SOURCE |
| Home | Klantervaring | PROJECT — RESULTAAT | 4:5 | Stock allowed only while the review is a **marked voorbeeldreview**; with a real review this must be that client's real project | — | — | TO SOURCE (temp) |
| Diensten | renovatie-verbouwing | RENOVATIE (3:2) | 3:2 | Complete Dutch home renovation, wide | — | — | TO SOURCE |
| Diensten | badkamerrenovatie | BADKAMER (3:2) | 3:2 | Bathroom reno, tegelwerk/plaster | — | — | TO SOURCE |
| Diensten | aanbouw-uitbouw | UITBOUW | 3:2 | Rear extension with large glazing, garden side | — | — | TO SOURCE |
| Diensten | opbouw | OPBOUW | 3:2 | Roof extension / added storey, Dutch terraced house | — | — | TO SOURCE |
| Diensten | stucwerk | STUCWERK | 3:2 | Smooth plastered interior architecture, light raking | — | — | TO SOURCE |
| Interieurbouw | Hero | INTERIEUR — DETAIL | 4:5 | Bespoke joinery detail, oak veneer, shadow gap | — | — | TO SOURCE |
| Interieurbouw | Craft | MATERIAAL | 3:2 | Material junction / veneer + steel, close | — | — | TO SOURCE |
| Interieurbouw | Craft | VERBINDING | 1:1 | Joinery connection close-up, craftsmanship | — | — | TO SOURCE |
| Interieurbouw | Sub | MAATWERKKAST | 4:5 | Floor-to-ceiling built-in wardrobe, flush doors | — | — | TO SOURCE |
| Interieurbouw | Sub | INTERIEUR OP MAAT | 3:2 | Integrated interior, bench + shelving | — | — | TO SOURCE |
| Interieurbouw | Sub | WANDMEUBEL | 3:2 | Custom TV/wall unit, integrated | — | — | TO SOURCE |
| Werkwijze | Steps | KENNISMAKING…OPLEVERING | 4:3 | Mix: process/craft (measuring, fitting) + finished detail | — | — | TO SOURCE |
| Over | Media | WERKPLAATS / TEAM | 16:9 | Workshop or craftsman working, documentary, not posed | — | — | TO SOURCE |
| Service pages | Related | DETAIL | 3:2 | Craftsmanship close-up matching the service | — | — | TO SOURCE |

## Curated search directions (grounding, not literal queries)

`Dutch contemporary home renovation` · `Amsterdam townhouse renovation` · `Dutch rear
extension architecture` · `oak bespoke cabinetry interior` · `custom built-in cabinet
architecture` · `architectural joinery detail` · `European residential interior
architecture` · `modern Dutch bathroom renovation` · `jaren 30 woning renovation` · `Dutch
kitchen extension` · `oak veneer wall unit` · `European craftsman interior installation`
