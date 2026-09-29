import type { DrawingVariant } from '@/components/primitives/ArchDrawing';

// The photographs of the homepage, in one place. Every position has a drawing that stands
// in until a real Nederdam photograph exists: set `src` (a file in /public/images or a Sanity
// URL) and `alt`, and the photograph replaces the drawing — no component changes.
// Only real Nederdam work belongs here. No stock, and nothing presented as a project it isn't.
export interface ImageSlot {
  src?: string;
  alt: string;
  drawing: DrawingVariant;
}

export const homeImages: {
  bouw: ImageSlot;
  interieur: ImageSlot;
  materials: ImageSlot[];
  close: ImageSlot;
} = {
  bouw: { alt: 'Nederdam Bouw aan het werk', drawing: 'section' },
  interieur: { alt: 'Maatwerk interieur van Nederdam', drawing: 'joinery' },
  materials: [
    { alt: 'Hout', drawing: 'wood' },
    { alt: 'Natuursteen', drawing: 'stone' },
    { alt: 'Stucwerk', drawing: 'plaster' },
  ],
  close: { alt: 'Detail van een verbinding', drawing: 'joint' },
};
