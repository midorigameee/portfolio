// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig(
  {
    integrations: [tailwind()],
    site: 'https://midorigameee.github.io',
    base: '/portfolio_astro',
    root: './portfolio',
    publicDir: './portfolio/public',
    srcDir: './portfolio/src',
    outDir: './portfolio/dist',
    cacheDir: './portfolio/node_modules/.astro',
  }, // your configuration options here...
  // https://docs.astro.build/en/reference/configuration-reference/
);
