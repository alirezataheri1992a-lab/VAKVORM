# VAKVORM — Visual Direction

Practical implementation rules for the build. Derived from the approved discovery
(`/DISCOVERY.md`) and the "Constructed Editorial" art direction. This is a build
spec, not a strategy document.

> **Direction in one line:** Dutch architecture editorial × high-end craftsmanship ×
> construction discipline. Image-led, controlled, warm, understated. It must read as
> *art-directed by a design studio* — never AI-templated.

> **Brand-name rule (permanent):** the brand is always written **VAKVORM** in visible/textual
> content — real uppercase text, never CSS `text-transform`. Applies to copy, nav, footer,
> breadcrumbs, SEO titles/meta/OG, structured data and CMS content. Surrounding Dutch text keeps
> normal capitalisation ("VAKVORM is gevestigd in Utrecht."). **Not** applied to URL slugs
> (`/over-vakvorm`), the domain (`vakvorm.nl`), package names, or code identifiers.

---

## 1. Anti-AI constitution (hard rules)

**Never:** centered hero over a gradient; gradient backgrounds or text; glassmorphism;
floating glass cards; big drop shadows; large border-radii / `rounded-3xl`; pills for
nav or labels; Bento grids; 3 identical icon-cards; icon-in-circle blocks; decorative
Lucide icons; checkmark lists as design; fake stats/counters/awards/testimonials/logo
walls; gradient blobs; floating shapes; parallax/scroll-jacking/mouse-gimmicks;
marquees-for-fashion; animation whose only job is to look expensive.

**Cards are the exception, not the layout system.** If content keeps ending up inside
rounded containers, stop and recompose. No `Card/CardHeader/CardContent` grammar.

**The AI-template test:** remove logo, name, and photos — if the site could be resold to
a dentist or SaaS by swapping text, it has failed.

---

## 2. Layout & grid

- 12-column grid. Max content width **1460px**; generous outer margins
  (`clamp(20px, 5vw, 96px)`).
- **Asymmetric spans by default** (5/7, 4/8, 7/5) — avoid 6/6.
- Image sections may intentionally exceed the text container (full-bleed allowed).
- Whitespace is active — do not fill every viewport.
- Mobile is designed, not scaled: 4-col mental model, hierarchy preserved, editorial
  character kept.

## 3. Shape language

- Square / near-square corners. Radius only where usability truly benefits
  (max `2px`, token `--radius`).
- Images never inside rounded card shells.
- Buttons are architectural: rectangular, deliberate, underline/box treatments — no
  capsule/pill buttons.

## 4. Color tokens (material-inspired)

Not black/gold luxury, not cold SaaS white. Warm mineral + ink + concrete + one oxide.

| Token | Value | Use |
|---|---|---|
| `--bone` | `#EBE6DD` | page background (warm mineral off-white) |
| `--paper` | `#F4F1EA` | lighter raised surface |
| `--ink` | `#15181A` | primary text / dark sections (blue-charcoal near-black) |
| `--concrete` | `#6C685F` | secondary text |
| `--concrete-line` | `#C8C2B6` | hairlines, datum rules, borders |
| `--oxide` | `#9E4A2C` | accent — **used sparingly**, never competes with photos |

Accent appears only at small, intentional moments — **interactive/active states only**
(link hover, active service-index number/arrow, primary-button hover). It is **not** used on
the hero, static headings, static index numbers, or the "één" emphasis. The identity must
hold in pure monochrome (see typography-review.md). Photography always wins the colour contest.

## 5. Typography — neo-grotesk + mono spec layer

Three roles: an **editorial serif** for the display "voice", a **warm grotesque** for
everything readable, and a **monospace** for the technical spec layer. Character now comes
from the letterforms *and* the application — a deliberate move away from the earlier
neutral neo-grotesk (Public Sans) which read as generic.

- **Display / voice — Fraunces** (SIL OFL): a warm, high-contrast old-style serif with real
  character (contemporary revival). Used for display, headings, section/service titles,
  **quotes (italic)** and the **index numerals** (the datum "04"). This is what makes the
  brand distinctive and premium.
- **Readable layer — Hanken Grotesk** (SIL OFL): a clean, faintly warm humanist grotesque.
  Body, navigation, buttons, labels/eyebrows, the wordmark. Legible large and small.
  Not Inter/Geist/Public Sans/Helvetica-neutral.
- **Technical spec layer — IBM Plex Mono** (SIL OFL): capability strips, genuine spec tags,
  placeholder ratios. A quiet counterpoint to the serif. Never used for reading copy.

**Scale (concise, deliberate):**

| Role | Family | Size | Weight |
|---|---|---|---|
| Display | Fraunces | `clamp(2.4rem, 5vw, 4.6rem)` / lh 1.02 / track −0.014em | 500 |
| Heading | Fraunces | `clamp(1.6rem, 3vw, 2.5rem)` | 500 |
| Quote | Fraunces *italic* | contextual | 400 |
| Index numeral | Fraunces, tabular | contextual, `--oxide` / `--navy` | 500 |
| Lead | Hanken Grotesk | `clamp(1.12rem, 1.5vw, 1.35rem)` / lh 1.5 | 400 |
| Body | Hanken Grotesk | `1.0625rem` / lh 1.62 / ≤ 64ch | 400 |
| Label / eyebrow | Hanken Grotesk | `0.72rem`, uppercase, track 0.08em | 600 |
| Navigation / wordmark | Hanken Grotesk | `0.9rem` / `1.5rem` | 500 / 700 |
| Technical label | IBM Plex Mono | `0.70rem`, uppercase, track 0.04em, tabular | 500 |

**Rules:**
- Serif for the **voice** (headlines, titles, quotes, numerals); grotesque for everything the
  visitor *reads and operates* (body, nav, buttons, eyebrows, the wordmark). Never set body
  copy in the serif.
- Numerals are set in Fraunces and may take colour (`--oxide` cognac / `--navy`) — the datum
  index is a signature element, not a flat mono figure.
- Hierarchy from **face, weight, scale, position**. Uppercase only on labels/spec, modest tracking.
- Max ~3 weights per face. No sub-15px reading copy.

## 6. The VAKVORM datum line (visual signature)

A thin architectural rule paired with an index number and a label — from construction
datum lines / drawing indices.

```
01 ───────────────────────────  BOUW & RENOVATIE
```

- Implemented as `<SectionMarker>` (number + label + hairline) and `<DatumLine>` (rule).
- Thin (1px), precise, `--concrete-line`; the index number may take `--oxide` when active.
- Applied at: section intros, project metadata, service index, process steps, footer,
  small nav moments.
- **Never** a decorative blueprint. Quiet and structural only.

## 7. Photography

- Real projects will dominate. **No stock, no generic luxury villas presented as VAKVORM.**
- Until real assets arrive: `<ProjectMedia>` renders a labelled placeholder holding the
  intended aspect ratio (e.g. `[PROJECTFOTO — 4:5]`). Empty CMS fields simply don't render.
- Editorial variety: landscape, portrait detail, full-bleed, image pairs, offset crops,
  craftsmanship close-ups. Never six identical 4:3 cards.

## 8. Motion

- Supportive, quiet, physical. Image reveals, nav/menu transitions, subtle project hover,
  meaningful text entrance. Not everything fades-up on scroll (that's an AI tell).
- Vary motion or leave static. Respect `prefers-reduced-motion` (disable transforms/reveals).
- No heavy animation libraries; CSS + a tiny IntersectionObserver reveal only.

## 9. Components (VAKVORM primitives, not a UI kit)

`Container`, `EditorialGrid`, `SectionMarker`, `DatumLine`, `ProjectMedia`, `ProjectMeta`,
`ServiceIndex`, `ImagePair`, `EditorialIntro`, `ProcessSequence`, `ContactPanel`,
`SiteHeader`, `SiteFooter`. A component earns existence by repetition / meaning / necessity.

## 10. Accessibility & performance (design requirements)

- WCAG AA: semantic HTML, keyboard nav, visible focus, labelled forms, real contrast
  (no unreadable grey), accessible dropdown + full-screen mobile menu.
- Image-heavy → responsive `next/image`, AVIF/WebP, explicit ratios (no CLS), above-fold
  priority only, lazy below, minimal JS, minimal font blocking.

## 11. Guardrails on distinctiveness

Distinctive in *composition and art direction*; familiar in *navigation and usability*.
Do not overdesign (no horizontal-scroll site, no invented UX, no illegible type). It must
still convert normal Dutch homeowners looking for an aannemer / interieurbouwer.
