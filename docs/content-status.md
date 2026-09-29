# Nederdam Bouw — Content status (what is still missing)

Rule: **missing content is hidden, never shown as a placeholder.** No "foto volgt", no
sample review, no KvK 00000000, no @account. Each item below switches on by itself (or with
one small edit) once the real content is supplied.

| Item | Where | Status | What switches it on |
|---|---|---|---|
| **Photography** | homepage slots in `src/lib/media.ts`; `ProjectMedia` on other pages; hero video | No real photography yet. Image positions show architectural line drawings (`ArchDrawing`); the hero video is temporary Pexels stock | Add real Nederdam photos: set `src` + `alt` in `src/lib/media.ts` (homepage) or in Sanity. Replace the hero clip (see `docs/video-sources.md`). |
| **Projects** | Sanity / `src/lib/projects.ts` (empty) | No real projects yet — the homepage section is hidden, /projecten shows "in voorbereiding" | Publish a project (`published: true`, real photos). The homepage "Uitgelichte projecten" appears automatically. |
| **Review** | `src/lib/testimonials.ts` (`homeTestimonial`) | No real review — the section is not rendered while `placeholder: true` | Replace with a real review (with permission) and set `placeholder: false`. |
| **Certification** | footer line "Erkend bouwbedrijf" | Confirmed; name and logo not supplied | Add the logo to `/public/brand/` and name it where useful (footer, over-ons). |
| **Warranty / insurance** | footer line | Confirmed; terms and cover not supplied | Add the terms to /over-ons once known. |
| **Own workshop** | homepage, footer | Confirmed | — |
| **Instagram account** | `instagram` in `src/lib/site.ts` (or Sanity) | Not supplied — every Instagram link is hidden | Set the account name (without @); links and `sameAs` switch on. |
| **KvK number** | footer | Not supplied — not shown | Add it to the footer bottom row. |
| **Verhuizing (nieuwbouw)** | `src/lib/nieuwbouw.ts` (step "Verhuizen & thuis", trade list, intake option) | **Idea in development** — on the site at the owner's request | Confirm before launch that Nederdam (or a partner) arranges the move; otherwise remove the step, trade and intake option. |
| **Söhne / Canela** | `src/lib/fonts.ts` | Licensed fonts not in the repo; Hanken Grotesk and Newsreader stand in | Add the licensed files and switch to `next/font/local` in that one file. |
| **Contact details** | `src/lib/site.ts` / Sanity `siteSettings` | `info@nederdambouw.nl`, `06 42241075` | Make sure the mailbox exists (also `INQUIRY_TO` in the host); add an address only if confirmed. |

## Testimonial — important

`homeTestimonial` is **not a real customer review**. While `placeholder: true` the homepage
does not render it at all. Nederdam Bouw never publishes fabricated reviews.
