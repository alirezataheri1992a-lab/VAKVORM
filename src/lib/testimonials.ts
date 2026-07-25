import type { MediaSlot } from './types';

export interface Testimonial {
  /** The review text, in the client's own words. */
  quote: string;
  /** Who gave the review. */
  author: string;
  /** Short context — project type and/or place. */
  context: string;
  /** Supporting image: a real PROJECT result (not a photo of the person). */
  media: MediaSlot;
  /**
   * TRUE while this is placeholder/sample content. The UI shows a visible
   * "voorbeeldreview" marker so it can never be mistaken for a verified review.
   */
  placeholder?: boolean;
}

// ⚠️ PLACEHOLDER — FICTIONAL SAMPLE, FOR DESIGN/DEVELOPMENT ONLY.
// This is NOT a real VAKVORM customer review. Do not present it as genuine in
// production. Replace `quote`, `author`, `context` and `media` with a real,
// consent-given review (and set `placeholder: false`) before launch — or remove
// the section entirely until a real review exists. See /docs/content-status.md.
export const homeTestimonial: Testimonial = {
  quote:
    'VAKVORM heeft onze complete verbouwing van begin tot eind geregeld. Eén aanspreekpunt, een heldere planning en vakwerk tot in het detail — netjes opgeleverd, precies zoals afgesproken.',
  author: 'Mark de Vries',
  context: 'Woningrenovatie · Utrecht',
  media: { alt: 'Door VAKVORM gerealiseerd project', ratio: '4:5', slot: 'PROJECT — RESULTAAT' },
  placeholder: true,
};
