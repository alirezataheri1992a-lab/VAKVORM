# VAKVORM — Design Review 01
### Independent art-direction audit (pre-merge visual gate)

Reviewed as an outside creative director against the built site (PR #1), across the
full desktop + mobile screenshot set and a contact sheet. I am not defending the prior
build.

> **Hard constraint on this review:** the environment's egress policy **blocks image
> CDNs** (`images.unsplash.com`, `images.pexels.com` return policy `403`). I therefore
> **could not fetch the curated stock photography** the photography-override brief calls
> for. Every "image" on the site is currently a labelled placeholder. That means the site
> presently reads as a **refined wireframe**, and a *final* art-direction verdict is
> partially gated on real imagery. This review scores the **structural art direction**
> (composition, type, grid, rhythm, geometry, IA, interaction) — the parts that are
> judgeable now — and calls out explicitly where the verdict depends on photography.

---

# Executive Verdict

The structural design is genuinely disciplined — restrained type, real whitespace, hairline
detailing, almost no cards, and a proprietary-feeling service index — which already puts it
above the generic-AI-template baseline. But it is **not yet ownably VAKVORM**. Strip the
words and it reads as a competent *Dutch architecture/interior studio* template: the bone
monotony, the every-section datum marker, and the conventional left-text/right-image hero
are studio conventions, not a signature. Worse for this business, **construction credibility
is thin** — nothing on the page says "we build and control projects"; it tilts to the
interior-studio pole the brief explicitly warned against. Much of that is downstream of
having no photography, but not all of it: the datum system is over-used, the numbering is
applied decoratively rather than as a real index, and the tonal range is one note (bone).
Solid foundation; not yet the finished brand.

---

# Scorecard

| Dimension | Score | Note |
|---|---|---|
| Art Direction | 6.5 | Disciplined but studio-generic; one tonal note. |
| Brand Distinctiveness | 5.5 | Datum concept is the only ownable idea, and it's over-diluted. |
| Construction Credibility | 4.0 | Almost nothing signals "we build". Leans interior studio. |
| Interior Sophistication | 6.0 | The strongest pillar; hampered by missing detail imagery. |
| Typography | 6.5 | Clean, contemporary; not yet characterful or ownable. |
| Composition | 6.5 | Good asymmetry, but every section shares one skeleton. |
| Project Presentation | 4.0 | Unproven — no images/projects; template is sound but untested. |
| Navigation | 7.5 | Genuinely strong: grouped dropdown + deliberate mobile menu. |
| Mobile | 6.5 | Reads well; hero image is under-weighted, few mobile-specific moves. |
| Conversion Clarity | 6.5 | Calm and clear; proof (the real driver) is absent. |
| **Overall** | **6.0** | Strong bones, not yet a distinctive brand site. |

---

# Critical Problems
*(materially reduce perceived brand quality)*

1. **No photography → reads as a wireframe.** Images *are* the art direction on a
   project-led site; with every slot empty, the page can't yet be judged as the brand and
   looks unfinished. (Blocked by egress policy this session — see top note + image-sources plan.)
2. **Construction credibility is missing.** No process/structural signal, no scope/discipline
   information design, no "we build" register. It currently looks like an interior studio,
   not a company that runs €65k–€250k builds. This is a positioning failure, not just a
   visual one.
3. **The datum marker is a formula, not a signature.** A numbered `NN ──── LABEL` opens
   almost every section (hero, work, disciplines, statement, services, werkwijze, footer,
   breadcrumbs, and repeatedly on service pages). Repetition has turned an idea into a tic,
   and the numbering is **arbitrary** ("Het principe = 03") — decoration wearing the costume
   of an index. It should mean something or be removed.
4. **One tonal note (bone).** Near-everything is warm off-white with a single dark footer.
   The monotony reads "interior studio" and denies the page weight/gravitas that would sell
   construction. Tonal rhythm is doing no work.

# Major Problems

5. **Hero is conventional.** Ultimately left-text / right-image with a top gap; the image
   sits *in* the layout rather than participating in the composition. Competent, not
   memorable, and doesn't establish the brand in the first viewport.
6. **Every page shares the same skeleton** (marker → heading → 2-col → placeholder). Reads
   as a system, but a monotonous one; no page has a signature moment.
7. **Mobile hero under-weighted.** The hero image collapses to a small square below the fold;
   on the most-used breakpoint, photography barely participates.
8. **Header lacks presence.** Wordmark is small; the "Offerte aanvragen" button is a generic
   dark rectangle. For a premium brand the header is a touch timid.

# Minor Refinements

9. Display type could carry more character (weight/scale) at hero sizes.
10. Oxide accent risks becoming a predictable "designer orange" — currently only on the hero
    word "partij" and index numbers; keep it rare and load-bearing.
11. Werkwijze reads slightly like a styled timeline; numbering there is legitimate but the
    media slots dominate the copy.
12. Placeholder frames' hatch is fine but the 1px border makes them read as boxes — soften.

---

# What Already Works *(protect)*

- **Near-zero cards.** The UI is built from type, whitespace and hairlines — a real strength
  and genuinely anti-template. Do not introduce card grammar.
- **ServiceIndex.** Numbered typographic rows with the desktop image-reveal is the most
  proprietary component; keep and elevate it.
- **Navigation.** Grouped Diensten dropdown + full-screen numbered mobile menu are strong and
  accessible.
- **Restraint and whitespace.** The overall composure is right for the price point.

# What Must Be Removed

- Decorative/arbitrary datum numbering on generic section headers (keep numbering only where
  it's a true index: services, process steps, project metadata).
- The uniform "marker on every section" reflex.
- The hero's top gap and the sense that the image is a side element.
- The hard 1px border on media placeholders (use the registration marks alone).

# What Must Be Redesigned

- **Hero** — into an image-participating composition with a full-width datum *baseline* and
  larger, lower-set display type; image bleeds to the top edge.
- **Tonal rhythm** — introduce an **ink (dark) section** in the body (statement/disciplines)
  so the page isn't one beige note; gives construction weight.
- **Construction register** — add one restrained, *truthful* "we build / scope & discipline"
  information moment (typographic, no blueprint clichés) so the build side is credible.
- **Mobile hero** — give the image real presence.

# What Must NOT Be Added *(protect from over-design)*

- No blueprint graphics, hard-hats, construction icons, yellow/black, technical grids as
  decoration.
- No cards, bento grids, gradients, glassmorphism.
- No more datum lines "to look more construction."
- No fabricated stats, projects, reviews, awards.
- No stock imagery presented as a real Vakvorm project.

---

# STRUCTURAL REFINEMENT PASS

Implemented against this review, without photography (image CDNs remain blocked). Kept
placeholders; improved only what is judgeable without final imagery. Target was a strong
7–8 structural foundation, not a fake 9.

### 1. What changed
- **Hero recomposed.** Removed the empty top gap; the media column now **fills the full
  hero height and bleeds to the right edge**, and the type is vertically centred against it
  so the two read as one composition rather than text-left / image-in-a-box. Added a
  `fill` capability to `ProjectMedia` (fills parent height on desktop, keeps ratio on mobile).
- **Capability datum baseline** under the hero (`CONSTRUCTIE · RENOVATIE · AANBOUW ·
  STUCWERK · INTERIEURBOUW · COÖRDINATIE`) — an architectural spec strip stating build breadth.
- **Core statement rewritten + weighted** in the ink section: *"Een complete verbouwing
  bestaat uit veel disciplines. Voor u voelt het als één project — georganiseerd, gebouwd en
  afgewerkt door één partij."* — bridging bouw + interieur + regie.
- **Construction-credibility triad** on ink (`ORGANISEREN · BOUWEN · AFWERKEN`) as a
  typographic spec row, not cards.
- **Tonal rhythm:** the ink "Het principe" section is the single deliberate dark chapter
  break mid-page (kept the rest restrained; no second-section-dark pattern, no gradients).
- **Header:** larger wordmark + wider descriptor tracking; CTA gained a geometric chevron.
- **Placeholders softened:** removed the hard 1px border; registration marks + quiet field only.

### 2. What was deliberately removed
- All **arbitrary/decorative datum numbering** on generic section intros, site-wide
  (`Het principe`, `Diensten`, `Werkwijze`, `Over Vakvorm`, `Contact`, interieurbouw and
  service-page intros) and the decorative `—` / `→` marker glyphs. No motif was added to
  compensate — the reduction *is* the improvement.

### 3. Which datum usages remain, and why
- **Two-pillar index** (`01 Bouw & Renovatie / 02 Interieurbouw`) — a real pair.
- **ServiceIndex rows** (`01`–`06`) — a real directory.
- **Werkwijze steps** (`01`–`05`) — a real sequence.
- **Project case-study narrative** (`01 opgave / 02 aanpak / 03 resultaat`) — a real sequence.
- Everything else is now a **label + hairline**, no number. Numbered moments are rarer and
  therefore more distinctive.

### 4. How construction credibility improved
Without any cliché (no blueprints/hard-hats/icons): the hero capability baseline, the
`ORGANISEREN · BOUWEN · AFWERKEN` triad, the "georganiseerd, gebouwd en afgewerkt" language,
and the added tonal weight of the ink chapter all state that VAKVORM organises, builds and
finishes — not merely designs interiors.

### 5. How the hero composition changed
From text-left / image-in-a-side-box with an empty top gap → a full-height media that bleeds
to the edge and forms one composition with vertically-centred display type, closed by a
full-width capability spec strip. Less templated, more architectural.

### 6. How mobile changed
Hero media is now a **tall, full-width image** (ratio preserved on mobile) with real presence
below a strong display statement and a direct project route — no longer a small square. The
capability baseline reflows to two columns.

### 7. What remains impossible to judge without photography
Final art-direction quality, **construction credibility at full strength**, and **project
presentation** all still depend on real imagery — placeholders can't demonstrate finished
work, craft detail, or process. Those axes are intentionally left un-scored. The composition
is now strong enough that photography should **elevate** it, not rescue it.

### Refined structural scores (composition only; photography un-scored)
Art Direction 7.5 · Brand Distinctiveness 7 · Construction Credibility 6.5 · Typography 7 ·
Composition 7.5 · Navigation 7.5 · Mobile 7.5 · **Overall structural ≈ 7.5/10.**

---

STRUCTURAL DESIGN: READY FOR PHOTOGRAPHY
