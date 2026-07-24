# VAKVORM — Bouw & Interieur
## Website Discovery & Architecture Document

**Phase:** Discovery / Architecture (pre-build)
**Prepared as:** Digital strategy, UX architecture, technical architecture, SEO architecture
**Status:** Strategic groundwork — no production code, copy, or design produced.

> This is a thinking and decision document. It intentionally does **not** build the site,
> write final copy, choose a stack for aesthetic reasons, or invent facts about the company.
> Where information is missing, it is marked **[TO CONFIRM]** rather than assumed.

---

## 1. Executive Understanding

Vakvorm is the rebrand of an existing Utrecht construction company, **Persia Bouwbedrijf**,
repositioned from "a builder who does jobs" into **a single professional partner that takes
responsibility for the complete realization of construction and interior projects** — from first
consultation through delivery.

**Confirmed:** Persia has **no existing website**. This is therefore a **greenfield build with no
site migration** — there is no old URL inventory, no redirect map, and no on-site SEO equity to
preserve. The upside: full freedom over architecture with zero legacy constraints. The trade-off:
SEO starts from **zero domain authority**, so rankings must be earned from scratch through content,
projects, local signals and links — there is no inherited head-start. (Any off-site Persia presence
— a Google Business Profile, social profiles, directory listings — is a separate, lighter brand-
transition matter, not a website migration; see §14.)

The strategic core of the whole project is one sentence: **the customer hires one party, not a
collection of trades.** Every architecture, navigation, SEO and content decision below is judged
against whether it reinforces or undermines that promise.

Two things make this project different from a generic contractor website:

1. **Two equal pillars, not one-and-a-sub-service.** *Bouw & Renovatie* and *Maatwerk
   Interieurbouw* must be structurally co-equal. Interieurbouw is a distinct business with its own
   audience, buying psychology, search demand and case studies — not a footnote under renovation.
2. **A deliberately non-descriptive brand.** The company chose *Vakvorm* over an exact-match name
   like *"Aannemer Utrecht."* That is a premium-positioning decision that pushes SEO risk onto the
   architecture: the brand name will not win commercial rankings by itself, so information
   architecture, service landing pages, projects and local signals must carry the SEO load without
   the site ever *looking* like an SEO machine.

The commercial reality frames everything: target projects are **€50k–€250k+**. At that price the
buyer is not comparison-shopping on price alone — they are buying **trust, coordination and
proof**. The website's job is not lead-volume maximization; it is **credibility manufacturing**.

---

## 2. Business Model Interpretation

**What Vakvorm sells:** end-to-end project realization and coordination, delivered through a
combination of in-house capability and a curated network of specialized tradespeople. The product
is *managed outcome and single-point accountability*, not hours of labor.

**Revenue-relevant characteristics that shape the site:**

- **High-consideration, low-frequency purchase.** A homeowner renovates once a decade. The
  decision cycle is long (weeks to months), research-heavy, and trust-gated. → The site is a
  *research and reassurance* asset, not a transactional funnel.
- **Two demand streams with different psychology.**
  - *Bouw & Renovatie* buyers fear chaos, cost overruns, unreliable subcontractors, and living in a
    building site. Their dominant question is **"Can they run my whole project without it going
    wrong?"**
  - *Interieurbouw* buyers are closer to a design/craft purchase. Their dominant question is
    **"Is the craftsmanship and finish good enough, and does it match my taste?"** This audience is
    more visual, more design-literate, and includes a **B2B / commercial** segment (offices, retail)
    plus **architects/designers** seeking an execution partner.
- **The two pillars cross-sell.** The most valuable customer combines both ("renovate the house
  *and* build the custom interior"). That is Vakvorm's structural advantage over specialists and
  the reason the "één partij" promise has commercial teeth — the site must make the combined
  journey obvious.

**Implication:** the business is essentially a *general contractor + interior manufacturer +
project manager*. The website must sell **coordination and accountability** as the headline
product, with individual trades and services as supporting proof of capability — never as the
headline.

---

## 3. Positioning Interpretation

| Vakvorm **IS** | Vakvorm is **NOT** |
|---|---|
| A professional construction & interior partner | A handyman / klusbedrijf |
| Single point of contact & coordination | A loose list of trades for hire |
| Responsible A→Z for the project | A subcontractor you manage yourself |
| Premium, calm, craftsmanship-driven | A cheap, high-volume price-fighter |
| Credible for €50k–€250k+ projects | A "few small jobs" operation |
| Design-conscious (esp. interieur) | A purely functional builder |

**The positioning tension to manage:** *premium* and *accessible* pull in opposite directions if
handled naively. "Accessible" here should mean **approachable, clear, easy to talk to** — not
"cheap" and not "does anything for anyone." The site should feel like talking to a competent,
calm professional who takes the stress off you — expensive-feeling but not intimidating.

**The brand-vs-SEO tension** (returned to in §8): the name carries no keyword equity. Positioning
forbids stuffing "Aannemer Utrecht" into the brand and hero. The resolution is architectural:
**the brand owns the emotional register; the service and project pages own the search intent.**
These are different pages doing different jobs, and that separation is a feature, not a compromise.

**Scalability constraint:** today it is one company, one brand, one website. But decisions must not
block a future `Vakvorm Groep → Bouw / Interieur / Projects` structure. Concretely this means: keep
the two pillars as clean, independent top-level content clusters with their own URL roots, so a
future split is a re-labeling exercise, not a re-architecture. **Do not** hard-wire "interior is a
child of construction" into URLs, navigation or the content model.

---

## 4. Target Audiences

Ranked by strategic priority for the initial launch:

1. **Renovation homeowners (primary, highest value).** Planning a significant renovation/verbouwing
   in/around Utrecht. Value certainty, coordination, cleanliness of process, proof of similar work.
   Highest commercial-intent search demand.
2. **Premium custom-interior homeowners.** Want maatwerk kasten/wandmeubels/interieur op maat.
   Visual, finish-obsessed, taste-driven. Strong search demand under *interieurbouw* terms.
3. **Combined renovation + interior clients (most valuable, fewer in number).** The ideal customer
   for the "één partij" story. The site must make this combined path visible even though few users
   self-identify this way up front.
4. **Commercial / zakelijke interieurbouw clients.** Offices, retail, hospitality. B2B buying
   process, references and reliability matter more than emotion. Distinct enough to warrant its own
   landing page eventually, **not** at day one unless demand is proven **[TO CONFIRM]**.
5. **Architects / interior designers / partners** seeking a reliable execution partner. Small in
   number, high in value and referral leverage. They judge on craftsmanship, process discipline and
   whether Vakvorm will make *them* look good. A dedicated "for professionals/partners" angle is a
   later phase, not launch.

**Note:** audiences 4 and 5 are real but should not dilute the launch. Build the architecture so
they *can* be served later without retrofitting.

---

## 5. User Needs (the questions the site must answer)

Mapped from the concerns in the brief to the site's job. These drive IA validation in §6.

| User concern | What the site must provide |
|---|---|
| Can I trust this contractor? | Proof: real projects, reviews, process transparency, credentials **[TO CONFIRM which exist]** |
| Can they handle my *complete* project? | Clear "one partner, A→Z" narrative + scope evidence |
| Who coordinates the trades? | Explicit **Werkwijze** (process) explanation with single-point-of-contact framing |
| What quality can I expect? | High-fidelity project imagery, detail shots (critical for interieurbouw) |
| Have they done similar projects? | Filterable projects by type/service, rich case studies |
| What does the process look like? | Step-by-step process page, calm and reassuring |
| Are they professional and reachable? | Fast, obvious, low-pressure contact options |
| Can they do *both* construction and interior? | Visible dual-pillar structure + combined-project proof |
| How do I request an estimate? | Frictionless, premium-feeling consultation/quote request |

**Key insight:** at €50k–€250k, the conversion is *"I trust them enough to start a conversation,"*
not *"buy now."* The dominant on-site currency is **proof and clarity**, and the single most
underrated page type is **Werkwijze/process** — it is where the "one partner who coordinates
everything" promise is either substantiated or exposed as a slogan.

---

## 6. Proposed Information Architecture

### 6.1 Principles

1. **Two co-equal pillars** expressed structurally, not just in copy.
2. **Navigation is simpler than the content tree.** The menu stays premium and calm; depth lives
   below the fold and in internal links, not in a mega-menu.
3. **One page = one genuine intent + distinct value.** No slug-swap city/thin pages.
4. **Proof is a first-class citizen** (Projects) — not a gallery afterthought.
5. **Future-proof roots** so a Groep split later is cosmetic.

### 6.2 Site hierarchy (content tree — deeper than the nav)

```
/  (Home)
│
├── /diensten/                         (Services hub — overview of both pillars)
│   ├── /diensten/renovatie-verbouwing/
│   ├── /diensten/badkamerrenovatie/
│   ├── /diensten/aanbouw-uitbouw/
│   ├── /diensten/opbouw/
│   ├── /diensten/stucwerk/
│   └── (Bouw sub-topics added only when they earn a page — see §8)
│
├── /interieurbouw/                    (Pillar 2 hub — top-level root, NOT under /diensten)
│   ├── /interieurbouw/maatwerkkasten/
│   ├── /interieurbouw/interieur-op-maat/
│   ├── /interieurbouw/wandmeubels/
│   ├── /interieurbouw/wandpanelen/          (launch only if real demand/proof — see §8)
│   └── /interieurbouw/zakelijke-interieurbouw/  (later phase — B2B)
│
├── /projecten/                        (Projects hub — filterable)
│   └── /projecten/[project-slug]/     (individual case studies)
│
├── /werkwijze/                        (Process — how the "one partner" promise works)
├── /over-vakvorm/                     (About — story, rebrand, team, values)
├── /contact/                          (Contact + quote request)
│
└── Utility: /privacy/, /cookies/, /algemene-voorwaarden/, 404, sitemap.xml, robots.txt
```

**Critical architectural decision — Interieurbouw lives at `/interieurbouw/`, a top-level root, not
under `/diensten/`.** Reasons:

- It is a **co-equal pillar**, not a service. URL structure should encode that.
- It targets a **distinct search cluster** (*interieurbouw Utrecht*, *maatwerk interieurbouw*) and
  benefits from being its own topical hub for topical-authority SEO.
- It **future-proofs** the `Vakvorm Interieur` split — the root already exists.
- The **navigation can still present it inside a single "Diensten" dropdown** for simplicity (see
  §7). Nav labeling and URL architecture are decoupled on purpose.

> This is the single most important IA decision in the document, and it is a deliberate deviation
> from the brief's provisional structure (which nested interieurbouw under services). Flagged for
> approval in §18.

### 6.3 Service hierarchy logic

Two tiers only, to keep it premium and non-sprawling:

- **Tier 1 — Pillar hubs:** `/diensten/` (Bouw) and `/interieurbouw/` (Interieur).
- **Tier 2 — Intent pages:** one page per genuine, high-intent service (badkamerrenovatie,
  aanbouw/uitbouw, opbouw, stucwerk, maatwerkkasten, etc.).

Individual trades (elektra, loodgieterswerk, tegelwerk, timmerwerk, schilderwerk) are **capability
proof points described *within* the relevant service/process pages, NOT standalone pages.** Turning
each trade into a page would (a) fragment authority, (b) create thin pages, and (c) make Vakvorm
look like a "list of trades" — the exact anti-positioning. This is a direct application of the
brief's own warning.

### 6.4 Content relationships (see §10 for the linking model)

- Every **Service** links to related **Projects** (proof) and sibling services (cross-sell).
- Every **Project** links back to the **Services** it demonstrates and to **related projects**.
- **Werkwijze** is linked from every service page and every quote CTA (it answers "who coordinates
  everything?").
- The two **pillar hubs** cross-link ("also delivering the interior?" ↔ "also renovating?") to make
  the combined-project journey visible.

---

## 7. Proposed Navigation

### 7.1 Recommended top-level navigation

```
Home | Diensten ▾ | Projecten | Werkwijze | Over Vakvorm | [Contact / Offerte aanvragen]
```

- **Diensten ▾** — a clean, single dropdown (NOT a mega-menu):

  ```
  Diensten
    ── Bouw & Renovatie ──
    Renovatie & verbouwing
    Badkamerrenovatie
    Aanbouw & uitbouw
    Opbouw
    Stucwerk
    ── Interieurbouw ──
    Maatwerk interieurbouw
  ```

  The two labeled groups inside one dropdown communicate the **dual-pillar** structure while the
  menu stays visually simple. "Maatwerk interieurbouw" in the dropdown links to the
  `/interieurbouw/` hub (URL ≠ nav position, by design — see §6.2).

- **Offerte aanvragen** is the primary CTA, visually distinct (button), persistent in the header.

### 7.2 Evaluation of the provisional nav (challenging it)

| Item | Verdict | Reasoning |
|---|---|---|
| Home | Keep | Standard; hero carries the dual-pillar + "één partij" promise. |
| Diensten | Keep, restructured | Should visibly hold *both* pillars (grouped dropdown). |
| Projecten | Keep — elevate | Projects are strategic proof, not a portfolio afterthought. Top-level. |
| Werkwijze | Keep | Directly answers the #1 trust concern ("who coordinates?"). High value. |
| Over Vakvorm | Keep | Carries the rebrand story + team + credibility. |
| Contact / Offerte | Keep, as CTA | Split label: nav item "Contact", header button "Offerte aanvragen". |

### 7.3 DECISION — single "Diensten" dropdown with two labeled pillar groups (launch)

The owner delegated this to best practice. **Decision: launch with the single grouped "Diensten"
dropdown** (§7.1), not two separate top-level pillar items. The considered alternative was:

```
Home | Bouw & Renovatie ▾ | Interieurbouw ▾ | Projecten | Werkwijze | Over | [Offerte]
```

**Why the grouped dropdown wins at launch (UX/web best practice):**

- **"Één partij" integrity.** The core brand promise is *one partner*. A single "Diensten" entry
  point reinforces one-company/one-conversation; two separate pillar menus subtly frame Vakvorm as
  two businesses — working against the central positioning.
- **Cognitive load & Hick's law.** Fewer, well-labeled top-level items = faster, calmer decisions.
  Premium sites lean minimal; a 5-item primary nav reads more confident than a 7-item one.
- **Content maturity.** At launch there is roughly one interieurbouw hub + a few sub-pages and ~5
  projects. A top-level pillar slot should be *earned* by a mature content cluster, not asserted by
  an empty menu. Promoting it prematurely creates a thin, under-filled dropdown.
- **The dual-pillar message is still delivered** — via the two labeled groups *inside* the dropdown,
  plus the homepage hero, the two hub pages, and pillar-to-pillar cross-linking (§10). Positioning
  does not depend on the nav bar alone.
- **Reversible & future-proof.** Because `/interieurbouw/` is already a top-level URL root (§6.2),
  promoting Interieurbouw to a top-level nav item later (when its cluster and B2B demand mature, or
  toward a `Vakvorm Groep` split) is a **pure nav-label change with zero URL/redirect cost.** We keep
  the option open without paying for it now.

**Locked launch nav:** `Home | Diensten ▾ | Projecten | Werkwijze | Over Vakvorm | [Offerte aanvragen]`

**Documented trigger to revisit:** promote Interieurbouw to its own top-level item once it has a
filled sub-page cluster *and* proven interieur/B2B demand — a Phase-11 review item, not a launch one.

---

## 8. SEO Architecture

### 8.1 Strategy in one line

Win commercial rankings through **topical authority + genuine intent pages + local proof
(projects/reviews)**, never through thin slug-swapped city pages — and never at the cost of the
premium brand feel.

### 8.2 Page-type → intent mapping

> Search **volumes are deliberately omitted** — no keyword data has been supplied. Intent labels are
> qualitative. Actual prioritization requires real keyword research (see §18). Note: with **no legacy
> site**, there is no historical GSC/ranking data to lean on — keyword research must be done fresh.

| URL / page type | Primary search intent | Primary topic | Supporting topics | Journey role |
|---|---|---|---|---|
| `/` Home | Brand / broad orientation | Vakvorm as one partner (bouw + interieur) | Both pillars, proof, process | Entry / orientation |
| `/diensten/` | Category — "what do they build?" | Bouw & renovatie overview | Links to each service | Orientation → routing |
| `/diensten/renovatie-verbouwing/` | High-commercial: *verbouwing / renovatie / woningrenovatie Utrecht* | Complete renovation | Coordination, scope, process, projects | Consideration → convert |
| `/diensten/badkamerrenovatie/` | High-commercial: *badkamerrenovatie / badkamer verbouwen Utrecht* | Bathroom renovation | Tegelwerk, loodgieten (as proof), projects | Consideration → convert |
| `/diensten/aanbouw-uitbouw/` | High-commercial: *aanbouw / uitbouw Utrecht* | Extensions | Structural, permits, projects | Consideration → convert |
| `/diensten/opbouw/` | *opbouw Utrecht* / roof extension | Additional storey | Structural, projects | Consideration → convert |
| `/diensten/stucwerk/` | *stucwerk Utrecht* | Plastering | Finishing, projects | Consideration (often entry point) |
| `/interieurbouw/` | Category: *interieurbouw / interieurbouwer Utrecht* | Custom interior building | All maatwerk sub-topics | Orientation → routing |
| `/interieurbouw/maatwerkkasten/` | *maatwerkkasten Utrecht / kasten op maat* | Custom cabinetry | Wandmeubels, interieur op maat | Consideration → convert |
| `/interieurbouw/interieur-op-maat/` | *interieur op maat / maatwerk interieur Utrecht* | Bespoke interior | Kasten, wandmeubels, panelen | Consideration → convert |
| `/interieurbouw/wandmeubels/` | *wandmeubel op maat / TV-meubel* | Wall units / media furniture | Maatwerkkasten | Consideration → convert |
| `/interieurbouw/zakelijke-interieurbouw/` | *zakelijke interieurbouw* (B2B) | Commercial interiors | Office/retail fit-out | B2B consideration |
| `/projecten/` | Proof / navigational | Portfolio of real work | Filter by service/type | Trust-building (all journeys) |
| `/projecten/[slug]/` | Long-tail + proof | Specific case study | Services used, location, result | Trust → convert |
| `/werkwijze/` | *hoe werkt een aannemer / verbouwing proces* (informational) | The Vakvorm process | Coordination, single contact | Trust → convert |
| `/over-vakvorm/` | Brand / trust | Company, rebrand, team | Values, credentials | Trust |
| `/contact/` | Navigational / transactional | Contact & quote | Locations served | Convert |

### 8.3 Keyword cannibalization — the biggest SEO risk here

Because many terms overlap (*verbouwing*, *renovatie*, *woningrenovatie*, *complete
woningrenovatie*), there is a real risk of multiple pages competing for the same query. Mitigations:

- **One page owns one intent.** `renovatie-verbouwing` is the single canonical home for the
  broad renovation cluster (*verbouwing / renovatie / woningrenovatie / complete woningrenovatie*).
  Do **not** spin up separate pages for each near-synonym — consolidate them onto one authoritative
  page with well-structured sections/anchors.
- **Hub vs. spoke discipline.** `/diensten/` (hub) targets the *category*; spokes target *specific*
  intents. The hub must not try to rank for a spoke's exact term.
- **Interieurbouw hub vs. sub-pages:** `/interieurbouw/` owns *interieurbouw (Utrecht)*; sub-pages
  own product-specific intents (*maatwerkkasten*, *wandmeubel op maat*). Keep the hub about the
  discipline, not the products.
- **City terms live on service pages, not separate city pages** (see §13). "aannemer Utrecht" and
  "badkamerrenovatie Utrecht" are satisfied by the relevant service page + local signals + projects,
  not a `/utrecht/` doorway page.

### 8.4 How the non-descriptive brand is compensated

- Service and interieur pages carry the commercial keywords in `<title>`, H1, and body — earned
  honestly through genuinely useful content, not stuffing.
- **Projects supply local + long-tail authority** ("badkamerrenovatie in [wijk], Utrecht") as a
  natural, non-spammy byproduct of real case studies.
- **Off-site**: Google Business Profile, reviews, and citations do the "near me / Utrecht" heavy
  lifting that the brand name cannot.

---

## 9. URL Architecture

**Rules:**

- Lowercase, hyphenated, Dutch, descriptive, stable. No IDs, no dates, no `.html`.
- Trailing-slash convention chosen once and enforced (recommend consistent trailing slash for
  directory-style paths) with redirects for the other form.
- One canonical URL per page; `rel=canonical` self-referencing on all indexable pages.
- Flat where possible; nest only to express genuine hierarchy (pillar → service).

**Canonical structure:**

```
/                                     Home
/diensten/                            Bouw hub
/diensten/renovatie-verbouwing/       Service
/diensten/badkamerrenovatie/          Service
/diensten/aanbouw-uitbouw/            Service
/diensten/opbouw/                     Service
/diensten/stucwerk/                   Service
/interieurbouw/                       Interieur hub (top-level root)
/interieurbouw/maatwerkkasten/        Sub-service
/interieurbouw/interieur-op-maat/     Sub-service
/interieurbouw/wandmeubels/           Sub-service
/interieurbouw/zakelijke-interieurbouw/  Sub-service (later)
/projecten/                           Projects hub
/projecten/[project-slug]/            Case study
/werkwijze/                           Process
/over-vakvorm/                        About
/contact/                             Contact / quote
```

**Deliberately deferred / conditional slugs** (create only when they earn a page — §18):
`/interieurbouw/wandpanelen/`, per-trade pages, city pages.

**Naming caution:** `aanbouw-uitbouw` vs separate `/aanbouw/` and `/uitbouw/`. These are near-
synonyms in Dutch search; **recommend one combined page** to avoid cannibalization, unless keyword
data shows two clearly distinct, high-volume intents **[TO CONFIRM with data]**.

---

## 10. Internal Linking Architecture

A deliberate model, not incidental links:

1. **Hub-and-spoke per pillar.** Pillar hub links down to every service; every service links back up
   to its hub. This concentrates topical authority.
2. **Service ↔ Project (bidirectional proof loop).** Each service links to 2–4 relevant projects;
   each project lists the services it used and links to them. This is the engine that converts
   "proof" into both trust *and* SEO signal.
3. **Sibling cross-sell.** Related services link to each other (badkamerrenovatie ↔ renovatie;
   maatwerkkasten ↔ wandmeubels).
4. **Pillar-to-pillar bridge.** Bouw and Interieur hubs link to each other to surface the combined
   "één partij" journey.
5. **Process as connective tissue.** `/werkwijze/` is linked from every service page and near every
   quote CTA — it is the reassurance layer.
6. **Breadcrumbs everywhere** (Home › Diensten › Badkamerrenovatie), backed by BreadcrumbList
   structured data.
7. **Contextual, in-body links > footer link dumps.** Footer holds a clean sitemap-style set;
   authority flows through in-content links.

**Anti-pattern to avoid:** linking every page to every page ("flat mesh"). Keep the hierarchy legible
to both users and crawlers.

---

## 11. Project Content Architecture

Projects are **structured case studies**, modeled so a template renders any project consistently and
so future filtering/related-content works. The content model (fields) for a Project entity:

| Field | Purpose | Notes |
|---|---|---|
| Title / slug | URL + heading | e.g. "Complete woningrenovatie in [wijk]" |
| Project type | Filtering / schema | renovatie, badkamer, aanbouw, interieur, combi… |
| Location (area/wijk, city) | Local SEO + relevance | Respect client privacy — area, not full address |
| Property type | Context | rijtjeswoning, appartement, kantoor… |
| Services used (relations) | Link to service pages | Powers the proof loop (§10) |
| Scope / objective | Context | What the client wanted |
| Initial situation | Narrative | Before-state |
| Vakvorm approach | Narrative | The coordination story ("één partij" in action) |
| Execution | Narrative | What was done |
| Challenges & solutions | Narrative | Demonstrates competence/trust |
| Duration | Reassurance | Timeline expectation-setting |
| Media set | Proof | before / during / after; hero; detail shots |
| Result | Payoff | Outcome |
| Client review (optional relation) | Social proof | Only if genuinely provided **[no fabrication]** |
| Related services (relations) | Cross-link | |
| Related projects (relations) | Cross-link | |

**Design implications for later:** projects need a **filter/taxonomy** (by pillar, by service, by
type) and a **consistent template**. This is the single strongest argument for a **structured
content model / CMS** rather than hand-coded pages (see §15/§16).

> No example project copy is written here — content comes from real Vakvorm (ex-Persia) projects.

---

## 12. Content / Data Model

Entities the future site needs, with a recommendation on whether each is genuinely required at
launch. Keeping the model lean now avoids over-engineering.

| Entity | Launch? | Rationale |
|---|---|---|
| **Service** | ✅ Core | Pillar-1 spokes; drives commercial SEO. |
| **InterieurService** (or Service with a `pillar` field) | ✅ Core | Model as one `Service` type with a `pillar` enum (`bouw` / `interieur`) rather than two types — simpler, future-proof for the Groep split. |
| **Project** | ✅ Core | Strategic proof; structured per §11. |
| **ProjectCategory / Taxonomy** | ✅ Core | Filtering + relating projects to services. |
| **Testimonial / Review** | ✅ if real ones exist | Only real reviews; can attach to Project or stand alone. **[TO CONFIRM availability]** |
| **FAQ** | ⚠️ Useful, phase 2 | Good for informational SEO + reassurance; not blocking. |
| **TeamMember** | ⚠️ Optional | Strengthens trust/craftsmanship story; depends on whether owner wants faces shown **[TO CONFIRM]**. |
| **ContactDetails / Organization** | ✅ Core | Single source for NAP, powers LocalBusiness schema + footer + contact. |
| **Location / ServiceArea** | ⚠️ Data only, not pages | Model service areas as *data* for schema/relevance; do **not** auto-generate a page per location (§13). |
| **Page (generic)** | ✅ | For About, Werkwijze, legal. |

**Modeling principle:** one flexible `Service` type with a `pillar` discriminator > two rigid types.
It keeps the door open for `Vakvorm Groep` without a migration.

---

## 13. Local SEO Considerations

- **Utrecht first, deep before wide.** Establish authority for Utrecht (service pages + GBP +
  reviews + real Utrecht projects) before any geographic expansion.
- **No doorway city pages.** Do **not** create `/aannemer-nieuwegein/`, `/badkamer-houten/` etc. by
  slug-swapping. This is explicitly forbidden by the brief and is a Google spam risk.
- **Earn location pages, don't manufacture them.** A future page for Nieuwegein/Zeist/Houten etc. is
  justified **only** when backed by *genuine* unique value: real projects there, real reviews, real
  local demand, or meaningful distinct information. Until then, surrounding areas are served by the
  main service pages + GBP proximity + project locations.
- **Google Business Profile is central.** If a Persia GBP already exists, **rename it** (preserve
  reviews/history); if not, create one fresh for Vakvorm — a strong GBP is the highest-leverage local
  signal, especially given zero legacy site authority. **[TO CONFIRM: does a Persia GBP exist?]**
- **NAP consistency** across GBP, site, and citations — single source (`ContactDetails`/`Organization`
  entity) drives it.
- **Projects are the honest local-SEO engine:** a real "aanbouw in Vleuten" case naturally builds
  local relevance without a doorway page.

---

## 14. Brand Transition (no website migration)

**Confirmed: Persia has no website.** There is therefore **no site migration** — no old URL
inventory, no 301 redirect map, no on-site SEO equity, and no Search Console history to preserve.
This removes an entire class of risk and work. It also means one thing to be clear-eyed about:
**SEO begins at zero domain authority.** Rankings will be earned from scratch — there is no
inherited head-start, so early expectations should be set accordingly (see §13/§19-Phase 11).

What *may* still exist off-site under the Persia name — and should be checked, but is lightweight:

- **Google Business Profile.** If one exists for Persia, **rename it to Vakvorm** rather than
  creating a new one, so any existing reviews and history carry over. If none exists, create a fresh
  Vakvorm GBP. **[TO CONFIRM]**
- **Social profiles** (Instagram/Facebook/LinkedIn) under the Persia name — rename/rebrand for
  continuity rather than starting from zero followers. **[TO CONFIRM]**
- **Directory / citation listings** (e.g. business directories) with the old NAP — update to the
  Vakvorm name and details for consistency. **[TO CONFIRM]**
- **Existing brand assets & rights** — logo history, and especially **rights to real project
  photography** from past Persia jobs (these become launch Projects). **[TO CONFIRM]**

None of these block the build; they are a rebrand-continuity checklist, not a migration project.
*(Consolidated in §17.)*

---

## 15. Technical Requirements (what the architecture must support)

These are **requirements**, not a stack choice (stack is deferred to §16):

- **Server-rendered / pre-rendered, fully crawlable, indexable HTML** (SSR or SSG — no
  client-only rendering of primary content). This is non-negotiable for a proof/SEO-led site.
- **Semantic HTML5** and **accessibility (WCAG AA aim)** — also a premium-quality signal.
- **Clean, stable URLs**; correct **HTTP status codes**; **301 redirect** capability.
- **Per-page metadata**: unique titles, meta descriptions, canonical, Open Graph/Twitter.
- **Structured data**: Organization, LocalBusiness, WebSite, BreadcrumbList, and (later)
  Service/Project-appropriate schema — generated from the content model, not hand-written per page.
- **XML sitemap + robots.txt**, auto-generated from the content model.
- **Breadcrumb architecture** (UI + schema).
- **Image pipeline**: responsive images, modern formats (AVIF/WebP), lazy-loading, mandatory alt
  text — *critical* because interieurbouw sells on visual craftsmanship and Projects are image-heavy.
- **Strong Core Web Vitals** (LCP/CLS/INP) — premium feel + ranking factor.
- **Structured content model** for Services/Projects (drives templates, filters, schema, sitemap).
- **Forms** (quote request) with spam protection + reliable delivery/notification.
- **Analytics + Search Console + (later) conversion tracking**, privacy/GDPR-compliant (cookie
  consent, given NL/EU).
- **A content back-end / admin (CMS)** allowing the non-technical Vakvorm team to **add and manage
  Projects** (and ideally Services/testimonials) without touching code — see §16 decision.
  *(No `301`/migration tooling needed — greenfield, per §14.)*

---

## 16. Technical Decisions — CMS locked, stack requirements-driven

**CONFIRMED (owner input):** content will be maintained **by the owner/team, non-technically**, and
the site must include a **back-end/admin where the team can add Projects themselves**. This
**decisively resolves the CMS-vs-code question in favor of a CMS with an editorial admin UI.** The
remaining stack decisions below are now made *around* that fixed point (still requirements-driven, no
preference-picking).

> **One clarification to confirm (§18):** "end-users can add projects" is read here as *the Vakvorm
> team* adding projects via a protected admin — **not** members of the public submitting projects on
> the live site. Confirm this interpretation; public/self-service submission would be a very
> different (and unusual for this business) feature.

| Decision | Driving requirement | Direction |
|---|---|---|
| **Content management** | Non-technical team must add/edit **Projects** (and Services/testimonials) via an admin | **CMS with editorial admin UI — LOCKED.** Choose between *headless CMS + framework front-end* vs *integrated CMS*. Recommend **headless CMS** so the front-end stays fast/SSG and SEO-clean while editors get a friendly admin. Final CMS product chosen in Phase 2. |
| **Rendering strategy** | Crawlable, fast, image-heavy, proof-led content | **SSG / hybrid SSR+SSG** (not SPA). Content changes in the CMS trigger rebuilds or on-demand revalidation. |
| **Framework** | SSR/SSG + first-class image handling + component reuse + clean CMS integration | Decide in Phase 2 against these requirements + chosen CMS — **not** by preference. |
| **Image pipeline / DAM** | High-volume, high-quality project imagery, CWV; editors upload images | CMS-integrated media handling + build/CDN image optimization (AVIF/WebP, responsive). Editor upload UX matters since the team manages media. |
| **Hosting / deployment** | Fast delivery, easy deploys, CMS webhooks → rebuild, EU data preference | Static/edge host with CMS-webhook deploys; prefer EU hosting for GDPR optics. **[TO CONFIRM: EU-hosting preference]** |
| **Forms backend** | Reliable quote delivery, spam protection, GDPR | **CONFIRMED: leads go by email** to `alireza_taheri92@hotmail.com` *(temporary — "for now")*, with **phone `06 42241075`** shown as a direct contact. → Server-side form handler emailing the inbox + spam protection; no CRM at launch. (Recommend a Vakvorm-branded email later.) |
| **Analytics** | Insight without harming premium feel / privacy | Privacy-friendly analytics vs GA4; cookie-consent implications (NL/EU). |
| **Schema/sitemap generation** | Automatic from CMS content | Framework-native or library, fed by the content model. |
| **Language** | Reach vs simplicity | **CONFIRMED: NL-only.** No i18n layer needed — single-locale URL/content architecture. Simplifies the build. |

*(Redirect-management row removed — no migration, per §14.)*

---

## 17. Brand-Transition & Asset Checklist (no site migration)

There is **no website to inspect, crawl, or redirect** (§14). What remains is a light rebrand-
continuity and asset-gathering checklist — none of it blocks the build:

**Rebrand continuity (do these to avoid losing existing goodwill):**
- [ ] **Google Business Profile** — does a Persia GBP exist? If yes, **rename to Vakvorm** (keep
      reviews/history); if no, create a fresh Vakvorm GBP. **[TO CONFIRM]**
- [ ] **Social profiles** (Instagram/Facebook/LinkedIn) under Persia — rename/rebrand for continuity.
      **[TO CONFIRM]**
- [ ] **Directory / citation listings** with the old NAP — update to Vakvorm.

**Assets to gather for the new build (these become site content):**
- [ ] **~5 real launch projects** — photos + basic facts for structured case studies (confirmed
      available).
- [ ] **Project photography rights** — confirm we may publish images from past jobs.
- [ ] **Real client reviews/testimonials**, if any exist. **[TO CONFIRM]**
- [ ] **Real credentials** — KvK/BTW, insurance, guarantees, memberships, certifications — only what
      genuinely exists (no fabrication). **[TO CONFIRM]**
- [ ] **Brand assets** — new Vakvorm logo, colors, fonts (or note these are still to be created).
- [ ] **NAP** — the single Organization source. Known so far: **email
      `alireza_taheri92@hotmail.com`** *(temporary)*, **phone `06 42241075`**. Still needed: the
      **business address** to publish (or confirm Utrecht service-area only, no public address) and a
      future Vakvorm-branded email. **[TO CONFIRM: address]**

**Domain:** choose/confirm the new Vakvorm domain and who controls DNS. **[TO CONFIRM]**

---

## 18. Prioritized Questions for You

**✅ All Tier-1 blockers resolved (owner input):**
- ~~Persia website / migration~~ → **no website exists** — greenfield, no migration (§14).
- ~~Who maintains content~~ → **owner/team, non-technically, via an admin back-end** → **CMS locked**
  (§16).
- ~~Real launch proof~~ → **~5 real projects** to start (§11/§17).
- ~~Nav: two-pillar vs dropdown~~ → **single "Diensten" dropdown** decided (§7.3).
- ~~Language scope~~ → **NL-only** — no i18n layer (§16).
- ~~Lead destination + contact channels~~ → **email** (`alireza_taheri92@hotmail.com`, temporary)
  **+ phone** (`06 42241075`); no CRM at launch (§16/§17).
- ~~"Add projects" interpretation~~ → **confirmed: team admin**, not public submission (§16).

**Tier 2 — Important (needed early in the build, not blocking start):**

4. **Real credentials/guarantees** that genuinely exist (KvK/BTW, insurance, guarantees,
   memberships, certifications) — which may we display? (No fabrication.)
5. **Team & faces:** show team members/founder (strong trust signal), or stay company-anonymous?
6. **GBP / social continuity:** does a Persia Google Business Profile or social presence exist to
   rename, or do we start fresh? (§17)
7. **Commercial / zakelijke interieurbouw:** real demand and references now, or a later phase?
8. **Brand assets & domain:** is there a finished Vakvorm logo/visual identity, and is the new
   domain chosen? (If identity isn't ready, a mini brand step precedes the design system.)

**Tier 3 — Can be decided during build:**

9. Exact launch scope of interieurbouw sub-pages (wandpanelen? wandmeubels?) — pending demand.
10. Whether `aanbouw` and `uitbouw` should be one page or two (pending keyword data).
11. Professional project photography — budgeted? (Quality is decisive for interieurbouw.)
12. Keyword research — do you have market data, or should we scope it as a Phase-1 task?
    (Reminder: with no legacy site, there is no historical search data to reuse.)

---

## 19. Proposed Implementation Phases

An improved sequence (SEO woven throughout, not bolted on). No migration phase is needed —
greenfield — so effort shifts to content, proof and earning authority from zero.

| # | Phase | Purpose / key outputs |
|---|---|---|
| 0 | **Discovery** *(this document)* | Shared understanding, IA, key decisions locked. |
| 1 | **Foundation research & assets** | Fresh keyword research (no legacy data), real-asset gathering (the ~5 projects + photos + rights, credentials, reviews), NAP, brand assets. |
| 2 | **Architecture lock** | Final IA, URL map, content model, schema plan; **CMS product + framework + hosting chosen** (§16). |
| 3 | **Design system** | Brand-aligned, premium, accessible components & tokens (calm, craftsmanship-forward). Precede with a mini brand step if identity isn't ready. |
| 4 | **Technical foundation** | Framework + **CMS/admin** setup, content model implemented, SEO plumbing (metadata, sitemap, robots, schema), image pipeline, analytics/GSC. |
| 5 | **Core pages** | Home, Diensten hub, service pages, Interieurbouw hub + sub-pages, Werkwijze, Over, Contact. |
| 6 | **Projects** | Project template, taxonomy/filters, the ~5 real case studies, **admin/back-end for the team to add projects**, proof-loop internal linking. |
| 7 | **SEO finalization** | On-page (titles/meta/headings), internal-linking pass, structured data validation, sitemap, cannibalization check. |
| 8 | **Analytics & conversion** | Goal/conversion tracking, form flows (email/WhatsApp/CRM), consent. |
| 9 | **QA** | Accessibility, Core Web Vitals, cross-device, crawlability, status codes, Dutch content proofreading, CMS-editor UX check. |
| 10 | **Launch** | New Vakvorm domain live, GBP set up/renamed, sitemap submitted to GSC, index checks. |
| 11 | **Post-launch growth** | Build authority from zero: GSC monitoring, reviews acquisition, expand content clusters, add projects via CMS, earn location/B2B pages when justified. |

---

## 20. Definition of Ready for the Build

**All build-blocking items satisfied:**
- [x] No migration — greenfield confirmed (§14).
- [x] Content maintainer decided → **CMS with admin back-end** (§16).
- [x] Launch proof confirmed → **~5 real projects** (§11/§17).
- [x] Nav model decided → **single "Diensten" dropdown**; `/interieurbouw/` top-level root (§6.2/§7.3).
- [x] Language scope → **NL-only** (§16).
- [x] Lead flow → **email + phone**, no CRM at launch (§16/§17).
- [x] "Add projects" → **team admin** confirmed (§16).

**To be signed off at the start of the build (Phase 2 — part of the build, not blockers to start):**
- [ ] Final IA + URL map + content model.
- [ ] CMS product + framework + hosting chosen against requirements — explained, not defaulted.

**To be gathered during Phase 1 (asset gathering, not blockers to start):**
- [ ] Real, displayable credentials/guarantees (Tier-2, no fabrication).
- [ ] Business address decision, brand assets/logo, and the new domain.

Tier-2 items should be resolved before their relevant phase; Tier-3 items may be resolved during the
build.

---

## Risks & Anti-Patterns (cross-reference — the guardrails)

*(Consolidated here as required by the task's Step 2, referenced throughout.)*

**Strategic risks**
- Positioning drift toward "handyman/klusbedrijf" via generic, list-of-trades content.
- Interieurbouw treated as a sub-service — flattening a co-equal pillar.
- "Premium" misread as "cold/inaccessible," losing the approachable quality.
- Launching with too little *real* proof (projects/reviews) to be credible at €50k–€250k.

**SEO risks**
- **Keyword cannibalization** across renovatie/verbouwing synonyms and hub-vs-spoke overlap (§8.3).
- **Thin/doorway city pages** — explicitly forbidden; spam risk (§13).
- **Per-trade thin pages** fragmenting authority and hurting positioning (§6.3).
- **Migration equity loss** from blanket redirects, GBP recreation, or ignoring backlinks (§14).
- Over-optimizing the brand/hero with exact-match keywords, cheapening the premium feel.

**UX risks**
- Mega-menu bloat breaking the calm, premium nav.
- Projects reduced to a generic gallery instead of structured, filterable case studies.
- Aggressive lead-gen patterns (pop-ups, hard sells) undermining trust.
- Missing/weak **Werkwijze** page, leaving the "one partner coordinates everything" promise unproven.

**Technical unknowns / risks**
- Choosing a framework/hosting before the CMS product is chosen to fit the locked CMS decision.
- A CMS/admin whose editor UX is too technical for a non-technical team to add projects comfortably.
- Client-side rendering harming crawlability and CWV on a proof/SEO-led site.
- Unmanaged image weight killing Core Web Vitals on an image-heavy interior site.
- GDPR/consent handling for forms and analytics in the NL/EU context.

**Greenfield-specific risk**
- **Zero starting authority.** No legacy site means no inherited rankings/backlinks — set realistic
  expectations that organic visibility is earned over months via content, projects, GBP and reviews.

**Anti-patterns to explicitly avoid**
- Slug-swap SEO pages; auto-generated location pages; page-per-trade; fabricated
  reviews/projects/certifications/facts; mega-menus; picking tech by preference.

---

## Deviations from the Brief's Provisional Structure (flagged for approval)

1. **Interieurbouw at `/interieurbouw/` (top-level root), not under `/diensten/`** — to encode
   co-equal pillar status, build a clean topical hub, and future-proof the Groep split. (§6.2)
   *Recommended; proceeding on this basis unless you object.*
2. **`aanbouw` + `uitbouw` recommended as one combined page** unless keyword data proves two distinct
   intents. (§9)
3. **Per-trade services and city pages deliberately NOT created** at launch — described within
   services / earned later with real value. (§6.3, §13)

**Decisions locked:** greenfield (no migration); **CMS with admin back-end**; **single "Diensten"
dropdown** nav; **~5 real launch projects**; **NL-only**; **email + phone** contact (no CRM).

---

# BUILD STATUS: READY

*All strategically important questions are answered and the architecture is locked.* Confirmed:
greenfield (no migration), **CMS/admin** content management with a team-facing project editor,
**~5 real launch projects**, **single "Diensten" dropdown** navigation with `/interieurbouw/` as a
top-level URL root, **NL-only** (no i18n layer), and **email + phone** as the contact/lead channel
(no CRM at launch).

**Green-lit to proceed to the build, starting with:**
- **Phase 1 — Foundation research & assets:** fresh NL keyword research (no legacy data exists),
  gather the ~5 projects + photo rights, real credentials, business address, brand assets, domain.
- **Phase 2 — Architecture lock:** finalize IA/URL map/content model and choose CMS product +
  framework + hosting against the §15/§16 requirements (headless-CMS + SSG/SSR direction).

**Non-blocking items still to collect** (Phase 1, no fabrication): real credentials/guarantees,
team-faces decision, GBP/social continuity, business address, logo/identity, and the domain. None of
these stop the build from starting; they feed the phases as they come up.

> Per the discovery constraint, no production code, copy, or design is produced yet. **Awaiting your
> explicit go-ahead to begin Phase 1** — say the word and I'll start.
