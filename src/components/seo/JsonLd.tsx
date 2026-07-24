import { site as config } from '@/lib/site';
import { getSiteSettings } from '@/lib/content';
import type { SiteSettings } from '@/lib/types';

// Structured data. Only factual fields are emitted. No AggregateRating / reviews /
// fake address — those appear only once real, verified data exists. Contact details come
// from the editor-managed site settings; the site URL is deployment config.

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export async function OrganizationJsonLd() {
  const site = await getSiteSettings();
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: site.name,
        description: `${site.descriptor} — één professionele partij voor bouw, renovatie en maatwerk interieurbouw in ${site.city}.`,
        url: site.baseUrl,
        email: site.email,
        telephone: `+${site.phoneHref.replace('+', '')}`,
        areaServed: `${site.city} en omgeving`,
      }}
    />
  );
}

/**
 * LocalBusiness is emitted only with verifiable fields. `address` is intentionally
 * omitted until the owner confirms a public business address (schema allows this;
 * a fabricated address would be worse than none). Settings are passed in by the caller,
 * which already resolves them for the page.
 */
export function LocalBusinessJsonLd({ settings }: { settings: SiteSettings }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'GeneralContractor',
        name: settings.name,
        description: `${settings.descriptor} in ${settings.city}.`,
        url: settings.baseUrl,
        email: settings.email,
        telephone: `+${settings.phoneHref.replace('+', '')}`,
        areaServed: `${settings.city} en omgeving`,
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: config.name,
        url: config.baseUrl,
        inLanguage: 'nl-NL',
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((it, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: it.name,
          item: `${config.baseUrl}${it.path}`,
        })),
      }}
    />
  );
}
