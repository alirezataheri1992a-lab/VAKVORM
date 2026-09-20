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
    defineField({ name: 'name', title: 'Bedrijfsnaam', type: 'string', group: 'merk', initialValue: 'Nederdam Bouw', description: 'De volledige handelsnaam. Gebruikt in paginatitels, Google-resultaten en e-mails.' }),
    defineField({ name: 'wordmark', title: 'Woordmerk', type: 'string', group: 'merk', initialValue: 'NEDERDAM', description: 'Zoals het logo in de header en footer staat — in hoofdletters, één woord. De descriptor hieronder staat eronder, samen lezen ze als de volledige naam.' }),
    defineField({ name: 'shortName', title: 'Korte naam', type: 'string', group: 'merk', initialValue: 'Nederdam', description: 'Hoe de naam in een lopende zin wordt geschreven, bijv. "Nederdam verzorgt de volledige renovatie".' }),
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
