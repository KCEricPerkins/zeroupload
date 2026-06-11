// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used for the sitemap and canonical URLs. Update this when the custom
  // domain is attached, and also update SITE.url in src/config.ts to match.
  site: 'https://zeroupload-26x.pages.dev',
  integrations: [sitemap()],
});
