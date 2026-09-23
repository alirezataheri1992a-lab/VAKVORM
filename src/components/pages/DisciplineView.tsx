import Link from 'next/link';
import type { Service, SiteSettings } from '@/lib/types';
import { Breadcrumbs } from '@/components/primitives/Breadcrumbs';
import { SectionMarker } from '@/components/primitives/SectionMarker';
import { ProjectMedia } from '@/components/primitives/ProjectMedia';
import { ServiceIndex } from '@/components/sections/ServiceIndex';
import { ContactPanel } from '@/components/sections/ContactPanel';
import { Logo } from '@/components/chrome/Logo';
import styles from './DisciplineView.module.css';

interface Props {
  pillar: 'bouw' | 'interieur';
  /** The services listed under this discipline. */
  services: Service[];
  /** Interieur: the discipline page's own content record (Bouw has none). */
  hub?: Service;
  site: SiteSettings;
}

const COPY = {
  bouw: {
    index: '01',
    name: 'Bouw',
    statement: 'Bouwen aan wat blijft.',
    lede: 'Complete renovaties, verbouwingen, badkamers, aan- en uitbouw, opbouw en stucwerk — één partij die plant, coördineert en oplevert.',
    body: 'Bouwen is precisiewerk met veel disciplines. Nederdam neemt het volledige traject op zich: van constructieve voorbereiding en vergunning tot de coördinatie van alle vakmensen en de uiteindelijke oplevering. Eén aanspreekpunt, één verantwoordelijke partij.',
    materials: [
      { slot: 'Beton — ruwbouw', ratio: '4:5' as const },
      { slot: 'Metselwerk — detail', ratio: '1:1' as const },
      { slot: 'Constructie — dak', ratio: '3:2' as const },
    ],
    other: { label: 'Ook een interieur op maat?', path: '/interieur', link: 'Naar Interieur' },
    contact: 'Een bouwproject bespreken?',
  },
  interieur: {
    index: '02',
    name: 'Interieur',
    statement: 'Ruimte, tot in het detail gemaakt.',
    lede: 'Maatwerkkasten, wandmeubels en complete interieurs — ontworpen en in eigen beheer gemaakt, in hout, fineer en zorgvuldig afgewerkte verbindingen.',
    body: '',
    materials: [
      { slot: 'Eiken — fineer', ratio: '4:5' as const },
      { slot: 'Verbinding — detail', ratio: '1:1' as const },
      { slot: 'Kastwand — ruimte', ratio: '3:2' as const },
    ],
    other: { label: 'Ook bouwkundig werk nodig?', path: '/bouw', link: 'Naar Bouw' },
    contact: 'Een interieur op maat?',
  },
};

/**
 * Discipline page. Both disciplines use this one composition; the tone, the accent and
 * the reading order of the opening change with the pillar, so the two pages are clearly
 * related and clearly not the same page.
 */
export async function DisciplineView({ pillar, services, hub, site }: Props) {
  const c = COPY[pillar];
  const body = hub?.intro || c.body;
  const lede = hub?.descriptor ? `${hub.descriptor} ${c.lede}` : c.lede;

  return (
    <div data-pillar={pillar}>
      {/* opening */}
      <section className={`container ${styles.open}`} data-flip={pillar === 'interieur'}>
        <Breadcrumbs items={[{ name: c.name, path: `/${pillar}` }]} />
        <div className={`grid12 ${styles.openGrid}`}>
          <div className={styles.openText}>
            <span className={styles.openBrand}>
              <Logo variant="mark" mark={pillar === 'bouw' ? 'bronze' : 'olive'} height={44} decorative />
              <span className={`label ${styles.openMark}`}>
                {c.index} · Nederdam {c.name}
              </span>
            </span>
            <h1 className={`display ${styles.openTitle}`}>{c.statement}</h1>
            <p className={`lede ${styles.openLede}`}>{lede}</p>
          </div>
          <ProjectMedia
            className={styles.openMedia}
            media={{ alt: `${c.name} door Nederdam`, ratio: '4:5', slot: pillar === 'bouw' ? 'Bouw — uitvoering' : 'Interieur — kastwand' }}
            priority
            sizes="(max-width: 900px) 100vw, 40vw"
          />
        </div>
      </section>

      {/* the discipline in one paragraph, edge-aligned to the right */}
      <section className={`container ${styles.about}`}>
        <div className="grid12">
          <SectionMarker label="De discipline" />
          <p className={`${styles.aboutText}`}>{body}</p>
        </div>
      </section>

      {/* materials: three fields, three ratios, edge to edge */}
      <section className={`${pillar === 'bouw' ? 'on-dark' : 'on-stone'} ${styles.materials}`}>
        <div className={`container ${styles.materialsInner}`}>
          <div className={styles.materialsHead}>
            <SectionMarker label="Materiaal" tone={pillar === 'bouw' ? 'ink' : 'default'} />
            <p className={styles.materialsNote}>
              {pillar === 'bouw'
                ? 'Beton, metselwerk, hout en staal — constructief doordacht en netjes aangesloten op wat er al staat.'
                : 'Massief hout, fineer, lak en linoleum — gekozen op gebruik en afwerking, gemaakt om lang mee te gaan.'}
            </p>
          </div>
          <div className={styles.materialsRow}>
            {c.materials.map((m) => (
              <ProjectMedia
                key={m.slot}
                media={{ alt: m.slot, ratio: m.ratio, slot: m.slot }}
                tone={pillar === 'bouw' ? 'taupe' : 'linen'}
                sizes="(max-width: 700px) 100vw, 33vw"
              />
            ))}
          </div>
        </div>
      </section>

      {/* index of services */}
      <section className={`container ${styles.index}`}>
        <div className={styles.indexHead}>
          <SectionMarker label={pillar === 'bouw' ? 'Diensten' : 'Specialisaties'} />
        </div>
        <ServiceIndex items={services} />
      </section>

      {/* the other discipline, one line */}
      <section className={`container ${styles.other}`}>
        <div className={styles.otherRow}>
          <span className={`heading ${styles.otherText}`}>{c.other.label}</span>
          <Link href={c.other.path} className="textlink">
            {c.other.link}
          </Link>
        </div>
      </section>

      <ContactPanel
        heading={c.contact}
        body={`Vertel kort wat u wilt realiseren in ${site.city} of omgeving. We nemen contact op om het project vrijblijvend te bespreken.`}
      />
    </div>
  );
}
