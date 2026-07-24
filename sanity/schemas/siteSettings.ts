import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site-instellingen',
  type: 'document',
  // Singleton — one instance, managed via the desk structure.
  fields: [
    defineField({ name: 'name', title: 'Bedrijfsnaam', type: 'string', initialValue: 'VAKVORM' }),
    defineField({ name: 'descriptor', title: 'Descriptor', type: 'string', initialValue: 'Bouw & Interieur' }),
    defineField({ name: 'email', title: 'E-mail', type: 'string', validation: (r) => r.email() }),
    defineField({ name: 'phoneDisplay', title: 'Telefoon (weergave)', type: 'string' }),
    defineField({ name: 'phoneHref', title: 'Telefoon (tel:)', type: 'string', description: 'Bijv. +31642241075' }),
    defineField({ name: 'city', title: 'Vestigingsplaats', type: 'string', initialValue: 'Utrecht' }),
    defineField({ name: 'serviceArea', title: 'Werkgebied', type: 'string' }),
    defineField({
      name: 'addressText',
      title: 'Adres (optioneel)',
      type: 'string',
      description: 'Laat leeg tot een openbaar adres is bevestigd. Wordt niet getoond indien leeg.',
    }),
    defineField({
      name: 'social',
      title: 'Social links',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'platform', type: 'string', title: 'Platform' },
        { name: 'url', type: 'url', title: 'URL' },
      ] }],
    }),
    defineField({ name: 'defaultSeoTitle', title: 'Standaard SEO-titel', type: 'string' }),
    defineField({ name: 'defaultMetaDescription', title: 'Standaard meta-description', type: 'text', rows: 2 }),
  ],
  preview: { prepare: () => ({ title: 'Site-instellingen' }) },
});
