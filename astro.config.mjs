// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
    },

  integrations: [react()],
  site: 'https://yunagi0911.github.io',
  base: '/Githubpage-test',
  adapter: netlify(),
});