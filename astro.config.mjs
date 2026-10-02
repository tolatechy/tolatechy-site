// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // The live address. Change to https://tolatechy.com once the domain is connected.
  site: 'https://tolatechy.tolatechy.workers.dev',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
