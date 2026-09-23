# Nederdam Bouw — Bouw & Interieur

Public website for Nederdam Bouw, a premium construction & interior company in Utrecht.
One professional partner for complete bouw-, renovatie- and maatwerk interieur projects.

## Stack

- **Next.js (App Router) + TypeScript**, React Server Components
- **Custom CSS architecture** (CSS Modules + design tokens) — deliberately no Tailwind/
  shadcn/component-library visual system
- Font (Hanken Grotesk, standing in for Söhne) via `next/font`
- **Sanity** content studio in `/sanity` (see its README to provision)
- SEO built in: metadata, canonical, sitemap, robots, JSON-LD, breadcrumbs

Brand identity and rules: **[`/docs/brand-identity.md`](docs/brand-identity.md)**.
Strategy & architecture: **[`/DISCOVERY.md`](DISCOVERY.md)**.

## Run it locally

Requires **Node 20 or newer** (`node -v` to check; install from [nodejs.org](https://nodejs.org)
if missing) and git. No `.env` file is needed to view the site — without one it runs on the
local seed content and still builds.

**Windows (PowerShell)** — run each line separately. Do not clone into `C:\Windows\System32`;
start from a folder you own:

```powershell
cd $HOME\Desktop
git clone https://github.com/alirezataheri1992a-lab/VAKVORM.git
cd VAKVORM
git checkout claude/vakvorm-discovery-architecture-rbcju2
npm install
npm run dev
```

**macOS / Linux**

```bash
cd ~/Desktop
git clone https://github.com/alirezataheri1992a-lab/VAKVORM.git
cd VAKVORM
git checkout claude/vakvorm-discovery-architecture-rbcju2
npm install
npm run dev
```

Wait for `✓ Ready`, then open **http://localhost:3000** (plain `http`, not `https`). The
terminal has to stay open — closing it or pressing Ctrl+C stops the server. If port 3000 is
taken, Next picks 3001 and prints the actual port.

Already have a clone? `git pull origin claude/vakvorm-discovery-architecture-rbcju2 && npm install && npm run dev`.

## Scripts

```bash
npm run dev        # dev server, hot reload, http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
```

In `npm run dev` the guided project intake at `/start-uw-project` runs through to its final
screen and logs the submission to the terminal instead of emailing it — no mail provider
needed to click through the whole journey.

## Deploy

Putting the site on a real URL, and the branch-per-preview workflow that goes with it:
[`/docs/deploy.md`](docs/deploy.md).

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
  app/            routes (home, bouw, interieur, projecten, werkwijze, over-ons, contact, start-uw-project, legal)
  components/
    chrome/       Logo, header, footer, scroll reveal
    primitives/   SectionMarker (datum line), ProjectMedia, Breadcrumbs, Reveal
    sections/     ServiceIndex, ContactPanel, ContactForm
    pages/        DisciplineView (Bouw / Interieur), ServicePageView (service template)
    seo/          JSON-LD (Organization, LocalBusiness, WebSite, BreadcrumbList)
  lib/            site settings, services, projects, types, fonts, inquiry action
sanity/           content studio (config + schemas)
docs/             brand-identity.md, deploy.md, cms-architecture.md, project-journey.md, …
```
