---
layout: ../../layouts/Blog.astro
title: 'AstroをGitHub Pagesにデプロイする'
subtitle: ''
poster: '/images/astro.jpg'
---

# AstroをGitHub Pagesにデプロイする

デプロイ時に詰まったところなどを書いていきます。

## フォルダ構成

今回のフォルダ構成は以下になります。（一部抜粋）

```
portfolio_astro/(リポジトリ名)/
├── .devcontainer
│   └── devcontainer.json
├── .github
├── portfolio/
│   ├── src/
│   │   └── // Astroのソース
│   ├── astro.config.mjs
│   └── package.json
└── Dockerfile
```

## astro.config.mjs

```JavaScript
// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://midorigameee.github.io',
  base: '/portfolio_astro/',
  trailingSlash: 'never',
});

```
