// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://USERNAME.github.io',
  base: '/mala-mlekara-janic',
  integrations: [tailwind()],
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto'
  }
});
