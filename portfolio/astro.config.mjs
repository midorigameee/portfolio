// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig(
  {
    integrations: [tailwind()],
    site: 'https://midorigameee.github.io',
    base: '/portfolio_astro/',
    // trailingSlash: 'never',
    // build: {
    //   // 例: ビルド時に`page/index.html`ではなく`page.html`を生成します。
    //   format: 'file',
    // },
  }, // your configuration options here...
  // https://docs.astro.build/en/reference/configuration-reference/
);
