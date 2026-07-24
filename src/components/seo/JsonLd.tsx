import { site } from '@/lib/site';

// Structured data. Only factual fields are emitted. No AggregateRating / reviews /
// fake address — those appear only once real, verified data exists.

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
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
 * a fabricated address would be worse than none).
 */
export function LocalBusinessJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'GeneralContractor',
        name: site.name,
        description: `${site.descriptor} in ${site.city}.`,
        url: site.baseUrl,
        email: site.email,
        telephone: `+${site.phoneHref.replace('+', '')}`,
        areaServed: `${site.city} en omgeving`,
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
        name: site.name,
        url: site.baseUrl,
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
          item: `${site.baseUrl}${it.path}`,
        })),
      }}
    />
  );
}
