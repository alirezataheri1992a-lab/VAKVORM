import { defineType, defineField } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  groups: [
    { name: 'content', title: 'Inhoud', default: true },
    { name: 'meta', title: 'Projectgegevens' },
    { name: 'media', title: 'Beeld' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Titel', type: 'string', group: 'content', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', group: 'content', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({
      name: 'published',
      title: 'Publiceren',
      type: 'boolean',
      group: 'content',
      initialValue: false,
      description: 'Zet pas aan als het project echt en compleet is (geen placeholder).',
    }),
    defineField({
      name: 'pillar',
      title: 'Pijler',
      type: 'string',
      group: 'meta',
      options: { list: [
        { title: 'Bouw & Renovatie', value: 'bouw' },
        { title: 'Interieurbouw', value: 'interieur' },
      ] },
    }),
    // metadata
    defineField({ name: 'projectType', title: 'Type project', type: 'string', group: 'meta' }),
    defineField({ name: 'location', title: 'Locatie (wijk/plaats)', type: 'string', group: 'meta',
      description: 'Gebied, niet het volledige adres — privacy van de klant.' }),
    defineField({ name: 'propertyType', title: 'Type woning/pand', type: 'string', group: 'meta' }),
    defineField({ name: 'duration', title: 'Doorlooptijd', type: 'string', group: 'meta' }),
    defineField({
      name: 'services',
      title: 'Gebruikte diensten',
      type: 'array',
      group: 'meta',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
    // narrative
    defineField({ name: 'objective', title: 'De opgave', type: 'text', rows: 3, group: 'content' }),
    defineField({ name: 'approach', title: 'Onze aanpak', type: 'text', rows: 4, group: 'content' }),
    defineField({ name: 'result', title: 'Het resultaat', type: 'text', rows: 3, group: 'content' }),
    // media
    defineField({ name: 'hero', title: 'Hero-afbeelding', type: 'image', group: 'media', options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt-tekst' }] }),
    defineField({
      name: 'gallery',
      title: 'Beeldgalerij',
      type: 'array',
      group: 'media',
      of: [{ type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Alt-tekst' }] }],
    }),
    defineField({
      name: 'testimonial',
      title: 'Review (optioneel, alleen echt)',
      type: 'reference',
      to: [{ type: 'testimonial' }],
      group: 'content',
    }),
    defineField({
      name: 'relatedProjects',
      title: 'Gerelateerde projecten',
      type: 'array',
      group: 'content',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'location', media: 'hero', published: 'published' },
    prepare: ({ title, subtitle, media, published }) => ({
      title: `${published ? '' : '• (concept) '}${title}`,
      subtitle,
      media,
    }),
  },
});
