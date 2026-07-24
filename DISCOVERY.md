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

**Open question:** should **Interieurbouw** be its own top-level nav item (rather than living inside
the Diensten dropdown)? Given it is a co-equal pillar, a strong case exists for:

```
Home | Bouw & Renovatie ▾ | Interieurbouw ▾ | Projecten | Werkwijze | Over | [Offerte]
```

This makes the dual-pillar positioning unmissable and is arguably *more* premium and clearer. The
trade-off is a slightly busier header. **This is a genuine strategic choice — raised in §18 for the
owner to decide.** My provisional recommendation leans toward the two-pillar nav *if* interieurbouw
has enough launch content to justify a top-level slot; otherwise start with the grouped-dropdown
version and promote interieurbouw to top-level when its cluster matures.

---

## 8. SEO Architecture

### 8.1 Strategy in one line

Win commercial rankings through **topical authority + genuine intent pages + local proof
(projects/reviews)**, never through thin slug-swapped city pages — and never at the cost of the
premium brand feel.

### 8.2 Page-type → intent mapping

> Search **volumes are deliberately omitted** — no keyword data has been supplied. Intent labels are
> qualitative. Actual prioritization requires real keyword/GSC data (see §14/§18).

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

> No example project copy is written here — content comes from real Vakvorm/Persia projects.

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
- **Google Business Profile is central** and must be handled carefully during the rebrand (rename,
  not recreate — see §14) to preserve reviews and history.
- **NAP consistency** across GBP, site, and citations — single source (`ContactDetails`/`Organization`
  entity) drives it.
- **Projects are the honest local-SEO engine:** a real "aanbouw in Vleuten" case naturally builds
  local relevance without a doorway page.

---

## 14. Migration Considerations (Persia Bouwbedrijf → Vakvorm)

**This is a rebrand of a live business — the old site likely has SEO equity that must be
preserved, not discarded.** No Persia domain/URL has been supplied yet, so the first migration task
is *inventory* **[TO CONFIRM: domain(s), CMS, hosting, GSC/GBP access]**.

**Migration principles:**

- Assume the old site **has** ranking/backlink value until proven otherwise.
- Every old URL with value gets a **page-level 301** to its closest Vakvorm equivalent (not a blanket
  redirect to the homepage — that destroys equity).
- **Preserve, don't recreate** the Google Business Profile — *rename* it so reviews and history carry
  over.
- Plan the brand-name transition (Persia → Vakvorm) across GBP, citations, backlinks (request updates
  where feasible), and structured data.
- Monitor in Search Console before/during/after (indexation, rankings, 404s, redirect health).

*(Full pre-replacement inspection checklist in §17.)*

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
- **Redirect + migration tooling** to execute the Persia → Vakvorm 301 map.

---

## 16. Open Technical Decisions (requirements-driven, not yet decided)

Each is framed by the requirement that drives it. **No stack is chosen in discovery** — these are the
decisions to make at the start of the build phase, informed by the answers in §18.

| Decision | Driving requirement | Options / considerations |
|---|---|---|
| **Rendering strategy** | Crawlable, fast, image-heavy, mostly-static content | SSG or hybrid SSR/SSG strongly indicated over SPA. |
| **Framework** | SSR/SSG + strong image handling + component reuse | Decide *after* CMS + who maintains the site. Do not pick for preference. |
| **CMS vs. code-managed content** | Owner must add **projects** regularly; structured model needed | The recurring, structured, non-technical **Projects** requirement pushes toward a CMS (headless or integrated). Code-managed only viable if a developer maintains content indefinitely **[TO CONFIRM who edits content]**. |
| **Image pipeline / DAM** | High-volume, high-quality project imagery, CWV | Build-time optimization vs. image CDN/service. |
| **Hosting / deployment** | Fast global-ish delivery, easy deploys, EU data preference | Static/edge hosting vs. managed platform; consider EU hosting for GDPR optics **[TO CONFIRM]**. |
| **Forms backend** | Reliable quote delivery, spam protection, GDPR | Native handler vs. form service; where do leads go (email/CRM/WhatsApp)? **[TO CONFIRM]** |
| **Analytics** | Insight without harming premium feel / privacy | Privacy-friendly analytics vs. GA4; cookie-consent implications. |
| **Schema/sitemap generation** | Must be automatic from content model | Framework-native or library. |
| **Redirect management** | Execute Persia 301 map | Platform-level redirects preferred. |
| **Multilingual?** | Is EN needed (expats/commercial)? | Default **NL-only** at launch unless told otherwise **[TO CONFIRM]** — affects URL/i18n architecture, so decide early. |

---

## 17. Migration Analysis — Pre-Replacement Inspection Checklist

Before the Persia site is replaced, **collect and inspect**:

- [ ] **Domain(s)** in use (root + any subdomains/microsites); who controls DNS/registrar.
- [ ] **Full URL inventory** (crawl the live site) — every indexable page.
- [ ] **Current CMS / hosting / tech stack** of the Persia site.
- [ ] **Google Search Console** access + export: top pages, top queries, impressions/clicks,
      current rankings, coverage/indexation, existing sitemaps.
- [ ] **Google Analytics** (if any): top landing pages, traffic sources, conversions.
- [ ] **Backlink profile** (which domains link to Persia, to which URLs) — what equity exists.
- [ ] **Google Business Profile**: ownership/access, category, reviews, photos, NAP, posts —
      plan a **rename** (preserve), not a new profile.
- [ ] **Business citations / directories** (where Persia's NAP appears) for later updates.
- [ ] **Existing rankings** for the target commercial terms (baseline).
- [ ] **Content worth salvaging**: real projects, reviews, testimonials, photos, credentials.
- [ ] **Existing assets**: logo/brand assets, real project photography rights, any certifications.
- [ ] **Current forms/lead flow**: where do inquiries currently go?
- [ ] **Legal pages** currently published (privacy, terms, KvK/BTW numbers).
- [ ] **Social profiles** and their naming (for consistent rebrand).
- [ ] **Any structured data / rich results** currently earned.

Output of this step → an **old→new URL redirect map** and a preserved-equity plan.

---

## 18. Prioritized Questions for You

**Tier 1 — Blocking (build cannot responsibly start without these):**

1. **Persia website & data access.** What is the current domain? Can we get Google Search Console,
   Analytics, and Google Business Profile access? (Determines the entire migration/SEO-preservation
   plan.)
2. **Who maintains content after launch?** Will you (non-technical) need to add projects yourself, or
   will a developer? (This is the single biggest driver of the CMS-vs-code decision in §16.)
3. **Real proof available at launch.** How many *real, photographed* projects can we publish, and are
   there *real* client reviews we may use? (Determines whether Projects can carry their strategic
   load at launch or must grow over time — and whether the site can credibly launch at all.)
4. **Interieurbouw as top-level pillar (§7.2).** Do you want Bouw & Interieur as two separate
   top-level nav items, or one grouped "Diensten" dropdown at launch? (Affects nav + IA.)
5. **Approve the `/interieurbouw/` top-level URL root (§6.2)** instead of nesting it under
   `/diensten/`. (Structural, hard to change later.)

**Tier 2 — Important (needed early in the build):**

6. **Language:** NL-only at launch, or is English needed (expats / commercial clients)?
7. **Lead destination:** where should quote requests go — email, WhatsApp, a CRM? Do you want
   WhatsApp and/or phone as primary contact channels?
8. **Commercial / zakelijke interieurbouw:** real demand and references now, or a later phase?
9. **Team & faces:** do you want team members/founder shown (strong trust signal), or stay
   company-anonymous?
10. **Credentials/guarantees** that are *real* (KvK, insurances, guarantees, memberships,
    certifications) — which exist and may we display? (No fabrication.)

**Tier 3 — Can be decided during build:**

11. Exact launch scope of interieurbouw sub-pages (wandpanelen? wandmeubels?) — pending demand.
12. Whether `aanbouw` and `uitbouw` should be one page or two (pending keyword data).
13. Photography plan — is professional project photography budgeted? (Quality is the whole game for
    interieurbouw.)
14. Do you have real keyword/market data, or should keyword research be a scoped task in Phase 1?

---

## 19. Proposed Implementation Phases

An improved sequence (with SEO/migration woven throughout, not bolted on):

| # | Phase | Purpose / key outputs |
|---|---|---|
| 0 | **Discovery** *(this document)* | Shared understanding, IA, questions answered. |
| 1 | **Foundation research** | Keyword research (if no data), Persia audit + URL inventory + redirect map, GBP/GSC access, real-asset inventory (projects/reviews/credentials). |
| 2 | **Architecture lock** | Final IA, URL map, content model, schema plan, tech decisions made (§16). |
| 3 | **Design system** | Brand-aligned, premium, accessible components & tokens (calm, craftsmanship-forward). |
| 4 | **Technical foundation** | Framework/CMS setup, content model implemented, SEO plumbing (metadata, sitemap, robots, schema, redirects), image pipeline, analytics/GSC. |
| 5 | **Core pages** | Home, Diensten hub, service pages, Interieurbouw hub + sub-pages, Werkwijze, Over, Contact. |
| 6 | **Projects** | Project template, taxonomy/filters, first batch of *real* case studies, proof-loop internal linking. |
| 7 | **SEO finalization** | On-page (titles/meta/headings), internal-linking pass, structured data validation, sitemap, cannibalization check. |
| 8 | **Analytics & conversion** | Goal/conversion tracking, form flows (email/WhatsApp/CRM), consent. |
| 9 | **QA** | Accessibility, Core Web Vitals, cross-device, crawlability, status codes, redirect testing, content proofreading (Dutch). |
| 10 | **Migration & launch** | Execute 301 map, GBP rename, sitemap submission, DNS cutover, robots/index checks. |
| 11 | **Post-launch monitoring** | GSC monitoring (indexation, 404s, rankings), reviews acquisition, iterate on content clusters, plan earned location/B2B pages. |

---

## 20. Definition of Ready for the Build

The build may start only when **all Tier-1 questions (§18) are answered** and:

- [ ] Persia domain identified; GSC / Analytics / GBP access obtained (or explicitly unavailable).
- [ ] URL inventory + old→new redirect map drafted (Phase 1).
- [ ] Content maintainer decided → CMS-vs-code decision made.
- [ ] Confirmed count of **real** launch projects + reviews (proof plan is viable).
- [ ] Nav model chosen (two-pillar vs grouped dropdown) and `/interieurbouw/` root approved.
- [ ] Language scope (NL / NL+EN) fixed.
- [ ] Lead-flow destination(s) chosen.
- [ ] Real, displayable credentials/guarantees confirmed (no fabrication).
- [ ] Final IA + URL map + content model signed off (Phase 2).
- [ ] Tech stack decisions (§16) made against requirements — and explained, not defaulted.

Tier-2 items should be answered before their relevant phase; Tier-3 items may be resolved during the
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
- Choosing a stack before the content-maintenance and CMS questions are answered.
- Client-side rendering harming crawlability and CWV on a proof/SEO-led site.
- Unmanaged image weight killing Core Web Vitals on an image-heavy interior site.
- GDPR/consent handling for forms and analytics in the NL/EU context.

**Anti-patterns to explicitly avoid**
- Slug-swap SEO pages; auto-generated location pages; page-per-trade; homepage-only redirects;
  fabricated reviews/projects/certifications/facts; mega-menus; picking tech by preference.

---

## Deviations from the Brief's Provisional Structure (flagged for approval)

1. **Interieurbouw at `/interieurbouw/` (top-level root), not under `/diensten/`** — to encode
   co-equal pillar status, build a clean topical hub, and future-proof the Groep split. (§6.2, §18-Q5)
2. **Optional two-pillar top navigation** (Bouw & Renovatie ▾ | Interieurbouw ▾) as an alternative to
   the single Diensten dropdown — presented as an owner decision. (§7.2, §18-Q4)
3. **`aanbouw` + `uitbouw` recommended as one combined page** unless keyword data proves two distinct
   intents. (§9)
4. **Per-trade services and city pages deliberately NOT created** at launch — described within
   services / earned later with real value. (§6.3, §13)

---

# BUILD STATUS: NOT READY

*Reason:* The strategically important **Tier-1 questions in §18 are unanswered** — specifically
Persia site/data access and migration equity, who maintains content (CMS-vs-code), the volume of
**real** launch proof (projects/reviews), the navigation/pillar decisions, and confirmation of the
`/interieurbouw/` root. Until these are resolved, starting the build would mean guessing on
decisions that are expensive to reverse. Answer the Tier-1 questions and the build can proceed to
Phase 1 (Foundation research).
