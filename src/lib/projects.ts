import type { Project } from './types';

// Projects are real, published case studies only. No fabricated projects are seeded
// here — the ~5 launch projects arrive via Sanity (or are added below once photos and
// facts are confirmed by the owner). Until then, project surfaces render honest
// placeholders that hold the intended composition.
//
// To add a real project, append a Project object with `published: true` and real media.
export const projects: Project[] = [];

export function getPublishedProjects(): Project[] {
  return projects.filter((p) => p.published);
}

export function getProject(slug: string): Project | undefined {
  return getPublishedProjects().find((p) => p.slug === slug);
}

/**
 * Placeholder composition slots for surfaces that showcase work before real projects
 * exist. These are clearly-temporary layout holders — NOT claimed as completed projects.
 * Each describes the *kind* of work (truthful) and holds an aspect ratio.
 */
export const workSlots = [
  { slot: 'WONINGRENOVATIE', label: 'Woningrenovatie', place: 'Utrecht', ratio: '4:3' as const },
  { slot: 'BADKAMER', label: 'Badkamer', place: 'Utrecht', ratio: '4:5' as const },
  { slot: 'MAATWERK INTERIEUR', label: 'Maatwerk interieur', place: 'Utrecht', ratio: '3:2' as const },
  { slot: 'UITBOUW', label: 'Uitbouw', place: 'Utrecht', ratio: '3:2' as const },
  { slot: 'KASTWAND', label: 'Maatwerkkast', place: 'Utrecht', ratio: '4:5' as const },
];
