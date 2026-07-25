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

## Recomposition round 2 (owner: "recompose everything that scored too high")

| Section | Was | Now |
|---|---|---|
| Trust band | Four equal title+desc columns under an eyebrow marker — the classic benefit-grid | **Asymmetric editorial ledger**: large claim left ("Eén partij, van A tot Z."), four running assurance lines right — bold lead flowing into regular copy, no grid, no hairlines |
| Statement chapter | Eyebrow marker + statement + decorative mono triad with column dividers | **The statement alone**, indented off-grid on the navy field; marker and triad removed — stillness and space |
| Mid-page CTA | Marketing banner (eyebrow + heading left, button right) | **Left-aligned conversational moment**: one question, one clay action, a quiet "of bel …" phone alternative |
| Testimonial | "Klantervaring" eyebrow marker above the quote | Marker removed — the cognac quote mark announces the section |
| ContactPanel (all pages) | Eyebrow marker + mono uppercase fact labels | Opens directly with the display heading; fact labels set in sentence-case sans |
| Disciplines intro | Marker + heading | Heading alone |

Net effect: hairline+eyebrow openings reduced from ~8 to 4 on the homepage, all remaining
ones functional (work header, the 01/02 discipline classification, Diensten, Werkwijze).
Section openings no longer follow one predictable formula.

## Honest scores (targets: AI/template/vibe ≤ 2 · brand/art-direction/distinctiveness ≥ 8)

| Dimension | Score (after round 2) | Notes |
|---|---|---|
| Generic AI website resemblance | **2 at composition level** | The structural tells (benefit grid, eyebrow formula, decorative mono, CTA banner, accent-word trick) are gone. The one remaining "generated" cue is the **placeholder rectangles** — a content gap, not a design pattern; resolved by photography, not CSS. |
| Framer-template resemblance | **2** | Varied, rule-based motion; still navy chapters; mask reveals on media only. |
| Vibe-coded aesthetic | **2** | No glass, gradient filler, bento, icon cards, pills, fake stats; one deliberate action hierarchy; marked-placeholder review, never fake proof. |
| Brand specificity | **8** | Claim+ledger trust copy, discipline chapters, capability logic, werkwijze and the intake journey are construction-specific; a dentist/SaaS reskin would have to rewrite the composition, not just the words. |
| Human art-direction | **8** | Asymmetric ledger, off-grid statement, overlap, chapter contrast, deliberate stillness. |
| VAKVORM distinctiveness | **8 structurally** | Photography consolidates it visually; every slot is specified in `image-sources.md`. |

## Standing rule for future passes

Before shipping any new section, apply: the **reskin test** (would it survive a swap to a
dentist/SaaS with only text+logo changed? then rework it), the **25% silhouette test**, and
the **creative-director test** ("would a design studio present this without explaining it
was AI-assisted?"). Never fix blandness with more lines, labels, or animation — only with
proportion, photography, crop, contrast, scale and sequencing.
