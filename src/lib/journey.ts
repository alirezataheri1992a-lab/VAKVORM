// VAKVORM — Guided Project Intake ("Start uw project").
// The flow logic lives in code (not the CMS) so conditional branches stay reliable.
// Selectable service options map to real VAKVORM service slugs where practical.

export type Chapter = 'Project' | 'Situatie' | 'Wensen' | 'Planning' | 'Contact';
export const CHAPTERS: Chapter[] = ['Project', 'Situatie', 'Wensen', 'Planning', 'Contact'];

export interface ServiceOption {
  id: string;
  label: string;
  hint?: string;
  /** Maps to an existing VAKVORM service slug where one applies. */
  serviceSlug?: string;
}

export const serviceOptions: ServiceOption[] = [
  { id: 'complete-renovatie', label: 'Complete renovatie', hint: 'Woning volledig aanpakken', serviceSlug: 'renovatie-verbouwing' },
  { id: 'renovatie-verbouwing', label: 'Renovatie / verbouwing', serviceSlug: 'renovatie-verbouwing' },
  { id: 'badkamerrenovatie', label: 'Badkamerrenovatie', serviceSlug: 'badkamerrenovatie' },
  { id: 'aanbouw-uitbouw', label: 'Aanbouw / uitbouw', serviceSlug: 'aanbouw-uitbouw' },
  { id: 'opbouw', label: 'Opbouw', serviceSlug: 'opbouw' },
  { id: 'stucwerk', label: 'Stuc- & afbouwwerk', serviceSlug: 'stucwerk' },
  { id: 'maatwerk-interieurbouw', label: 'Maatwerk interieurbouw', serviceSlug: 'maatwerk-interieurbouw' },
  { id: 'combinatie', label: 'Combinatie van werkzaamheden' },
  { id: 'anders', label: 'Iets anders' },
];

export interface SelectOption {
  id: string;
  label: string;
}

export interface CondQuestion {
  id: string;
  /** Service option ids that make this question relevant. */
  appliesTo: string[];
  heading: string;
  help?: string;
  type: 'single' | 'multi';
  options: SelectOption[];
}

// Conditional follow-ups — kept short. A question appears only when a relevant service is
// selected. The shared "drawings" question is asked once across several services.
export const condQuestions: CondQuestion[] = [
  {
    id: 'renovatie-scope',
    appliesTo: ['complete-renovatie', 'renovatie-verbouwing'],
    heading: 'Wat wilt u ongeveer aanpakken?',
    help: 'Meerdere antwoorden mogelijk — een grove richting is genoeg.',
    type: 'multi',
    options: [
      { id: 'begane-grond', label: 'Begane grond' },
      { id: 'meerdere-verdiepingen', label: 'Meerdere verdiepingen' },
      { id: 'volledige-woning', label: 'Volledige woning' },
      { id: 'keuken-leefruimte', label: 'Keuken / leefruimte' },
      { id: 'badkamers', label: 'Badkamer(s)' },
      { id: 'indeling', label: 'Indeling wijzigen' },
      { id: 'afwerking', label: 'Afwerking' },
      { id: 'onbepaald', label: 'Nog niet volledig bepaald' },
    ],
  },
  {
    id: 'aanbouw-type',
    appliesTo: ['aanbouw-uitbouw'],
    heading: 'Wat voor uitbreiding heeft u in gedachten?',
    type: 'multi',
    options: [
      { id: 'achterzijde', label: 'Uitbouw achterzijde' },
      { id: 'zijkant', label: 'Uitbreiding zijkant' },
      { id: 'anders', label: 'Anders' },
      { id: 'onbepaald', label: 'Nog niet bepaald' },
    ],
  },
  {
    id: 'badkamer-scope',
    appliesTo: ['badkamerrenovatie'],
    heading: 'Wat wilt u laten doen?',
    type: 'multi',
    options: [
      { id: 'compleet', label: 'Complete badkamer vernieuwen' },
      { id: 'indeling', label: 'Nieuwe indeling' },
      { id: 'sanitair', label: 'Sanitair vervangen' },
      { id: 'tegelwerk', label: 'Tegelwerk / afwerking' },
      { id: 'onbepaald', label: 'Nog niet volledig bepaald' },
    ],
  },
  {
    id: 'badkamer-indeling',
    appliesTo: ['badkamerrenovatie'],
    heading: 'Wilt u de huidige indeling wijzigen?',
    type: 'single',
    options: [
      { id: 'ja', label: 'Ja' },
      { id: 'nee', label: 'Nee' },
      { id: 'weet-niet', label: 'Weet ik nog niet' },
    ],
  },
  {
    id: 'interieur-wat',
    appliesTo: ['maatwerk-interieurbouw'],
    heading: 'Wat wilt u laten maken?',
    help: 'Meerdere antwoorden mogelijk.',
    type: 'multi',
    options: [
      { id: 'maatwerkkast', label: 'Maatwerkkast' },
      { id: 'wandmeubel', label: 'Wandmeubel' },
      { id: 'tv-meubel', label: 'TV-meubel' },
      { id: 'interieur-op-maat', label: 'Interieur op maat' },
      { id: 'werkplek', label: 'Ingebouwde werkplek' },
      { id: 'roomdivider', label: 'Roomdivider' },
      { id: 'meerdere-ruimtes', label: 'Maatwerk voor meerdere ruimtes' },
      { id: 'anders', label: 'Anders' },
    ],
  },
  {
    id: 'interieur-ruimte',
    appliesTo: ['maatwerk-interieurbouw'],
    heading: 'Voor welke ruimte(s)?',
    type: 'multi',
    options: [
      { id: 'woonkamer', label: 'Woonkamer' },
      { id: 'keuken', label: 'Keuken' },
      { id: 'slaapkamer', label: 'Slaapkamer' },
      { id: 'werkkamer', label: 'Werkkamer' },
      { id: 'hal', label: 'Hal' },
      { id: 'meerdere', label: 'Meerdere ruimtes' },
      { id: 'anders', label: 'Anders' },
    ],
  },
  {
    id: 'opbouw-dak',
    appliesTo: ['opbouw'],
    heading: 'Gaat het om extra woonruimte op het bestaande dak?',
    type: 'single',
    options: [
      { id: 'ja', label: 'Ja' },
      { id: 'anders', label: 'Anders' },
      { id: 'onbepaald', label: 'Nog niet bepaald' },
    ],
  },
  {
    id: 'stuc-ruimtes',
    appliesTo: ['stucwerk'],
    heading: 'Om welke ruimtes gaat het ongeveer?',
    type: 'single',
    options: [
      { id: 'een', label: 'Eén ruimte' },
      { id: 'meerdere', label: 'Meerdere ruimtes' },
      { id: 'verdieping', label: 'Complete verdieping' },
      { id: 'woning', label: 'Volledige woning' },
      { id: 'anders', label: 'Anders / nog niet bepaald' },
    ],
  },
  {
    id: 'drawings',
    appliesTo: ['complete-renovatie', 'renovatie-verbouwing', 'aanbouw-uitbouw', 'opbouw'],
    heading: 'Heeft u al een ontwerp of tekeningen?',
    help: 'Zo ja, dan kunt u die straks toevoegen.',
    type: 'single',
    options: [
      { id: 'ja', label: 'Ja' },
      { id: 'nee', label: 'Nee' },
      { id: 'in-ontwikkeling', label: 'In ontwikkeling' },
    ],
  },
];

export const phaseOptions: SelectOption[] = [
  { id: 'orienterend', label: 'Ik ben mij nog aan het oriënteren' },
  { id: 'ongeveer', label: 'Ik weet ongeveer wat ik wil' },
  { id: 'inspiratie', label: 'Ik heb al inspiratie en voorbeelden' },
  { id: 'ontwerp', label: 'Ik heb al een ontwerp of tekeningen' },
  { id: 'uitvoering', label: 'Ik zoek een partij voor de uitvoering' },
];

export const timingOptions: SelectOption[] = [
  { id: 'asap', label: 'Zo snel mogelijk' },
  { id: '1-3', label: 'Binnen 1–3 maanden' },
  { id: '3-6', label: 'Binnen 3–6 maanden' },
  { id: '6-12', label: 'Binnen 6–12 maanden' },
  { id: 'later', label: 'Later' },
  { id: 'onbepaald', label: 'Nog niet bepaald' },
];

export const contactPreferenceOptions: SelectOption[] = [
  { id: 'telefonisch', label: 'Telefonisch' },
  { id: 'whatsapp', label: 'WhatsApp' },
  { id: 'email', label: 'E-mail' },
  { id: 'geen', label: 'Geen voorkeur' },
];

// Upload constraints (documented in /docs/project-journey.md). Validated server-side too.
export const uploadLimits = {
  maxFiles: 8,
  maxFileBytes: 10 * 1024 * 1024, // 10 MB per file
  maxTotalBytes: 25 * 1024 * 1024, // 25 MB per submission
  accept: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
  acceptAttr: 'image/jpeg,image/png,image/webp,application/pdf',
};

export interface JourneyData {
  services: string[];
  cond: Record<string, string[]>;
  postalCode: string;
  city: string;
  street: string;
  phase: string;
  description: string;
  inspirationUrl: string;
  desiredStart: string;
  deadline: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: string;
}

export function emptyJourney(): JourneyData {
  return {
    services: [],
    cond: {},
    postalCode: '',
    city: '',
    street: '',
    phase: '',
    description: '',
    inspirationUrl: '',
    desiredStart: '',
    deadline: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: '',
  };
}

export type ScreenKind =
  | 'project'
  | 'cond'
  | 'location'
  | 'phase'
  | 'situation'
  | 'plans'
  | 'timing'
  | 'contact'
  | 'review';

export interface Screen {
  id: string;
  kind: ScreenKind;
  chapter: Chapter;
  questionId?: string;
}

export function applicableCondQuestions(services: string[]): CondQuestion[] {
  return condQuestions.filter((q) => services.some((s) => q.appliesTo.includes(s)));
}

/** The ordered set of screens for the current selection. Conditional questions expand it. */
export function buildScreens(services: string[]): Screen[] {
  const screens: Screen[] = [{ id: 'project', kind: 'project', chapter: 'Project' }];
  for (const q of applicableCondQuestions(services)) {
    screens.push({ id: `cond:${q.id}`, kind: 'cond', chapter: 'Project', questionId: q.id });
  }
  screens.push({ id: 'location', kind: 'location', chapter: 'Situatie' });
  screens.push({ id: 'phase', kind: 'phase', chapter: 'Situatie' });
  screens.push({ id: 'situation', kind: 'situation', chapter: 'Situatie' });
  screens.push({ id: 'plans', kind: 'plans', chapter: 'Wensen' });
  screens.push({ id: 'timing', kind: 'timing', chapter: 'Planning' });
  screens.push({ id: 'contact', kind: 'contact', chapter: 'Contact' });
  screens.push({ id: 'review', kind: 'review', chapter: 'Contact' });
  return screens;
}

/** Remove conditional answers whose question no longer applies (avoids stale submitted data). */
export function pruneCond(data: JourneyData): JourneyData {
  const valid = new Set(applicableCondQuestions(data.services).map((q) => q.id));
  const cond: Record<string, string[]> = {};
  for (const [k, v] of Object.entries(data.cond)) if (valid.has(k)) cond[k] = v;
  return { ...data, cond };
}

export const serviceLabel = (id: string) => serviceOptions.find((s) => s.id === id)?.label ?? id;
export const condQuestion = (id: string) => condQuestions.find((q) => q.id === id);
export const optionLabel = (opts: SelectOption[], id: string) => opts.find((o) => o.id === id)?.label ?? id;

/** True Dutch postcode like "3581 AB" (space optional). International input is allowed. */
export const DUTCH_POSTCODE_RE = /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/;
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalisePostcode(v: string): string {
  const t = v.trim().toUpperCase().replace(/\s+/g, '');
  if (/^[1-9][0-9]{3}[A-Z]{2}$/.test(t)) return `${t.slice(0, 4)} ${t.slice(4)}`;
  return v.trim();
}
