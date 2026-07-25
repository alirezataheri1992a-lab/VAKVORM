# VAKVORM — Anti-AI / anti-template audit

Audit of the site against the "no AI / vibe-coded aesthetic" constraint. This extends the
anti-AI constitution in `visual-direction.md` §1 with a concrete pass: inspect → name what
trips the tripwires → fix → score honestly. AI is the development tool here, never the art
direction — nothing in the visual result may advertise how it was built.

## What the audit found (and what changed)

| # | Tripwire | Finding | Action |
|---|---|---|---|
| 1 | Identical fade-up on every section (Framer signature) | The global ScrollReveal applied one uniform fade-up to *all* sections on all pages | **Rewritten** with a deliberate motion rule: **navy chapters stand still** (weight through stillness), **full-bleed photography reveals by slow mask/crop** (an image treatment, not a UI fade), light content rises gently. Variety by rule, not randomness. |
| 2 | "One accent word in a different colour as the main design idea" | The statement's *één* was set in cognac — also contradicting our own `visual-direction.md` §4 (identity must hold in monochrome) | **Removed the colour**; emphasis is carried by italic voice alone. |
| 3 | Decorative numbering / tiny numbers | The trust strip numbered its four assurances 01–04 — but they are **not a sequence**; numbering non-sequential content is decoration pretending to be structure | **Numerals removed**; the strip is now four plain typographic assertions. Index numbers remain only where they encode real order/classification (services, werkwijze steps, discipline chapters). |
| 4 | The "AI architecture-site cliché" (beige + mono micro-labels + hairlines + terracotta) | The ingredients are present by approved brand direction; what keeps the page out of the cliché is the **composition**: cinematic video hero, overlap in Selected Work / Interieurbouw / testimonial, discipline chapters with different internal layouts, one full-bleed craft break, a still navy statement | Kept, monitored. Mono stays restricted to genuinely informational spec (capability register, triad, ratios); no new hairline/label moments may be added to "fix" blandness — composition must do that work (§4 of the brief). |
| 5 | Repeated section formula | Checked at 25% zoom: no two adjacent chapters share a layout (hero → trust columns → overlap proof → navy image-right → material overlap-left → still statement → index+preview → full-bleed → split CTA → process split → quote+card → conversion) | Pass — silhouette has an identifiable, varied rhythm. |

## Motion rules (now enforced in `ScrollReveal`)

- Dark (`.on-ink`) chapters: **no scroll animation** — stillness is the contrast.
- Container-less pure-media sections: **mask reveal** (`clip-path`, 1100 ms).
- Other light content: gentle 16 px rise (700 ms).
- Hero: cinematic video only. Reduced motion: everything static. Nothing is ever hidden
  without JS.

## Honest scores (targets: AI/template/vibe ≤ 2 · brand/art-direction/distinctiveness ≥ 8)

| Dimension | Score | Notes |
|---|---|---|
| Generic AI website resemblance | **3 → 2 with real photography** | The palette/typography ingredients sit near the known cliché; the composition is what separates it. The **placeholder rectangles are currently the strongest "generated" signal** — real project photography and the real hero edit are the single biggest remaining lever. |
| Framer-template resemblance | **2** | Varied, rule-based motion; no scroll-jacking; still chapters. |
| Vibe-coded aesthetic | **2** | No glass, gradient filler, bento, icon cards, pills, fake stats; deliberate CTA hierarchy; testimonial placeholder is explicitly marked, never fake proof. |
| Brand specificity | **8 structurally / 7 visually until photography** | Two-discipline chapters, capability register, proof loop, werkwijze, and the guided project intake are construction-logic, not reskinnable patterns; the visuals only fully lock it once real work is shown. |
| Human art-direction | **8** | Overlap, chapter contrast, stillness, monochrome-safe statement, asymmetric compositions. |
| VAKVORM distinctiveness | **7–8** | Rises with real projects/photography; the structure is ready for them. |

## Standing rule for future passes

Before shipping any new section, apply: the **reskin test** (would it survive a swap to a
dentist/SaaS with only text+logo changed? then rework it), the **25% silhouette test**, and
the **creative-director test** ("would a design studio present this without explaining it
was AI-assisted?"). Never fix blandness with more lines, labels, or animation — only with
proportion, photography, crop, contrast, scale and sequencing.
