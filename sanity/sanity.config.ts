import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

// Provisioning: create a project at sanity.io, then set projectId + dataset below
// (or via SANITY_STUDIO_PROJECT_ID / SANITY_STUDIO_DATASET env vars).
export default defineConfig({
  name: 'vakvorm',
  title: 'VAKVORM — Bouw & Interieur',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'REPLACE_WITH_PROJECT_ID',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Inhoud')
          .items([
            // Singleton
            S.listItem()
              .title('Site-instellingen')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.documentTypeListItem('service').title('Diensten'),
            S.documentTypeListItem('project').title('Projecten'),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
