import type { Metadata, Viewport } from 'next';
import { sans } from '@/lib/fonts';
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
      default: `Aannemer Utrecht, Rotterdam & Amsterdam | ${site.name}`,
      template: `%s — ${site.name}`,
    },
    description:
      'Verbouw, renovatie, badkamers, aanbouw en maatwerk interieur uit eigen werkplaats. In Utrecht, Rotterdam, Amsterdam en heel Nederland. Vraag een offerte aan.',
    applicationName: site.name,
    authors: [{ name: site.name }],
    openGraph: {
      type: 'website',
      locale: 'nl_NL',
      siteName: site.name,
      title: `${site.name} — ${site.descriptor}`,
      description:
        'Verbouw, renovatie en maatwerk interieur in Utrecht, Rotterdam, Amsterdam en heel Nederland.',
      url: site.baseUrl,
    },
    robots: { index: true, follow: true },
    alternates: { canonical: '/' },
  };
}

export const viewport: Viewport = {
  themeColor: '#0e0e0e',
  colorScheme: 'light',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [site, groups] = await Promise.all([getSiteSettings(), getServiceGroups()]);

  return (
    <html lang="nl" className={sans.variable}>
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
