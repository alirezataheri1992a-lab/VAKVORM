# VAKVORM — Image Sources & Photography Plan

Tracks every image slot on the site, the curated stock image chosen for it, and the
real Vakvorm photograph that will eventually replace it.

> **Session status — TO SOURCE (re-verified 2026-07-24).** The pre-launch stock photography
> still could **not** be downloaded: the environment's egress policy **blocks image CDNs**.
> Re-tested this session — `images.unsplash.com`, `images.pexels.com`, `api.unsplash.com`,
> `unsplash.com`, `plus.unsplash.com`, `source.unsplash.com`, `api.pexels.com`,
> `www.pexels.com`, `picsum.photos`, and `upload.wikimedia.org` all return proxy
> `connect_rejected` **403 policy denials**; the only reachable external host is
> `raw.githubusercontent.com`. Per the agent-proxy rules a 403 is an organization policy
> block that must not be retried or routed around. The layout has been
> **art-directed around photography** (crops, ratios, bleeds, whitespace all assume real
> images), and every slot below is specified so images can be dropped in without touching
> components. Add curated images from a session/machine with image egress (or after the
> hosts are allowlisted for this environment), or have the owner supply them.

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
blackened/stainless steel, smoked glass. Bouw ≈ 60% finished / 25% detail / 15% process.
Interieur = made-and-fitted joinery, shadow gaps, flush doors, close crops. People only
documentary (a carpenter fitting cabinetry), never posed hard-hat/handshake stock.

## Licensing

Only Unsplash / Pexels (or equivalently licensed) sources. No architecture-firm/contractor
project photos. **No stock image may be presented as a real Vakvorm project** — Projects stay
placeholder until genuine case studies are loaded.

---

## Slot manifest

| Page | Section | Slot | Ratio | Direction (search intent) | Source / URL / author | License | Status |
|---|---|---|---|---|---|---|---|
| Home | Hero | HERO — PROJECT | 3:4 | Dutch open-plan ground-floor renovation, warm daylight, portrait, lived-in | — | — | TO SOURCE |
| Home | Work | WONINGRENOVATIE | 3:2 | Renovated Dutch living/kitchen, wide architectural frame | — | — | TO SOURCE |
| Home | Work | BADKAMER | 4:5 | Modern Dutch bathroom reno, microcement/tegel, vertical | — | — | TO SOURCE |
| Home | Disciplines | BOUW | 4:3 | Rear extension / structural steel + glazing, construction credible | — | — | TO SOURCE |
| Home | Disciplines | INTERIEUR | 4:5 | Oak bespoke cabinetry in situ, detail-led, vertical | — | — | TO SOURCE |
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
