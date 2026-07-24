import type { Service } from './types';

// Seed content. Copy is intentionally restrained and factual — it describes the
// discipline, it does not fabricate company specifics (years, counts, guarantees).
// Replaced by Sanity `service` documents in production.

export const services: Service[] = [
  {
    slug: 'renovatie-verbouwing',
    path: '/diensten/renovatie-verbouwing',
    pillar: 'bouw',
    index: '01',
    title: 'Renovatie & verbouwing',
    navLabel: 'Renovatie & verbouwing',
    descriptor: 'Complete woningrenovaties, van casco tot oplevering.',
    intro:
      'Een complete renovatie raakt uw hele woning — en uw dagelijks leven. Vakvorm neemt het volledige traject op zich: van eerste schets en planning tot de coördinatie van alle vakmensen en de uiteindelijke oplevering. Eén aanspreekpunt, één verantwoordelijke partij.',
    responsibilities: [
      'Planning, coördinatie en werkvoorbereiding',
      'Aansturing van alle betrokken vakmensen',
      'Constructief werk, afbouw en afwerking',
      'Bewaking van kwaliteit, planning en oplevering',
    ],
    hero: { alt: 'Gerenoveerde woning door Vakvorm', ratio: '4:3', slot: 'RENOVATIE' },
    seoTitle: 'Renovatie & verbouwing in Utrecht',
    metaDescription:
      'Complete woningrenovaties en verbouwingen in Utrecht. Eén professionele partij die uw project van planning tot oplevering realiseert.',
  },
  {
    slug: 'badkamerrenovatie',
    path: '/diensten/badkamerrenovatie',
    pillar: 'bouw',
    index: '02',
    title: 'Badkamerrenovatie',
    navLabel: 'Badkamerrenovatie',
    descriptor: 'Complete badkamers, strak afgewerkt en volledig verzorgd.',
    intro:
      'Een badkamer verbouwen vraagt om precisie: leidingwerk, tegelwerk, elektra en afwerking moeten naadloos op elkaar aansluiten. Vakvorm verzorgt de volledige badkamerrenovatie en stemt alle vakdisciplines op elkaar af, zodat het resultaat klopt tot in het detail.',
    responsibilities: [
      'Ontwerp en indeling in overleg',
      'Leidingwerk, elektra en ventilatie',
      'Tegelwerk en waterdichte afwerking',
      'Plaatsing van sanitair en maatwerk',
    ],
    hero: { alt: 'Gerenoveerde badkamer door Vakvorm', ratio: '4:5', slot: 'BADKAMER' },
    seoTitle: 'Badkamerrenovatie in Utrecht',
    metaDescription:
      'Complete badkamerrenovatie in Utrecht. Vakvorm verzorgt leidingwerk, tegelwerk en afwerking — één partij, strak resultaat.',
  },
  {
    slug: 'aanbouw-uitbouw',
    path: '/diensten/aanbouw-uitbouw',
    pillar: 'bouw',
    index: '03',
    title: 'Aanbouw & uitbouw',
    navLabel: 'Aanbouw & uitbouw',
    descriptor: 'Meer ruimte, constructief doordacht en netjes ingepast.',
    intro:
      'Een aanbouw of uitbouw vergroot uw woning en verandert hoe u er woont. Vakvorm begeleidt het traject van constructieve voorbereiding en vergunning tot realisatie, met oog voor de aansluiting op de bestaande woning.',
    responsibilities: [
      'Constructieve voorbereiding en afstemming',
      'Ondersteuning bij vergunningen',
      'Fundering, ruwbouw en dak',
      'Afbouw en aansluiting op de bestaande woning',
    ],
    hero: { alt: 'Uitbouw aan een woning door Vakvorm', ratio: '3:2', slot: 'UITBOUW' },
    seoTitle: 'Aanbouw & uitbouw in Utrecht',
    metaDescription:
      'Aanbouw en uitbouw in Utrecht. Vakvorm realiseert extra ruimte — constructief doordacht en netjes ingepast in uw woning.',
  },
  {
    slug: 'opbouw',
    path: '/diensten/opbouw',
    pillar: 'bouw',
    index: '04',
    title: 'Opbouw',
    navLabel: 'Opbouw',
    descriptor: 'Een extra verdieping, zorgvuldig op uw woning afgestemd.',
    intro:
      'Een opbouw voegt een volwaardige verdieping toe zonder dat u hoeft te verhuizen. Vakvorm verzorgt de constructieve afstemming en de volledige realisatie, met bijzondere aandacht voor de overgang naar de bestaande woning.',
    responsibilities: [
      'Constructieberekening en afstemming',
      'Ondersteuning bij vergunningen',
      'Realisatie van de opbouw en dak',
      'Afwerking en aansluiting binnen de woning',
    ],
    hero: { alt: 'Opbouw op een woning door Vakvorm', ratio: '3:2', slot: 'OPBOUW' },
    seoTitle: 'Opbouw in Utrecht',
    metaDescription:
      'Opbouw in Utrecht. Een extra verdieping op uw woning, constructief doordacht en volledig verzorgd door Vakvorm.',
  },
  {
    slug: 'stucwerk',
    path: '/diensten/stucwerk',
    pillar: 'bouw',
    index: '05',
    title: 'Stucwerk',
    navLabel: 'Stucwerk',
    descriptor: 'Strakke wanden en plafonds als basis voor de afwerking.',
    intro:
      'Goed stucwerk bepaalt hoe strak een ruimte uiteindelijk oogt. Vakvorm verzorgt stucwerk als onderdeel van een groter project of als losse opdracht, met een egaal en duurzaam resultaat als uitgangspunt.',
    responsibilities: [
      'Voorbereiding en egaliseren van ondergronden',
      'Glad pleisterwerk op wanden en plafonds',
      'Sausklaar of decoratief afgewerkt',
      'Netjes aangesloten op het overige werk',
    ],
    hero: { alt: 'Strak stucwerk door Vakvorm', ratio: '4:3', slot: 'STUCWERK' },
    seoTitle: 'Stucwerk in Utrecht',
    metaDescription:
      'Stucwerk in Utrecht. Strakke wanden en plafonds, als onderdeel van uw verbouwing of als losse opdracht.',
  },
  {
    slug: 'maatwerk-interieurbouw',
    path: '/interieurbouw',
    pillar: 'interieur',
    index: '06',
    title: 'Maatwerk interieurbouw',
    navLabel: 'Maatwerk interieurbouw',
    descriptor: 'Interieur op maat, ontworpen en gemaakt tot in het detail.',
    intro:
      'Maatwerk interieurbouw is een volwaardige discipline binnen Vakvorm. Van maatwerkkasten en wandmeubels tot volledig ingerichte ruimtes: wij ontwerpen en maken interieur dat precies past — in maat, materiaal en afwerking.',
    responsibilities: [
      'Ontwerp en materiaaladvies',
      'Maatwerk in eigen beheer geproduceerd',
      'Nauwkeurige inmeting en montage',
      'Afwerking en detaillering op maat',
    ],
    hero: { alt: 'Maatwerk interieur door Vakvorm', ratio: '4:5', slot: 'INTERIEUR' },
    seoTitle: 'Maatwerk interieurbouw in Utrecht',
    metaDescription:
      'Maatwerk interieurbouw in Utrecht. Kasten, wandmeubels en interieur op maat — ontworpen en gemaakt door Vakvorm.',
  },
];

// Interieurbouw sub-services (launch scope per discovery §9/§18).
export const interieurSubServices: Service[] = [
  {
    slug: 'maatwerkkasten',
    path: '/interieurbouw/maatwerkkasten',
    pillar: 'interieur',
    index: '01',
    title: 'Maatwerkkasten',
    navLabel: 'Maatwerkkasten',
    descriptor: 'Kasten die naadloos in de ruimte opgaan.',
    intro:
      'Een maatwerkkast benut de ruimte volledig en past bij het interieur alsof hij er altijd was. Vakvorm ontwerpt en maakt kasten op maat — van inbouwkast tot vloer-tot-plafond kastwand.',
    responsibilities: [
      'Ontwerp op basis van ruimte en gebruik',
      'Productie in eigen beheer',
      'Nauwkeurige inmeting en montage',
      'Afwerking passend bij het interieur',
    ],
    hero: { alt: 'Maatwerkkast door Vakvorm', ratio: '4:5', slot: 'MAATWERKKAST' },
    seoTitle: 'Maatwerkkasten in Utrecht',
    metaDescription:
      'Maatwerkkasten in Utrecht. Inbouwkasten en kastwanden op maat, ontworpen en gemaakt door Vakvorm.',
  },
  {
    slug: 'interieur-op-maat',
    path: '/interieurbouw/interieur-op-maat',
    pillar: 'interieur',
    index: '02',
    title: 'Interieur op maat',
    navLabel: 'Interieur op maat',
    descriptor: 'Complete ruimtes, samenhangend ingericht.',
    intro:
      'Bij interieur op maat kijken we naar de ruimte als geheel: indeling, materialen en detaillering die samenhangen. Vakvorm ontwerpt en realiseert het interieur als één samenhangend geheel.',
    responsibilities: [
      'Ruimtelijk ontwerp en materiaalkeuze',
      'Maatwerk meubels en inbouw',
      'Afstemming met bouwkundig werk',
      'Montage en afwerking in één hand',
    ],
    hero: { alt: 'Interieur op maat door Vakvorm', ratio: '3:2', slot: 'INTERIEUR OP MAAT' },
    seoTitle: 'Interieur op maat in Utrecht',
    metaDescription:
      'Interieur op maat in Utrecht. Samenhangend ontworpen en gerealiseerd door Vakvorm.',
  },
  {
    slug: 'wandmeubels',
    path: '/interieurbouw/wandmeubels',
    pillar: 'interieur',
    index: '03',
    title: 'Wandmeubels',
    navLabel: 'Wandmeubels',
    descriptor: 'TV- en wandmeubels als rustig middelpunt.',
    intro:
      'Een wandmeubel op maat brengt rust en samenhang in een ruimte. Van strak TV-meubel tot volledige wandkast: Vakvorm ontwerpt en maakt wandmeubels die precies passen bij de ruimte en het gebruik.',
    responsibilities: [
      'Ontwerp afgestemd op de ruimte',
      'Productie in eigen beheer',
      'Integratie van techniek waar gewenst',
      'Montage en detaillering op maat',
    ],
    hero: { alt: 'Wandmeubel op maat door Vakvorm', ratio: '3:2', slot: 'WANDMEUBEL' },
    seoTitle: 'Wandmeubels op maat in Utrecht',
    metaDescription:
      'Wandmeubels en TV-meubels op maat in Utrecht. Ontworpen en gemaakt door Vakvorm.',
  },
];

export const bouwServices = services.filter((s) => s.pillar === 'bouw');
export const interieurService = services.find((s) => s.slug === 'maatwerk-interieurbouw')!;

export function getService(slug: string): Service | undefined {
  return [...services, ...interieurSubServices].find((s) => s.slug === slug);
}

export function serviceTitle(slug: string): string {
  return getService(slug)?.title ?? slug;
}
