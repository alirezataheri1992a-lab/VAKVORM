import { siteSettings } from './siteSettings';
import { service } from './service';
import { project } from './project';

// Only the content types the website actually renders are registered. Testimonials are
// deferred until a real, consent-based reviews surface is designed (the visual system
// currently has no place for them, and VAKVORM never publishes fabricated reviews).
export const schemaTypes = [siteSettings, service, project];
