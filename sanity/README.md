# VAKVORM — Content Studio (Sanity)

The editorial back-end where the VAKVORM team manages **Projecten**, **Diensten** and
**Site-instellingen** — without touching code.

The front-end is **already wired** to Sanity: every page reads through `src/lib/content.ts`,
which serves Sanity content when a project is configured and falls back to typed development
seed data otherwise (so the site always builds). See `docs/cms-architecture.md` for the full
picture.

## Provisioning (one-time, owner action)

1. Create a free project at <https://sanity.io> and note the **Project ID**.
2. Front-end: set `NEXT_PUBLIC_SANITY_PROJECT_ID` (and `NEXT_PUBLIC_SANITY_DATASET`) in
   `.env.local`, then redeploy once. This is the only deployment needed to switch the live
   site onto Sanity.
3. In this `/sanity` folder:
   ```bash
   npm install
   SANITY_STUDIO_PROJECT_ID=xxxx npm run dev   # local studio at http://localhost:3333
   ```
   or set `projectId` directly in `sanity.config.ts`. Deploy the studio with
   `npm run deploy` (hosted at `<name>.sanity.studio`).
4. Add content: fill **Site-instellingen** first, then **Diensten**, then **Projecten**.

## Content model

| Type | Purpose |
|---|---|
| `siteSettings` | Singleton — bedrijfsnaam, contact (e-mail/telefoon), plaats en werkgebied. Bron voor de organisatiegegevens op de site. |
| `service` | Diensten (beide pijlers) + interieurbouw-specialisaties (via `parent`). |
| `project` | Case studies. `published` (default **uit**) bepaalt zichtbaarheid; concepten verschijnen nergens. |

Every schema field maps to something the website actually renders — there are no decorative
fields. Field descriptions in the Studio are in Dutch and explain where each value appears.

**Testimonials** are deliberately not modelled: the design has no reviews surface yet, and
VAKVORM never publishes fabricated reviews. Add the type when a real, consent-based reviews
section is designed.

## How publishing works

- Drafts never reach the site: the front-end client uses `perspective: 'published'`, and
  projects have an extra `published` switch (default off).
- Published changes appear on the live site within ~60s via time-based revalidation — **no
  redeploy**. For instant updates, set `SANITY_REVALIDATE_SECRET` and add a Sanity webhook to
  `POST /api/revalidate` (header `x-revalidate-secret`).

## Env vars (front-end `.env.local`)

```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
SANITY_REVALIDATE_SECRET=        # optional, for instant publishing
```
