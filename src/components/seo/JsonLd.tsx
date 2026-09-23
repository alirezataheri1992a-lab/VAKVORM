import { site as config } from '@/lib/site';
import { getSiteSettings } from '@/lib/content';
import type { Service, SiteSettings } from '@/lib/types';
import { areas } from '@/lib/areas';

// Structured data. Only factual fields are emitted. No AggregateRating / reviews /
// fake address — those appear only once real, verified data exists. Contact details come
// from the editor-managed site settings; the site URL is deployment config.

/** Where Nederdam works: the focus cities, and the whole country. */
const areaServed = [
  ...areas.map((a) => ({ '@type': 'City', name: a.name })),
  { '@type': 'Country', name: 'Nederland' },
];

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
        description: `${site.descriptor} — één partij voor verbouw, renovatie en maatwerk interieur in Utrecht, Rotterdam, Amsterdam en heel Nederland.`,
        url: site.baseUrl,
        email: site.email,
        telephone: `+${site.phoneHref.replace('+', '')}`,
        logo: `${site.baseUrl}/brand/nederdam-logo.svg`,
        areaServed,
        ...(site.instagram ? { sameAs: [`https://www.instagram.com/${site.instagram}/`] } : {}),
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
        description: `${settings.descriptor} in Utrecht, Rotterdam, Amsterdam en heel Nederland.`,
        url: settings.baseUrl,
        email: settings.email,
        telephone: `+${settings.phoneHref.replace('+', '')}`,
        areaServed,
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

/** A service, offered by Nederdam, in the focus cities and the rest of the country. */
export function ServiceJsonLd({ service, settings, city }: { service: Service; settings: SiteSettings; city?: string }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: city ? `${service.title} in ${city}` : service.title,
        serviceType: service.title,
        description: service.metaDescription,
        url: `${settings.baseUrl}${service.path}`,
        provider: { '@type': 'GeneralContractor', name: settings.name, url: settings.baseUrl },
        areaServed: city ? { '@type': 'City', name: city } : areaServed,
      }}
    />
  );
}

/** A city page: the contractor, serving that city. */
export function AreaJsonLd({ settings, city, path }: { settings: SiteSettings; city: string; path: string }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'GeneralContractor',
        name: settings.name,
        description: `Verbouw, renovatie en maatwerk interieur in ${city}.`,
        url: `${settings.baseUrl}${path}`,
        email: settings.email,
        telephone: `+${settings.phoneHref.replace('+', '')}`,
        areaServed: { '@type': 'City', name: city },
      }}
    />
  );
}
