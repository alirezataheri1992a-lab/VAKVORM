// The nieuwbouw buyer's journey — from the drawing to the first evening at home. This is the
// one place the journey is written; the /nieuwbouw page renders it and the homepage only
// lists the step titles. It is told from the buyer's side (what happens, what you would
// otherwise arrange yourself, what Nederdam takes over) — the general method is /werkwijze.
//
// Only measuring and the handover belong to every project; every other step is the client's
// choice — the page lets visitors compose their own route and passes it to the intake.
//
// Confirmed by the owner: much is done in-house, the rest through a fixed network of trusted
// specialists; design is arranged by Nederdam; Nederdam can advise on meer- en minderwerk
// before the keys; own workshop; warranty. The moving step is an idea still in development
// and is tracked in docs/content-status.md.

export type Discipline = 'bouw' | 'interieur';

/** A layer of the floor-plan drawing that a step adds (see NieuwbouwPlan). */
export type PlanLayer = 'drawing' | 'design' | 'measure' | 'finish' | 'wet' | 'joinery' | 'handover' | 'home';

export interface JourneyStep {
  id: string;
  /** True for the steps that belong to every project; the others are the client's choice. */
  required: boolean;
  /** Answers of the intake's 'Waar kunnen we u mee helpen?' question this step stands for. */
  scope: string[];
  /** Optional extra line that makes the choice explicit. */
  note?: string;
  /** Short name, used in the progress rail and on the homepage. */
  title: string;
  /** Which discipline leads this step — sets the accent colour. */
  discipline: Discipline;
  layer: PlanLayer;
  /** What happens in this step. */
  happens: string;
  /** Who you would otherwise have to find and coordinate yourself. */
  yourself: string[];
  /** What Nederdam takes over. */
  nederdam: string;
  /** Existing service pages that go deeper — linked, never repeated. */
  links?: { label: string; href: string }[];
}

export const journey: JourneyStep[] = [
  {
    id: 'voor-de-sleutel',
    required: false,
    scope: ['meer-minderwerk'],
    title: 'Voor de sleutel',
    discipline: 'bouw',
    layer: 'drawing',
    happens:
      'U heeft de tekeningen en de keuzelijst van de projectontwikkelaar. Nu wordt bepaald wat de ontwikkelaar maakt en wat u zelf laat doen.',
    yourself: ['Meer- en minderwerk uitzoeken', 'Offertes van de ontwikkelaar vergelijken'],
    nederdam:
      'We kijken met u mee naar de tekeningen en het meer- en minderwerk, zodat u alleen laat doen wat klopt en niets dubbel betaalt.',
  },
  {
    id: 'ontwerp',
    required: false,
    scope: ['ontwerp'],
    title: 'Ontwerp & plan',
    discipline: 'interieur',
    layer: 'design',
    happens:
      'Van een kale plattegrond naar een woning die bij u past: indeling, materialen, kleuren, licht en maatwerk.',
    yourself: ['Showrooms en inspiratie', 'Losse adviezen per onderdeel'],
    nederdam:
      'We werken uw wensen uit tot één ontwerp en één plan, met één offerte en één planning die op de sleuteldatum is afgestemd.',
    links: [{ label: 'Interieur op maat', href: '/interieur/interieur-op-maat' }],
  },
  {
    id: 'sleutel',
    required: true,
    scope: [],
    title: 'Sleutel & inmeten',
    discipline: 'bouw',
    layer: 'measure',
    happens: 'U krijgt de sleutel van een kale woning. Nu kan er gemeten worden wat eerst alleen op tekening stond.',
    yourself: ['Iedere vakman apart laten inmeten'],
    nederdam: 'We meten de hele woning in één keer in, zodat de afwerking en het maatwerk op de millimeter kloppen.',
  },
  {
    id: 'afbouw',
    required: false,
    scope: ['wanden-plafonds', 'vloeren', 'schilder-behang', 'elektra'],
    note: 'Ook per onderdeel: alleen de vloeren of alleen het stucwerk kan ook.',
    title: 'Afbouw',
    discipline: 'bouw',
    layer: 'finish',
    happens: 'Wanden, plafonds, vloeren, schilderwerk, elektra, deuren en trap: de woning wordt afgewerkt.',
    yourself: ['Stukadoor', 'Vloerlegger', 'Schilder', 'Behanger', 'Elektricien', 'Timmerman'],
    nederdam:
      'Onze eigen vakmensen en ons vaste netwerk van specialisten werken in één planning, in de juiste volgorde.',
    links: [{ label: 'Stucwerk', href: '/bouw/stucwerk' }],
  },
  {
    id: 'badkamer-keuken',
    required: false,
    scope: ['badkamer', 'keuken'],
    title: 'Badkamer & keuken',
    discipline: 'bouw',
    layer: 'wet',
    happens: 'Tegelwerk, sanitair en installaties in badkamer en toilet; de keuken wordt geplaatst en aangesloten.',
    yourself: ['Tegelzetter', 'Installateur', 'Keukenmonteur'],
    nederdam: 'Leidingwerk, tegelwerk en plaatsing sluiten op elkaar aan, omdat één partij ze plant en controleert.',
    links: [{ label: 'Badkamerrenovatie', href: '/bouw/badkamerrenovatie' }],
  },
  {
    id: 'interieur',
    required: false,
    scope: ['maatwerk'],
    note: 'Los af te nemen, of helemaal niet. Uw woning is ook zonder maatwerk klaar.',
    title: 'Interieur op maat',
    discipline: 'interieur',
    layer: 'joinery',
    happens: 'Kasten, wandmeubels en ander maatwerk maken de woning af en compleet.',
    yourself: ['Interieurbouwer', 'Meubelmaker'],
    nederdam: 'Het maatwerk maken we in onze eigen werkplaats en monteren we zelf — passend op de afwerking die we net hebben gemaakt.',
    links: [
      { label: 'Maatwerkkasten', href: '/interieur/maatwerkkasten' },
      { label: 'Wandmeubels', href: '/interieur/wandmeubels' },
    ],
  },
  {
    id: 'oplevering',
    required: true,
    scope: [],
    title: 'Oplevering & garantie',
    discipline: 'bouw',
    layer: 'handover',
    happens: 'Alles wordt gecontroleerd en afgewerkt, tot en met de laatste details.',
    yourself: ['Per partij een eigen opleverlijst en garantie'],
    nederdam: 'Eén oplevering, één puntenlijst en garantie op ons werk — met één aanspreekpunt als er later iets is.',
  },
  {
    id: 'verhuizen',
    required: false,
    scope: ['verhuizing'],
    title: 'Verhuizen & thuis',
    discipline: 'interieur',
    layer: 'home',
    happens: 'De woning is klaar. Nu kunt u verhuizen en er echt wonen.',
    yourself: ['Verhuizer'],
    nederdam: 'Desgewenst stemmen we de verhuizing af op de oplevering, zodat u op de dag dat alles klaar is kunt verhuizen.',
  },
];

/** Everyone a buyer would otherwise find, brief and coordinate — derived from the journey. */
export const tradesYourself: string[] = [
  'Stukadoor',
  'Vloerlegger',
  'Schilder',
  'Behanger',
  'Elektricien',
  'Timmerman',
  'Tegelzetter',
  'Installateur',
  'Keukenmonteur',
  'Interieurbouwer',
  'Verhuizer',
];

export const nieuwbouwFaq: { q: string; a: string }[] = [
  {
    q: 'Wanneer schakel ik Nederdam het beste in?',
    a: 'Zo vroeg mogelijk — het liefst zodra u de tekeningen en de keuzelijst van de projectontwikkelaar heeft. Dan kunnen we meekijken met het meer- en minderwerk en de planning afstemmen op uw sleuteldatum.',
  },
  {
    q: 'Kijken jullie mee met het meer- en minderwerk van de ontwikkelaar?',
    a: 'Ja. We kijken met u mee wat u via de ontwikkelaar laat doen en wat beter daarna kan, zodat u niets dubbel betaalt.',
  },
  {
    q: 'Doet Nederdam alles zelf?',
    a: 'Veel doen we met onze eigen vakmensen. Voor specialismen zoals vloeren en behang werken we met een vast netwerk van betrouwbare vakmensen. U heeft in alle gevallen één aanspreekpunt: ons.',
  },
  {
    q: 'Heb ik een vergunning nodig?',
    a: 'Voor het afwerken en inrichten van de woning meestal niet. Voor bijvoorbeeld een uitbouw vaak wel. Is er een vergunning nodig, dan verzorgen wij de aanvraag.',
  },
];
