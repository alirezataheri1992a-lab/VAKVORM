import type { Metadata, Viewport } from 'next';
import { sans, mono } from '@/lib/fonts';
import { getSiteSettings, getServiceGroups } from '@/lib/content';
import { SiteHeader } from '@/components/chrome/SiteHeader';
import { SiteFooter } from '@/components/chrome/SiteFooter';
import { ScrollReveal } from '@/components/chrome/ScrollReveal';
import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteSettings();
  return {
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
}

export const viewport: Viewport = {
  themeColor: '#ebe6dd',
  colorScheme: 'light',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [site, groups] = await Promise.all([getSiteSettings(), getServiceGroups()]);

  return (
    <html lang="nl" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="visually-hidden">
          Naar hoofdinhoud
        </a>
        <SiteHeader
          settings={site}
          bouwServices={groups.bouw}
          interieurService={groups.interieurHub}
          interieurSubServices={groups.interieurSubs}
        />
        <main id="main">{children}</main>
        <ScrollReveal />
        <SiteFooter />
      </body>
    </html>
  );
}
