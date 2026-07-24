// GROQ queries as plain strings. Only published projects are ever fetched; the client's
// `perspective: 'published'` also excludes drafts globally.
export const settingsQuery = `*[_type == "siteSettings"][0]{
  name, descriptor, email, phoneDisplay, phoneHref, city, serviceArea, addressText,
  "social": social[]{platform, url},
  defaultSeoTitle, defaultMetaDescription
}`;

export const servicesQuery = `*[_type == "service"] | order(pillar asc, index asc){
  "slug": slug.current, pillar, index, title, navLabel, descriptor, intro,
  responsibilities, seoTitle, metaDescription,
  "parentSlug": parent->slug.current,
  hero{alt, asset}
}`;

export const publishedProjectsQuery = `*[_type == "project" && published == true] | order(coalesce(year, "") desc, _createdAt desc){
  "slug": slug.current, title, published, pillar, year,
  projectType, location, propertyType, duration,
  "services": services[]->slug.current,
  objective, approach, result,
  hero{alt, asset},
  gallery[]{alt, asset, category}
}`;

export const projectBySlugQuery = `*[_type == "project" && published == true && slug.current == $slug][0]{
  "slug": slug.current, title, published, pillar, year,
  projectType, location, propertyType, duration,
  "services": services[]->slug.current,
  objective, approach, result,
  hero{alt, asset},
  gallery[]{alt, asset, category},
  "relatedProjects": relatedProjects[]->{ "slug": slug.current, title, location }
}`;
