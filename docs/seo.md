# SEO — Nederdam Bouw

Werkgebied: **heel Nederland**, with **Utrecht, Rotterdam and Amsterdam** as focus cities.
No Google Business Profile yet; no public business address confirmed.

## Phase 1 — done in the site

| What | Where |
|---|---|
| Werkgebied data (focus cities, notes per city, surrounding places, provinces) | `src/lib/areas.ts` |
| Overview page `/werkgebied` and city pages `/werkgebied/utrecht`, `/rotterdam`, `/amsterdam` | `src/app/werkgebied/` |
| Homepage title "Aannemer Utrecht, Rotterdam & Amsterdam", description with "heel Nederland" | `src/app/layout.tsx` |
| Hero H1 "Aannemer voor verbouw, renovatie en maatwerk interieur" + links to the city pages | `src/app/page.tsx` |
| Service titles and descriptions name the three cities and heel Nederland | `src/lib/services.ts` (and Sanity when connected) |
| Every service page links to "[dienst] in [stad]" for the three cities | `ServicePageView.tsx` |
| Footer and mobile menu link to the werkgebied | `SiteFooter.tsx`, `site.ts` |
| Structured data: `areaServed` as City ×3 + Country; `Service` per service page; `GeneralContractor` per city page; logo | `src/components/seo/JsonLd.tsx` |
| Sitemap includes the werkgebied pages | `src/app/sitemap.ts` |

### Rules we keep

- **No doorway pages.** City pages exist only for the focus cities and carry their own content:
  the housing stock, practical points for building there (monuments, VvE, foundations,
  logistics), surrounding places. Never 50 copies with a swapped place name.
- **No invented local claims.** City pages state general, verifiable context — not "we did 40
  projects in Amsterdam". Real projects appear on a city page automatically when their
  location names that city.
- Reviews in structured data only when they are real.

## Phase 2 — needs input

- A short, unique section per city page: which jobs you do there most, and — once they exist —
  2–3 projects in that city with photos.
- FAQ per service (vergunning nodig voor een aanbouw? hoe lang duurt een badkamerrenovatie?
  wat bepaalt de kosten?). Good for search; answers must come from you.
- More city pages only where there is real work to show (e.g. Den Haag, Amersfoort, Haarlem).

## Phase 3 — outside the website (highest impact for local search)

1. **Google Bedrijfsprofiel** (business.google.com)
   - Create it as a *service-area business*: the address stays hidden, you set the areas you
     serve (Utrecht, Rotterdam, Amsterdam, plus provinces or "Nederland").
   - Primary category *Aannemer*; add e.g. *Interieurbouwer*, *Badkamerrenovatie*.
   - Same name, phone and website as on the site (`Nederdam Bouw`, `06 42241075`,
     `https://www.nederdambouw.nl`).
   - Photos of real work; ask every satisfied client for a Google review.
2. **Consistent listings (NAP):** KvK, the certification register (also a strong link), Werkspot,
   Trustoo, Homedeal — same name, phone, website everywhere.
3. **Google Search Console** as soon as the domain is live: submit `/sitemap.xml`, then use the
   real search data to decide which pages and cities to expand. Search volumes are not
   guessed; they come from Search Console or the Keyword Planner.
