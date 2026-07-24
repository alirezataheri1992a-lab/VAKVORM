import type { Metadata, Viewport } from 'next';
import { sans, mono } from '@/lib/fonts';
import { site } from '@/lib/site';
import { SiteHeader } from '@/components/chrome/SiteHeader';
import { SiteFooter } from '@/components/chrome/SiteFooter';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: `${site.name} — ${site.descriptor} | Aannemer & interieurbouw ${site.city}`,
    template: `%s — ${site.name}`,
  },
  description:
    'VAKVORM is één professionele partij voor complete bouw-, renovatie- en maatwerk interieurprojecten in Utrecht en omgeving. Van planning tot oplevering.',
  applicationName: site.name,
  authors: [{ name: site.name }],
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: site.name,
    title: `${site.name} — ${site.descriptor}`,
    description:
      'Eén professionele partij voor complete bouw-, renovatie- en interieurprojecten in Utrecht.',
    url: site.baseUrl,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: '#ebe6dd',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="visually-hidden">
          Naar hoofdinhoud
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
