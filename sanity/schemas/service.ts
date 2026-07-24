import { defineType, defineField } from 'sanity';

export const service = defineType({
  name: 'service',
  title: 'Dienst',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titel', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'pillar',
      title: 'Pijler',
      type: 'string',
      options: { list: [
        { title: 'Bouw & Renovatie', value: 'bouw' },
        { title: 'Interieurbouw', value: 'interieur' },
      ], layout: 'radio' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'parent',
      title: 'Onderdeel van (voor sub-diensten)',
      type: 'reference',
      to: [{ type: 'service' }],
      description: 'Alleen invullen voor interieurbouw sub-diensten (bijv. maatwerkkasten).',
    }),
    defineField({ name: 'index', title: 'Index (bijv. 01)', type: 'string' }),
    defineField({ name: 'navLabel', title: 'Navigatielabel', type: 'string' }),
    defineField({ name: 'descriptor', title: 'Korte omschrijving', type: 'string' }),
    defineField({ name: 'intro', title: 'Introtekst', type: 'text', rows: 4 }),
    defineField({
      name: 'responsibilities',
      title: 'Waar wij verantwoordelijk voor zijn',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'hero', title: 'Hero-afbeelding', type: 'image', options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt-tekst' }] }),
    defineField({
      name: 'relatedProjects',
      title: 'Gerelateerde projecten',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    }),
    defineField({ name: 'seoTitle', title: 'SEO-titel', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta-description', type: 'text', rows: 2 }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'pillar', media: 'hero' },
  },
});
