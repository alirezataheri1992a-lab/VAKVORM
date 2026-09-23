import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container section" style={{ minHeight: '60vh' }}>
      <span className="label">404 — pagina niet gevonden</span>
      <h1 className="display" style={{ marginTop: '32px', maxWidth: '12ch' }}>
        Deze pagina bestaat niet.
      </h1>
      <p className="lede" style={{ marginTop: '24px' }}>
        Mogelijk is de link verouderd of verplaatst.
      </p>
      <p style={{ marginTop: '36px' }}>
        <Link href="/" className="textlink">
          Terug naar home
        </Link>
      </p>
    </section>
  );
}
