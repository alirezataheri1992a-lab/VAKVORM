import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { MediaSlot } from '@/lib/types';
import { dataset, projectId, sanityEnabled } from './env';

const builder = sanityEnabled ? imageUrlBuilder({ projectId, dataset }) : null;

interface SanityImage {
  asset?: { _ref?: string };
  alt?: string;
}

/**
 * Maps a Sanity image field to the site's MediaSlot shape. When no asset is present the
 * slot stays image-less so ProjectMedia renders its placeholder (never a broken image).
 * Cropping to the intended ratio is handled in CSS (object-fit: cover) — the URL just
 * provides an optimised, format-negotiated source.
 */
export function toMediaSlot(
  image: SanityImage | undefined,
  ratio: MediaSlot['ratio'],
  slot?: string,
): MediaSlot {
  if (!builder || !image?.asset?._ref) {
    return { alt: image?.alt ?? '', ratio, slot };
  }
  const src = builder
    .image(image as SanityImageSource)
    .width(1800)
    .auto('format')
    .quality(80)
    .url();
  return { src, alt: image.alt ?? '', ratio, slot };
}
