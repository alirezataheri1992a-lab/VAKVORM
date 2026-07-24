# VAKVORM — CMS Architecture (Sanity integration)

How the website gets its content, how VAKVORM edits it without code, and how published
changes reach the live site. The **visual system is unchanged** by this integration — only
the *source* of the content moved.

---

## 1. One data layer, two sources

Every page imports content from a single module: **`src/lib/content.ts`**. No page reads
raw seed files anymore. `content.ts` decides where the data comes from:

```
Page / component
      │  (await get… )
      ▼
src/lib/content.ts  ──►  Sanity configured?  ──► yes ─►  Sanity (published only)
                                             └────────── no ──►  local seed (src/lib/*)
```

- **Sanity is "configured"** when `NEXT_PUBLIC_SANITY_PROJECT_ID` is set (see `env.ts`).
- **When it is not set** (e.g. before the Studio is provisioned), the site falls back to
  typed development seed data in `src/lib/services.ts`, `projects.ts`, `site.ts`, so it
  always builds and renders. This is why the current build works without a Sanity project.

The getters (all in `content.ts`):

| Getter | Returns | Used by |
|---|---|---|
| `getSiteSettings()` | Org name, contact, city, work area | layout, footer, contact, panels, structured data |
| `getServiceGroups()` | `{ main, bouw, interieurHub, interieurSubs }` | header, footer, home, diensten, interieurbouw |
| `getServiceBySlug()` / `getServiceTitle()` | one service | service detail pages, project meta |
| `getPublishedProjects()` | published projects, ordered | home, projecten, sitemap |
| `getProject()` | one published project | project detail |
| `getProjectSlugs()` | published slugs | `generateStaticParams` |

All read-getters are wrapped in React `cache()`, so each is fetched at most once per render.

## 2. Content model (Sanity schemas)

Only the types the website actually renders exist in the Studio — no dead fields.

| Type | Fields (summary) | Publication safety |
|---|---|---|
| **`siteSettings`** (singleton) | name, descriptor, email, phone (display + link), city, service area, optional address | Address stays hidden until filled. |
| **`service`** | title, slug, pillar (bouw/interieur), `parent` (for sub-services), index, navLabel, descriptor, intro, responsibilities, hero, SEO | — |
| **`project`** | title, slug, pillar, type, location, property, year, duration, services (refs), objective/approach/result, hero, gallery, SEO, `homepageOrder`, **`published`** | `published` defaults **off**; only published projects appear anywhere. |

**Schema ↔ front-end alignment.** Every field maps 1:1 to something the locked templates
render (e.g. `objective` → "De opgave" block). The `src/lib/types.ts` interfaces mirror the
schemas; `content.ts` maps raw Sanity documents onto those types. Images are mapped to the
site's `MediaSlot` shape via `@sanity/image-url` (`src/lib/sanity/image.ts`); an empty image
field simply renders the existing placeholder — never a broken image.

**Testimonials are intentionally not a content type.** The visual system has no reviews
surface, and VAKVORM never publishes fabricated reviews, so shipping a testimonial type
would be a dead editor screen. It can be added when a real, consent-based reviews section is
designed.

## 3. Draft / publish safety

Drafts can never leak to the public site, by two independent guards:

1. The Sanity client uses `perspective: 'published'` (`src/lib/sanity/client.ts`) — drafts
   are invisible to every query.
2. Projects additionally have their own `published` boolean (default **off**). Queries filter
   `published == true`, so even a *Sanity-published* project stays off the website until the
   editor flips it on. This lets the team prepare a project fully before it goes live.

Empty states are handled everywhere: with no published projects, the homepage and
`/projecten` show honest "binnenkort" placeholders instead of empty grids.

## 4. Publishing without a redeploy

Pages are statically rendered but **revalidated on a timer** (`export const revalidate = 60`
on every content page and the sitemap). After the editor publishes in Sanity, the change
appears on the live site within ~60 seconds — **no code change, no new deployment**. New
project/service slugs that were not in `generateStaticParams` render on demand the first time
they are requested and are then cached (Next.js `dynamicParams`, on by default).

**Optional — instant publishing.** `src/app/api/revalidate/route.ts` accepts a Sanity webhook
(`POST /api/revalidate`, header `x-revalidate-secret` = `SANITY_REVALIDATE_SECRET`) and
revalidates immediately. If the secret env var is unset, the endpoint is disabled (404), so it
is safe to ship before the webhook is configured. Time-based revalidation is the default and
needs no setup.

## 5. What lives in code (not the CMS) — and why

- **`baseUrl`** (`https://www.vakvorm.nl`) — deployment configuration, used for
  `metadataBase`, canonical URLs, sitemap and structured data.
- **Navigation routes** (`nav` in `src/lib/site.ts`) — the URL structure of the site.
- **Email delivery config** — `RESEND_*` / `INQUIRY_*` env vars (server-side secrets).
- **Fixed page copy** — the "werkwijze" steps, trust band, statement — these are part of the
  art direction, not per-item content. They can be promoted to Sanity later if needed.

Contact details (email, phone, work area, city) *are* editor-managed via `siteSettings` and
flow to the footer, contact page, contact panels and structured data.

## 6. Provisioning checklist (owner, one-time)

1. Create a project at <https://sanity.io>; note the **Project ID**.
2. Front-end `.env.local`: set `NEXT_PUBLIC_SANITY_PROJECT_ID` (+ dataset). Redeploy once —
   this is the *only* deploy needed to switch the site onto Sanity.
3. In `/sanity`: `npm install`, set `SANITY_STUDIO_PROJECT_ID`, `npm run dev` (or
   `npm run deploy` for a hosted `*.sanity.studio`).
4. Fill **Site-instellingen**, add **Diensten**, then add **Projecten** (leave *Publiceren*
   off until ready).
5. (Optional) Set `SANITY_REVALIDATE_SECRET` and add the matching Sanity webhook for instant
   updates.

After step 2, all further content work happens in the Studio — no code, no deploys.
