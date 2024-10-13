// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://midorigameee.github.io',
  base: '/portfolio_astro/',
  trailingSlash: 'never',
});
