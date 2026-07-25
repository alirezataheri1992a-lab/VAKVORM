import Link from 'next/link';
import { SectionMarker } from '@/components/primitives/SectionMarker';

export default function NotFound() {
  return (
    <section className="container section" style={{ minHeight: '60vh' }}>
      <SectionMarker index="404" label="Pagina niet gevonden" />
      <h1 className="display" style={{ marginTop: '40px', maxWidth: '16ch' }}>
        Deze pagina bestaat niet.
      </h1>
      <p className="lede" style={{ marginTop: '24px' }}>
        Mogelijk is de link verouderd of verplaatst.
      </p>
      <p style={{ marginTop: '32px' }}>
        <Link href="/" style={{ borderBottom: '1px solid var(--ink)', paddingBottom: '2px', fontWeight: 500 }}>
          Terug naar home
        </Link>
      </p>
    </section>
  );
}
