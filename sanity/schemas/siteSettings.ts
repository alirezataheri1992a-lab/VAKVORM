import { defineType, defineField } from 'sanity';

// Singleton — one instance, managed via the desk structure. Holds the organisation
// details shown across the site (footer, contact page, contact panel, structured data).
// The website URL (baseUrl) is deployment configuration and lives in code, not here.
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site-instellingen',
  type: 'document',
  groups: [
    { name: 'merk', title: 'Merk', default: true },
    { name: 'contact', title: 'Contact' },
    { name: 'locatie', title: 'Locatie' },
  ],
  fields: [
    defineField({ name: 'name', title: 'Bedrijfsnaam', type: 'string', group: 'merk', initialValue: 'VAKVORM', description: 'Altijd VAKVORM (in hoofdletters geschreven).' }),
    defineField({ name: 'descriptor', title: 'Descriptor', type: 'string', group: 'merk', initialValue: 'Bouw & Interieur' }),

    defineField({ name: 'email', title: 'E-mailadres', type: 'string', group: 'contact', validation: (r) => r.email(), description: 'Waar aanvragen en contact naartoe gaan.' }),
    defineField({ name: 'phoneDisplay', title: 'Telefoon (weergave)', type: 'string', group: 'contact', description: 'Zoals getoond, bijv. "06 42241075".' }),
    defineField({ name: 'phoneHref', title: 'Telefoon (voor bel-link)', type: 'string', group: 'contact', description: 'Internationaal formaat, bijv. "+31642241075".' }),

    defineField({ name: 'city', title: 'Vestigingsplaats', type: 'string', group: 'locatie', initialValue: 'Utrecht' }),
    defineField({ name: 'serviceArea', title: 'Werkgebied', type: 'string', group: 'locatie', initialValue: 'Utrecht en omgeving' }),
    defineField({
      name: 'addressText',
      title: 'Adres (optioneel)',
      type: 'string',
      group: 'locatie',
      description: 'Laat leeg tot een openbaar adres is bevestigd. Wordt niet getoond en niet in structured data gebruikt indien leeg.',
    }),
  ],
  preview: { prepare: () => ({ title: 'Site-instellingen' }) },
});
