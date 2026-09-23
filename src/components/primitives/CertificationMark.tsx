import styles from './CertificationMark.module.css';

/**
 * Slot for the certification logo ("erkend bouwbedrijf"). Nederdam is certified; the logo
 * file has not been supplied yet, so this renders a clearly marked empty frame. When the
 * file arrives, place it in /public/brand/ and render it here as an <img> — never redraw it.
 */
export function CertificationMark({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <span className={styles.slot} data-tone={tone} title="Logo erkenning — nog aan te leveren">
      Logo erkenning
    </span>
  );
}
