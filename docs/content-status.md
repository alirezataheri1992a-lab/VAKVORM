# Nederdam Bouw — Content status (placeholders to replace before launch)

The site is built to run before all real content exists. This tracks what is
**placeholder** and must be replaced with real, verified content prior to launch.

| Item | Where | Status | Action before launch |
|---|---|---|---|
| **Homepage testimonial** | `src/lib/testimonials.ts` (`homeTestimonial`) | ⚠️ **Fictional placeholder** ("Mark de Vries") | Replace quote/author/context with a real, consent-given review and set `placeholder: false`; or remove the `<Testimonial>` section from `src/app/page.tsx` until a real review exists. |
| **Projects** | Sanity / `src/lib/projects.ts` (empty) | No real projects yet | Add ~5 real projects via the CMS (`published: true`). Surfaces show honest "binnenkort" states until then. |
| **Photography** | all `ProjectMedia` slots + hero video | Placeholders / stock | Replace with real Nederdam Bouw photography (see `docs/image-sources.md`) and the real hero edit (see `docs/video-sources.md`). |
| **Certification** | `CertificationMark` (homepage, footer) + `<Placeholder>naam erkenning</Placeholder>` in `src/app/page.tsx` | Confirmed: Nederdam is an erkend bouwbedrijf. Name and logo not yet supplied | Add the logo file to `/public/brand/`, render it in `CertificationMark`, fill in the name. |
| **Warranty** | homepage trust bar | Confirmed: garantie op het werk. Terms not yet supplied | Replace `<Placeholder>Garantievoorwaarden en termijn</Placeholder>` with the real terms. |
| **Insurance** | homepage trust bar | Confirmed: verzekerd. Type not yet supplied | Replace the insurance placeholder with the actual cover. |
| **Own workshop** | homepage trust bar, hero | Confirmed: eigen werkplaats | — |
| **KvK number** | footer | Not yet supplied | Replace `<Placeholder>00000000</Placeholder>` in `SiteFooter.tsx`. |
| **Example project (voor/na)** | homepage "Recent werk" | Layout example, marked | Disappears automatically when the first project is published. |
| **Contact details** | `src/lib/site.ts` / Sanity `siteSettings` | Email set to `info@nederdambouw.nl`; phone `06 42241075` | Make sure the mailbox `info@nederdambouw.nl` exists and receives mail (also set `INQUIRY_TO` in the host); add a public address only if confirmed. |

## Testimonial placeholder — important

`homeTestimonial` is **not a real customer review**. While `placeholder: true`, the
section renders a visible **"voorbeeldreview"** marker so it can never be mistaken for a
genuine, verified review, and the supporting image is a project result (not a photo of a
real person). Nederdam Bouw never publishes fabricated reviews — this exists only to develop and
preview the layout. Swap in a real quote (with the client's permission) before going live.
