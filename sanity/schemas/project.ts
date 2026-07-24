import { defineType, defineField } from 'sanity';

// A non-technical VAKVORM team member must be able to add a real project comfortably.
// Every field here maps 1:1 to something the website actually renders — there are no
// decorative fields that do nothing. Grouped, Dutch descriptions, sensible validation,
// rich preview, and a publish gate so concepts never appear publicly.
export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  groups: [
    { name: 'basis', title: 'Basis', default: true },
    { name: 'inhoud', title: 'Verhaal' },
    { name: 'media', title: 'Beeld' },
    { name: 'seo', title: 'SEO' },
    { name: 'publicatie', title: 'Publicatie' },
  ],
  fields: [
    // ---------------- Basis ----------------
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      group: 'basis',
      description: 'Bijv. "Complete woningrenovatie in Utrecht Oost".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (webadres)',
      type: 'slug',
      group: 'basis',
      options: { source: 'title', maxLength: 96 },
      description: 'Wordt automatisch uit de titel gemaakt. Blijft kleine letters — niet meer wijzigen zodra het project live is.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'pillar',
      title: 'Discipline',
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
      name: 'projectType',
      title: 'Type project',
      type: 'string',
      group: 'basis',
      description: 'Bijv. "Woningrenovatie", "Badkamer", "Maatwerk interieur". Wordt bij de projectgegevens getoond.',
    }),
    defineField({
      name: 'location',
      title: 'Locatie',
      type: 'string',
      group: 'basis',
      description: 'Wijk en/of plaats — geen volledig adres (privacy van de klant). Bijv. "Utrecht Oost".',
    }),
    defineField({ name: 'propertyType', title: 'Type woning/pand', type: 'string', group: 'basis', description: 'Optioneel, bijv. "Jaren-30 woning".' }),
    defineField({ name: 'year', title: 'Jaar', type: 'string', group: 'basis', description: 'Optioneel — bepaalt mede de volgorde in het overzicht.' }),
    defineField({ name: 'duration', title: 'Doorlooptijd', type: 'string', group: 'basis', description: 'Optioneel, bijv. "10 weken".' }),
    defineField({
      name: 'services',
      title: 'Uitgevoerde diensten',
      type: 'array',
      group: 'basis',
      description: 'Koppel de diensten die in dit project zijn uitgevoerd. Deze verschijnen als "gerelateerde diensten" en zorgen voor interne links.',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),

    // ---------------- Verhaal (each block is optional and only renders when filled) ----------------
    defineField({
      name: 'objective',
      title: 'De opgave',
      type: 'text',
      rows: 4,
      group: 'inhoud',
      description: 'Wat wilde de klant en wat was de uitdaging? Verschijnt als eerste tekstblok ("De opgave").',
    }),
    defineField({
      name: 'approach',
      title: 'Onze aanpak',
      type: 'text',
      rows: 4,
      group: 'inhoud',
      description: 'Hoe heeft VAKVORM het aangepakt? Verschijnt als tweede tekstblok ("Onze aanpak").',
    }),
    defineField({
      name: 'result',
      title: 'Het resultaat',
      type: 'text',
      rows: 4,
      group: 'inhoud',
      description: 'Wat is het eindresultaat geworden? Verschijnt als laatste tekstblok ("Het resultaat").',
    }),

    // ---------------- Beeld ----------------
    defineField({
      name: 'heroImage',
      title: 'Hoofdafbeelding',
      type: 'image',
      group: 'media',
      options: { hotspot: true },
      description: 'Het beeld bovenaan de projectpagina en in het overzicht.',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt-tekst',
          description: 'Beschrijf uitsluitend wat op de afbeelding zichtbaar is. Geen zoekwoorden.',
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Beeldgalerij',
      type: 'array',
      group: 'media',
      description: 'Extra projectfoto’s, in de volgorde waarin ze getoond worden. De eerste twee à drie beelden worden tussen de tekstblokken geplaatst.',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alt-tekst', description: 'Beschrijf wat zichtbaar is.' },
            { name: 'caption', type: 'string', title: 'Bijschrift (optioneel)' },
          ],
        },
      ],
    }),

    // ---------------- SEO ----------------
    defineField({ name: 'seoTitle', title: 'SEO-titel', type: 'string', group: 'seo', description: 'Optioneel; anders wordt de projecttitel + VAKVORM gebruikt.' }),
    defineField({ name: 'metaDescription', title: 'Meta-omschrijving', type: 'text', rows: 2, group: 'seo', description: 'Optioneel; korte omschrijving voor Google (max ~155 tekens).' }),

    // ---------------- Publicatie ----------------
    defineField({
      name: 'homepageOrder',
      title: 'Volgorde',
      type: 'number',
      group: 'publicatie',
      description: 'Lager = eerder getoond op de homepage en in het projectoverzicht. Laat leeg om op jaar te sorteren.',
    }),
    defineField({
      name: 'published',
      title: 'Publiceren',
      type: 'boolean',
      group: 'publicatie',
      initialValue: false,
      description: 'Zet pas op AAN wanneer tekst, diensten en afbeeldingen gereed zijn. Concepten (uit) verschijnen nergens op de website.',
    }),
  ],
  preview: {
    select: { title: 'title', location: 'location', type: 'projectType', year: 'year', media: 'heroImage', published: 'published' },
    prepare: ({ title, location, type, year, media, published }) => ({
      title: `${published ? '' : '○ concept — '}${title}`,
      subtitle: [type, location, year].filter(Boolean).join(' · '),
      media,
    }),
  },
});
