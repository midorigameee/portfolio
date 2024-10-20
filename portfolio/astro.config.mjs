// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// 本番環境のみtrue
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://midorigameee.github.io',
  base: isProduction ? '/portfolio_astro/' : '',
  trailingSlash: 'never',
});
