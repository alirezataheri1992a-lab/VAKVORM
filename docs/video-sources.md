# VAKVORM — Video sources

## Homepage hero background

| | |
|---|---|
| **File** | `/public/videos/vakvorm-hero-placeholder.mp4` |
| **Poster** | `/public/images/hero/hero-poster.jpg` (frame extracted from the clip @ ~5s) |
| **Status** | **TEMPORARY STOCK PLACEHOLDER** |
| **Source** | Pexels (supplied by the owner) |
| **Original** | `6474181-uhd_2160_3840_25fps.mp4` — portrait 1440 × 2560, ~11.9 s, H.264, ~5.9 MB |
| **Purpose** | Homepage hero art-direction and technical development only |
| **Subject** | A craftsman finishing/plastering an interior wall during a renovation |

> This footage is **not** an actual VAKVORM project and must never be presented as one.
> It is decorative placeholder material used to develop the hero experience.

### Future replacement

Replace with a real VAKVORM construction + interieurbouw montage:

- ~8–15 seconds, 3–5 restrained shots — process → craft → result.
- Cinematic / documentary / tactile; real hands, tools, materials, natural light.
  No rapid cuts, posing, drones, or baked-in text.
- Deliver **desktop** (landscape, ~1920×1080, H.264 MP4, web-optimised — target ≈ 5–12 MB)
  and, ideally, a dedicated **mobile** (portrait) edit.
- Provide a matching poster still (`hero-poster.jpg`).

### How to swap it (no component changes)

Everything is driven from **one** place — `src/lib/site.ts`:

```ts
export const heroVideo = {
  src: '/videos/vakvorm-hero-placeholder.mp4',
  poster: '/images/hero/hero-poster.jpg',
  objectPosition: '50% 25%', // keeps the craft action framed in the desktop cover-crop
};
```

Drop the new file(s) into `/public/videos` and `/public/images/hero`, update the three
values, and re-tune `objectPosition` for the new footage if needed. No JSX/CSS changes.

### Implementation notes

- Rendered by `src/components/sections/HeroVideo.tsx` — native `<video>` (autoplay, muted,
  loop, playsInline, no controls), **no** video library.
- The **poster is always painted first** (instant, no layout shift, good LCP) and remains
  the fallback; the video fades in only once it is genuinely `playing`. So autoplay refusal,
  a slow network, or a browser that can't decode the source all degrade gracefully to the
  still poster.
- **`prefers-reduced-motion: reduce`** → the video never mounts; the poster is shown.
- The video is decorative (`aria-hidden`, `tabIndex=-1`); the hero proposition lives in real
  semantic HTML (`h1` + paragraph + links), so nothing depends on playback for SEO or a11y.
- `preload="metadata"` — the clip is not eagerly downloaded ahead of the poster/first paint.

> Sandbox note: the CI/preview Chromium used for screenshots lacks a proprietary H.264
> decoder, so automated captures show the poster frame rather than live playback. Real
> browsers (Chrome, Safari, Firefox, Edge) play the H.264 MP4 normally.
