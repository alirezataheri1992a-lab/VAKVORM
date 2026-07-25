import { defineType, defineField } from 'sanity';

// Services drive the navigation, the service pages and the "diensten" index. Every field
// maps to something the site renders. Editing a service (title, intro, responsibilities,
// hero) updates the live pages and menu without any code change.
export const service = defineType({
  name: 'service',
  title: 'Dienst',
  type: 'document',
  groups: [
    { name: 'basis', title: 'Basis', default: true },
    { name: 'inhoud', title: 'Inhoud' },
    { name: 'media', title: 'Beeld' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Titel', type: 'string', group: 'basis', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug (webadres)',
      type: 'slug',
      group: 'basis',
      options: { source: 'title', maxLength: 96 },
      description: 'Wordt automatisch uit de titel gemaakt. Niet wijzigen zodra de dienst live is.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'pillar',
      title: 'Pijler',
      type: 'string',
      group: 'basis',
      options: {
        list: [
          { title: 'Bouw & Renovatie', value: 'bouw' },
          { title: 'Interieurbouw', value: 'interieur' },
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'parent',
      title: 'Onderdeel van (voor sub-diensten)',
      type: 'reference',
      to: [{ type: 'service' }],
      group: 'basis',
      description: 'Alleen invullen voor interieurbouw-specialisaties (bijv. maatwerkkasten). Deze verschijnen onder /interieurbouw.',
    }),
    defineField({
      name: 'index',
      title: 'Indexnummer',
      type: 'string',
      group: 'basis',
      description: 'Bijv. "01". Bepaalt de volgorde en het nummer in de datum-lijn.',
    }),
    defineField({ name: 'navLabel', title: 'Navigatielabel', type: 'string', group: 'basis', description: 'Kortere naam voor het menu (optioneel; anders wordt de titel gebruikt).' }),

    // ---------------- Inhoud ----------------
    defineField({ name: 'descriptor', title: 'Korte omschrijving', type: 'string', group: 'inhoud', description: 'Eén zin — verschijnt in het menu en als lead op de dienstpagina.' }),
    defineField({ name: 'intro', title: 'Introtekst', type: 'text', rows: 4, group: 'inhoud' }),
    defineField({
      name: 'responsibilities',
      title: 'Waar wij verantwoordelijk voor zijn',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'inhoud',
      description: 'Genummerde lijst op de dienstpagina. Geen vinkjes — korte, feitelijke regels.',
    }),

    // ---------------- Beeld ----------------
    defineField({
      name: 'hero',
      title: 'Hero-afbeelding',
      type: 'image',
      options: { hotspot: true },
      group: 'media',
      fields: [{ name: 'alt', type: 'string', title: 'Alt-tekst', description: 'Beschrijf wat zichtbaar is.' }],
    }),

    // ---------------- SEO ----------------
    defineField({ name: 'seoTitle', title: 'SEO-titel', type: 'string', group: 'seo' }),
    defineField({ name: 'metaDescription', title: 'Meta-omschrijving', type: 'text', rows: 2, group: 'seo' }),
  ],
  orderings: [
    {
      title: 'Pijler, dan index',
      name: 'pillarIndex',
      by: [
        { field: 'pillar', direction: 'asc' },
        { field: 'index', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: { title: 'title', pillar: 'pillar', parent: 'parent.title', media: 'hero' },
    prepare: ({ title, pillar, parent, media }) => ({
      title,
      subtitle: [pillar === 'interieur' ? 'Interieurbouw' : 'Bouw & Renovatie', parent && `↳ ${parent}`].filter(Boolean).join(' · '),
      media,
    }),
  },
});
