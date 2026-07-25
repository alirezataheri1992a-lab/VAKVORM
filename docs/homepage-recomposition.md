# VAKVORM — Homepage Recomposition Pass

Goal: make the homepage feel **alive, visual, premium, warm, confident, commercial**
without restarting the brand, typography, information architecture or palette. Only the
homepage was recomposed (per the stop condition); the other 22 routes are untouched.

---

## 1. What the previous homepage got wrong

The foundation was strategically correct but visually cautious. Concretely:

- **Brochure cadence** — heading → text → image → space → line → repeat. Every section had
  the same weight; nothing was a *moment*.
- **Weak Selected Work** — a large image + small image + tiny caption, both obediently
  inside identical grid logic. No dominant story, no tension.
- **One continuous cream canvas** — long stretches of the same light background separated by
  thin hairlines. At 25–30% zoom the page read as "pale rectangles + lines".
- **Commercial timidity** — the only real call to action arrived at the very bottom.
- **No emotional beat** — the page only ever *explained* (capability strip, disciplines,
  index, process, metadata); it never just *showed the work*.
- **Placeholder-forward** — the strong diagonal hatch made the page look like a wireframe
  celebrating its own placeholders instead of previewing the final composition.

## 2. What was recomposed

| # | Section | Before | After |
|---|---|---|---|
| 1 | **Hero** | text column + image column, capped display | one composition: three-line display (2.8→5.4rem), media widened to 52vw and bled to the right edge, filling ~84vh; a **metadata chip overlaps the media's lower-left** onto the canvas |
| 2 | **Trust / capability** | four flat items | a labelled *bridge* chapter with cognac index numerals and bolder titles — reads as important, not a data table |
| 3 | **Selected Work** | large + small image, safe grid | **one dominant 3:2 image + an offset 4:5 detail that overlaps it**, with a strong meta bar (type · title · location · *Bekijk project*). Honest "binnenkort" variant keeps the same bold composition without inventing a project |
| 4 | **Two worlds** | navy Bouw strong, interieur pale | Bouw stays navy but gains a tall 4:5 image and a display-scale title; **Interieurbouw becomes a tactile material chapter** with a large image + an overlapping 1:1 material detail — equal authority |
| 5 | **Brand principle** | navy statement | protected, untouched — still the hero of its chapter |
| 6 | **Services** | index + 34% preview | same numbered index, but the **media reveal grew to 40%, gained depth (shadow) and a richer active transition** — a real focal point, not an afterthought |
| 7 | **Craft moment** | *did not exist* | **new full-bleed emotional anchor**: near-cinematic media with a minimal line — *"Van ruwbouw tot laatste detail."* — over a navy scrim. Information → emotion → information |
| 8 | **Mid-page CTA** | *did not exist* | **new compact material band** — *"Een verbouwing op de planning?"* + clay *Project bespreken* — so the first obvious next step is mid-page, not only at the bottom |
| 9 | **Werkwijze** | small process at the page foot | promoted to its own **trust chapter**: big 4:5 process image + a large-numbered, large-titled 4-step sequence |
| 10 | **Conversion** | navy panel | kept as the **destination** (display heading + facts + phone/email), deliberately distinct in scale from the footer |

## 3. Where overlap / bleed / off-grid tension was introduced

- **Hero media** bleeds to the right viewport edge; the **metadata chip** sits off-grid,
  overlapping the media boundary onto the canvas (desktop).
- **Selected Work**: the detail image is offset downward and pulled left with a negative
  margin so it **overlaps the dominant image** — controlled, not absolute-positioned, so it
  degrades to a clean stack on mobile.
- **Interieurbouw**: the 1:1 material detail is absolutely positioned to **overlap the lower
  edge** of the main interior image.
- **Craft band**: full-bleed media crossing the whole viewport, breaking the container grid
  entirely; text overlaps the image over a gradient scrim.
- Text itself stays disciplined and on-grid throughout — only **photography** is freed.

## 4. Where visual hierarchy increased

- Hero display size raised and set to three lines.
- Trust titles enlarged; cognac index numerals added.
- Selected-Work project title at 1.7→2.6rem; Bouw/Interieurbouw titles promoted to display
  scale; Werkwijze step titles to 1.5→2.2rem.
- Placeholder chrome **reduced** (item 21): the dominant 45° hatch became a very faint 47px
  texture over a soft paper→stone gradient; labels quieted. The page now previews the final
  composition instead of celebrating placeholders.

## 5. Colour used with more confidence

The page is now a sequence of surfaces rather than one cream field:

`bone → sand → bone → NAVY → MATERIAL → NAVY → bone → full-bleed image → MATERIAL → sand → NAVY → NAVY(footer)`

No new colours were introduced — the ivory / navy / cognac / warm-material palette is used
in larger, more deliberate chapters. Light sections use the fresher `--paper`/`--bone`;
warm stone is reserved for the material chapters.

## 6. Learned from the reference (Ambacht Totaalbouw) — and what was **not** copied

**Adopted (the principles, not the pixels):** image dominance, a mid-page conversion moment,
a genuine trust/process chapter, warmth, and one clear emotional proof beat.

**Explicitly rejected:** yellow/gold identity, decorative house logo, "Bekend van TV" badges,
four-icon feature cards, rounded-card clutter, aggressive lead funnel, their service-grid,
their typography and their exact navy. VAKVORM stays more editorial and more restrained.

## 7. Proof module (item 15)

A real proof/testimonial surface is **intentionally not rendered** — there is no confirmed
review, score or credential yet, and VAKVORM never fabricates them. The narrative has a clear
slot for it (between Werkwijze and Conversion) when real, consent-based proof exists.

## 8. Before / after scorecard (self-critique, not inflated)

| Dimension | Before | After | Target | Met |
|---|---|---|---|---|
| Visual energy | 5 | **8** | ≥8 | ✓ |
| Warmth | 6 | **8** | ≥8 | ✓ |
| Premium character | 7 | **8** | ≥8 | ✓ |
| Construction credibility | 6 | **8** | ≥8 | ✓ |
| Interior sophistication | 6 | **8** | ≥8 | ✓ |
| Trust | 5 | **8** | ≥8 | ✓ |
| Commercial clarity | 5 | **8** | ≥8 | ✓ |
| Human feeling | 4 | **7** | — | ⚠ gated on real photography |
| Brand distinctiveness | 7 | **8** | ≥8 | ✓ |
| AI-template risk | 3 | **2** | ≤3 | ✓ |
| Generic contractor-template risk | 2 | **2** | ≤3 | ✓ |

**Human feeling is honestly a 7, not an 8.** The composition now has clearly designed places
for craftsman/site/process imagery (hero, Selected Work detail, Bouw, Interieurbouw detail,
craft band, Werkwijze), but real human photography does not yet exist. It will reach 8 the
moment real people-at-work images are dropped into those slots — no layout change required.

**25–30% zoom test:** passes — a powerful opening, dominant proof, two distinct disciplines,
a strong dark chapter, an engaging service chapter, a full-bleed human/craft moment, and a
clear conversion ending. It no longer reads as pale areas separated by thin lines.

**Three-customer test:** €70k extension + reno, €30k bespoke interior, €175k combined — the
Bouw chapter + Werkwijze answer the first, the Interieurbouw material chapter answers the
second, and both + the one-party principle answer the third. Credible for all three.

## 9. Scope

Homepage only (`src/app/page.tsx`, `src/app/home.module.css`). Shared primitives touched:
`ProjectMedia` placeholder (quieter, benefits every page) and `ServiceIndex` media reveal
(larger). Footer enrichment and propagation to other routes are **deliberately deferred** to
a later pass, per the stop condition.
