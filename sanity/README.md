# VAKVORM — Content Studio (Sanity)

The editorial back-end where the Vakvorm team manages **Projects**, **Diensten**,
**Reviews** and **Site-instellingen** — without touching code.

The front-end (`/src`) currently reads from typed seed data in `src/lib/*` so the site
runs before Sanity is provisioned. These schemas mirror those types 1:1, so switching the
data source is a localised change (see "Connect the front-end" below).

## Provisioning (one-time, owner action)

1. Create a free project at <https://sanity.io> and note the **Project ID**.
2. In this `/sanity` folder:
   ```bash
   npm install
   SANITY_STUDIO_PROJECT_ID=xxxx npm run dev   # local studio at http://localhost:3333
   ```
   or set `projectId` directly in `sanity.config.ts`.
3. Add content: fill **Site-instellingen** first, then add **Diensten** and **Projecten**.
   Deploy the studio with `npm run deploy` (hosted at `<name>.sanity.studio`).

## Content model

| Type | Purpose |
|---|---|
| `siteSettings` | Singleton — NAP, contact, default SEO. Single source of org details. |
| `service` | Diensten (both pillars) + interieurbouw sub-services (via `parent`). |
| `project` | Structured case studies. `published` gates visibility (default off). |
| `testimonial` | Real reviews only, `consent` required. No aggregate ratings. |

## Connect the front-end (next step)

1. In `/` (front-end) install the client: `npm i next-sanity @sanity/image-url`.
2. Add a `src/lib/sanity/client.ts` (projectId, dataset, `apiVersion`, `useCdn`).
3. Replace the bodies of these functions to fetch from Sanity via GROQ:
   - `src/lib/services.ts` → query `service` documents
   - `src/lib/projects.ts` → query `project` documents where `published == true`
   - `src/lib/site.ts` → query the `siteSettings` singleton
4. Map Sanity image assets to the `MediaSlot` shape (`src`, `alt`, `ratio`) using
   `@sanity/image-url`. `ProjectMedia` already renders real `src` when present.
5. Add the Sanity CDN host to `next.config.mjs` `images.remotePatterns` (already present:
   `cdn.sanity.io`).

Because the front-end types (`src/lib/types.ts`) already match these schemas, no component
changes are needed — only the data-fetching functions.

## Env vars (front-end `.env.local`)

```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx
NEXT_PUBLIC_SANITY_DATASET=production
```
