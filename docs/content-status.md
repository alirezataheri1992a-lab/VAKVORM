# VAKVORM — Content status (placeholders to replace before launch)

The site is built to run before all real content exists. This tracks what is
**placeholder** and must be replaced with real, verified content prior to launch.

| Item | Where | Status | Action before launch |
|---|---|---|---|
| **Homepage testimonial** | `src/lib/testimonials.ts` (`homeTestimonial`) | ⚠️ **Fictional placeholder** ("Mark de Vries") | Replace quote/author/context with a real, consent-given review and set `placeholder: false`; or remove the `<Testimonial>` section from `src/app/page.tsx` until a real review exists. |
| **Projects** | Sanity / `src/lib/projects.ts` (empty) | No real projects yet | Add ~5 real projects via the CMS (`published: true`). Surfaces show honest "binnenkort" states until then. |
| **Photography** | all `ProjectMedia` slots + hero video | Placeholders / stock | Replace with real VAKVORM photography (see `docs/image-sources.md`) and the real hero edit (see `docs/video-sources.md`). |
| **Contact details** | `src/lib/site.ts` / Sanity `siteSettings` | Owner's temporary email/phone | Confirm final VAKVORM-branded email + phone; add a public address only if confirmed. |

## Testimonial placeholder — important

`homeTestimonial` is **not a real customer review**. While `placeholder: true`, the
section renders a visible **"voorbeeldreview"** marker so it can never be mistaken for a
genuine, verified review, and the supporting image is a project result (not a photo of a
real person). VAKVORM never publishes fabricated reviews — this exists only to develop and
preview the layout. Swap in a real quote (with the client's permission) before going live.
