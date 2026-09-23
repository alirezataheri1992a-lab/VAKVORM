// Werkgebied. Nederdam works throughout the Netherlands; Utrecht, Rotterdam and Amsterdam
// are the focus cities and get their own page. City pages carry only general, verifiable
// context about building in that city — never invented projects, counts or local claims.
// Projects published in a city appear on its page automatically (matched on location).

export interface Area {
  slug: string;
  name: string;
  province: string;
  /** One sentence under the H1. */
  intro: string;
  /** Housing stock the work typically meets there — general, not a claim of experience. */
  housing: string;
  /** Practical points that shape a building project in this city. */
  notes: { title: string; text: string }[];
  /** Surrounding places, also served. */
  nearby: string[];
}

export const areaSummary = 'Utrecht, Rotterdam, Amsterdam en heel Nederland';

export const areas: Area[] = [
  {
    slug: 'utrecht',
    name: 'Utrecht',
    province: 'Utrecht',
    intro:
      'Verbouw, renovatie en maatwerk interieur in Utrecht en omgeving — met één vast aanspreekpunt en een eigen werkplaats voor het maatwerk.',
    housing:
      'Van negentiende-eeuwse arbeiderswoningen en jaren-30-huizen tot naoorlogse wijken en nieuwbouw: elke woning vraagt een eigen aanpak, van fundering en installaties tot indeling en afwerking.',
    notes: [
      {
        title: 'Binnenstad en monumenten',
        text: 'In de binnenstad en bij monumenten gelden extra regels. Waar een vergunning nodig is, nemen we dat vroeg mee in de planning.',
      },
      {
        title: 'Bereikbaarheid en leveringen',
        text: 'Venstertijden en een milieuzone in de binnenstad vragen om een strakke planning van leveringen en afvoer.',
      },
      {
        title: 'Container of steiger op straat',
        text: 'Voor een container of steiger op de openbare weg is meestal toestemming van de gemeente nodig. Dat hoort bij de voorbereiding.',
      },
    ],
    nearby: ['Nieuwegein', 'Zeist', 'Houten', 'De Bilt', 'IJsselstein', 'Maarssen'],
  },
  {
    slug: 'rotterdam',
    name: 'Rotterdam',
    province: 'Zuid-Holland',
    intro:
      'Verbouw, renovatie en maatwerk interieur in Rotterdam en omgeving — met één vast aanspreekpunt en een eigen werkplaats voor het maatwerk.',
    housing:
      'Van vooroorlogse herenhuizen en portiekwoningen tot wederopbouwwijken en nieuwbouw: Rotterdam kent een breed woningbestand, elk met eigen aandachtspunten.',
    notes: [
      {
        title: 'Fundering en bodem',
        text: 'Op de slappe bodem staan woningen vaak op palen. Bij een aanbouw of opbouw is onderzoek naar de fundering en constructie een vast onderdeel van de voorbereiding.',
      },
      {
        title: 'Appartementen en VvE',
        text: 'In appartementsgebouwen is voor sommige wijzigingen toestemming van de VvE nodig. Dat stemmen we af voordat het werk begint.',
      },
      {
        title: 'Container of steiger op straat',
        text: 'Voor een container of steiger op de openbare weg is meestal toestemming van de gemeente nodig. Dat hoort bij de voorbereiding.',
      },
    ],
    nearby: ['Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Barendrecht', 'Ridderkerk', 'Krimpen aan den IJssel'],
  },
  {
    slug: 'amsterdam',
    name: 'Amsterdam',
    province: 'Noord-Holland',
    intro:
      'Verbouw, renovatie en maatwerk interieur in Amsterdam en omgeving — met één vast aanspreekpunt en een eigen werkplaats voor het maatwerk.',
    housing:
      'Van grachtenpanden en negentiende-eeuwse etagewoningen tot Amsterdamse School en nieuwbouw: veel woningen zijn compact, waardoor slimme indeling en maatwerk het verschil maken.',
    notes: [
      {
        title: 'Monumenten en beschermd stadsgezicht',
        text: 'In de oude stad zijn veel panden monument of liggen ze in beschermd stadsgezicht. Waar een vergunning nodig is, nemen we dat vroeg mee in de planning.',
      },
      {
        title: 'Appartementen en VvE',
        text: 'Bij etagewoningen gelden vaak afspraken van de VvE, bijvoorbeeld over geluidsisolatie van vloeren. Dat stemmen we af voordat het werk begint.',
      },
      {
        title: 'Logistiek in smalle straten',
        text: 'Leveringen, afvoer en een container op straat vragen in de stad extra planning en meestal toestemming van de gemeente.',
      },
    ],
    nearby: ['Amstelveen', 'Diemen', 'Zaandam', 'Purmerend', 'Ouder-Amstel', 'Landsmeer'],
  },
];

/** The twelve provinces — the werkgebied is the whole country. */
export const provinces = [
  'Drenthe',
  'Flevoland',
  'Friesland',
  'Gelderland',
  'Groningen',
  'Limburg',
  'Noord-Brabant',
  'Noord-Holland',
  'Overijssel',
  'Utrecht',
  'Zeeland',
  'Zuid-Holland',
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
