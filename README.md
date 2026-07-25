# VAKVORM — Bouw & Interieur

Public website for Vakvorm, a premium construction & interior company in Utrecht.
One professional partner for complete bouw-, renovatie- and maatwerk interieur projects.

## Stack

- **Next.js (App Router) + TypeScript**, React Server Components
- **Custom CSS architecture** (CSS Modules + design tokens) — deliberately no Tailwind/
  shadcn/component-library visual system
- Self-hosted fonts (Bricolage Grotesque + Archivo) via `next/font`
- **Sanity** content studio in `/sanity` (see its README to provision)
- SEO built in: metadata, canonical, sitemap, robots, JSON-LD, breadcrumbs

Art direction and rules: **[`/docs/visual-direction.md`](docs/visual-direction.md)**.
Strategy & architecture: **[`/DISCOVERY.md`](DISCOVERY.md)**.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

## Content

The site currently reads typed seed data from `src/lib/*` (so it runs before Sanity is
provisioned). All project/testimonial surfaces render honest placeholders until real
content is added — nothing is fabricated. To go live on the CMS, follow
[`/sanity/README.md`](sanity/README.md).

## Environment

Copy `.env.example` → `.env.local` and fill in as services are provisioned (Resend for
the contact form; Sanity for content). See comments in `.env.example`.

## Project structure

```
src/
  app/            routes (home, diensten, interieurbouw, projecten, werkwijze, over, contact, legal)
  components/
    chrome/       header, footer
    primitives/   SectionMarker (datum line), ProjectMedia, Breadcrumbs, Reveal
    sections/     ServiceIndex, ContactPanel, ContactForm
    pages/        ServicePageView (shared service template)
    seo/          JSON-LD (Organization, LocalBusiness, WebSite, BreadcrumbList)
  lib/            site settings, services, projects, types, fonts, inquiry action
sanity/           content studio (config + schemas)
docs/             visual-direction.md
```
