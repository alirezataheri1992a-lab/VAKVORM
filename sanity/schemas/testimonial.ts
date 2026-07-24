import { defineType, defineField } from 'sanity';

// Only real, given testimonials. Never fabricated. No aggregate ratings.
export const testimonial = defineType({
  name: 'testimonial',
  title: 'Review',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Citaat', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'author', title: 'Naam', type: 'string' }),
    defineField({ name: 'context', title: 'Context (bijv. project/plaats)', type: 'string' }),
    defineField({
      name: 'consent',
      title: 'Toestemming voor publicatie',
      type: 'boolean',
      initialValue: false,
      description: 'Alleen publiceren met expliciete toestemming van de klant.',
    }),
  ],
  preview: { select: { title: 'author', subtitle: 'context' } },
});
