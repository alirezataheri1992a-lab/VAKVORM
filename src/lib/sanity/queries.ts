// GROQ queries as plain strings. Only published projects are ever fetched; the client's
// `perspective: 'published'` also excludes drafts globally, so drafts can never leak.

export const settingsQuery = `*[_type == "siteSettings"][0]{
  name, descriptor, email, phoneDisplay, phoneHref, city, serviceArea, addressText
}`;

export const servicesQuery = `*[_type == "service"] | order(pillar asc, index asc){
  "slug": slug.current, pillar, index, title, navLabel, descriptor, intro,
  responsibilities, seoTitle, metaDescription,
  "parentSlug": parent->slug.current,
  hero{alt, asset}
}`;

// Ordering: editor-chosen order first (homepageOrder), then newest year, then newest created.
const projectProjection = `
  "slug": slug.current, title, published, pillar, year,
  projectType, location, propertyType, duration,
  "services": services[]->slug.current,
  objective, approach, result,
  seoTitle, metaDescription,
  hero: heroImage{alt, asset},
  gallery[]{alt, asset, caption}
`;

export const publishedProjectsQuery = `*[_type == "project" && published == true]
  | order(coalesce(homepageOrder, 9999) asc, coalesce(year, "") desc, _createdAt desc){
  ${projectProjection}
}`;

export const projectBySlugQuery = `*[_type == "project" && published == true && slug.current == $slug][0]{
  ${projectProjection}
}`;

// Slugs of published projects only — used for static generation.
export const projectSlugsQuery = `*[_type == "project" && published == true].slug.current`;
