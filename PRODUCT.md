# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

In order of importance (confirmed by the owner):

1. **Homeowners renovating** — particulieren planning a verbouw, renovatie, badkamerrenovatie, aanbouw/uitbouw, opbouw or stucwerk. They are comparing contractors, often on a phone, and need to trust that one party can plan, coordinate and finish the job properly.
2. **New-build buyers** — people who have just received, or will soon receive, the keys to a bare (casco) nieuwbouwwoning and need it finished: meer- en minderwerk, design, afbouw, bathroom and kitchen, custom interior, handover. Their deadline is the key date.
3. **Custom interior clients** — people looking mainly for maatwerkkasten, wandmeubels or a complete interior made to measure.

Business clients (developers, property owners, architects) are not a primary audience for the website.

Service area: Utrecht, Rotterdam, Amsterdam and the rest of the Netherlands.

## Product Purpose

The website of Nederdam Bouw (brand: NEDERDAM — Bouw & Interieur), a Dutch contractor that also makes custom interiors. Its job is to turn the right visitors into qualified project requests: through the step-by-step project intake (`/start-uw-project`), the contact form, or a phone call. Success is more well-described, relevant project requests from the three audiences above, and being found in search for the services and cities Nederdam works in.

## Positioning

- **One party for bouw and interieur.** Nederdam handles the building side and the interior as one project: one point of contact, one quote, one planning.
- **Own people, a fixed network, and an own workshop.** Much is done by Nederdam's own craftsmen; specialisms (e.g. floor layers, paperhangers) come from a fixed network of trusted specialists; custom interior is made in Nederdam's own workshop (eigen werkplaats).
- **The client chooses the scope.** Especially for nieuwbouw: only measuring and handover belong to every project; every other step can be taken or left. No package pressure.

## Operating Context

- Visitors research and compare online, frequently on mobile, before calling or sending a request.
- Routes: home, Bouw and Interieur discipline pages with service pages, Projecten, Werkwijze, Kennisbank, Werkgebied (+ Utrecht, Rotterdam, Amsterdam), Over ons, Contact, the project intake, privacy and terms.
- **Nieuwbouw afwerken is a service under Bouw** (owner, 2026-10-31), reached via Bouw and via the combined Bouw + Interieur path. There is no separate nieuwbouw route or route builder.
- Contact: info@nederdambouw.nl, 06 42241075. No public address until confirmed.
- Project requests are sent by e-mail (Resend); they are not stored in the CMS.

## Capabilities and Constraints

- Stack: Next.js 15 App Router, React 19, TypeScript, CSS Modules with global tokens; Sanity CMS optional (falls back to local data); hosted on Vercel.
- Services — Bouw: renovatie & verbouwing, badkamerrenovatie, aanbouw & uitbouw, opbouw, stucwerk; nieuwbouw afwerken. Interieur: maatwerkkasten, wandmeubels, interieur op maat.
- Project intake: no budget question; uploads validated server-side; no personal data in URLs or analytics; no provider credentials in the browser.
- Existing SEO must be preserved: titles, descriptions, canonicals, sitemap, JSON-LD (Organization, GeneralContractor per city, Service, FAQPage), city pages.
- Work happens on branch `claude/vakvorm-discovery-architecture-rbcju2`; changes reach `main` only when the owner asks.

## Brand Commitments

- **Logo:** only the supplied files in `public/brand/`, rendered through `src/components/chrome/Logo.tsx`. Never redrawn, approximated or recoloured.
- **The KADER huisstijl is binding** (owner, 2026-10-31; supersedes the earlier "only the logo is binding" round): `docs/huisstijl.md` and CLAUDE.md lead. Bronze #B08B6F marks Nederdam Bouw, olive #4A5A46 marks Nederdam Interieur, charcoal #0E0E0E for type, warm paper as ground, stone and taupe in support. No new trendy colours.
- Two disciplines under one name: Nederdam Bouw and Nederdam Interieur are distinct entrances; Bouw + Interieur together is the combined path.
- Rejected (owner feedback): dark/charcoal-heavy pages; thin or light display type; black block buttons; pills; prices anywhere; and the generic AI "premium architecture/interior" UI layer: three-column mega menus with brand copy + links + lifestyle image, micro-labels, spaced uppercase, decorative coloured squares and arrows, underlined links as decoration, explanatory micro-captions, architecture-style metadata that says nothing, and premium-by-beige surfaces.
- Wanted: navigation and pages that feel calm, established, architectural, direct and specific to Nederdam; stronger composition and less UI; colour from real photography, materials, Bouw bronze and Interieur olive.
- Primary action everywhere: "Start uw project"; secondary: call 06 42241075.
- Voice: short, sure, restrained; the client is "u", the company is "we"; no superlatives, emoji or exclamation marks. Fixed lines from the board: *Eén merk. Twee disciplines.* · *Ruimte maakt mogelijk.* · *Van idee tot leefbare werkelijkheid.* · *Van fundering tot afwerking.* · *De juiste dingen duurzaam goed doen.*

## Evidence on Hand

- Confirmed facts: erkend bouwbedrijf (certification name and logo not yet supplied), verzekerd (cover not yet specified), garantie op het werk (terms not yet supplied), eigen werkplaats.
- Real project photos, case details and customer reviews: **promised by the owner, not yet supplied.**
- Until they arrive, missing content is a clearly marked development placeholder ("Placeholder: … volgt"); no sample reviews, invented projects, numbers, durations or certifications. Stock images used in design studies carry a "Studiebeeld" tag and are never presented as Nederdam work. Whether placeholders are hidden or shown on production is still open (CLAUDE.md currently says hidden).
- Hero video: temporary Pexels stock, not Nederdam work (`docs/video-sources.md`).
- Missing items are tracked in `docs/content-status.md`.

## Product Principles

1. **Proof over promise.** Real work, real places and real reviews carry the persuasion; the site never claims what it cannot show.
2. **One party, made tangible.** Every page makes "one point of contact for bouw and interieur" concrete, not a slogan.
3. **The client sets the scope.** Show what is possible without implying everything is required.
4. **Easy to act at any moment.** Calling, requesting and the intake are always one step away, on every device.
5. **Findable where we work.** Each service and city has a page worth ranking, with honest local content.

## Accessibility & Inclusion

WCAG 2.2 AA as the minimum: contrast, semantic headings and landmarks, keyboard navigation with visible focus, reduced-motion support, alt text, 44px touch targets.
