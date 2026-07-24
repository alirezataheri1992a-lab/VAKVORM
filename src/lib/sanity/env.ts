// Sanity connection config. When NEXT_PUBLIC_SANITY_PROJECT_ID is unset (e.g. before
// the Studio is provisioned), `sanityEnabled` is false and the content layer falls back
// to the local development seed data — so the site always builds.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01';

export const sanityEnabled = Boolean(projectId);
