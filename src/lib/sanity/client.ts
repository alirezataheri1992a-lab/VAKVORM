import { createClient, type SanityClient } from '@sanity/client';
import { apiVersion, dataset, projectId, sanityEnabled } from './env';

// `perspective: 'published'` guarantees drafts never leak to the public site.
export const sanityClient: SanityClient | null = sanityEnabled
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: 'published',
    })
  : null;
