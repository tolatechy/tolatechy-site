// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // The live address, used for the sitemap, canonical links and share previews.
  site: 'https://ibraheemobanla.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
