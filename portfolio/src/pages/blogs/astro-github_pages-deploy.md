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

## 設定ファイル

### astro.config.mjs

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

### deploy.yml

```yml
name: Deploy to GitHub Pages

on:
  # `main` ブランチにプッシュするたびにワークフローを実行します
  # 異なるブランチ名を使用する場合は、`main` をブランチ名に置き換えてください
  push:
    branches: [main]
  # このワークフローを GitHub の Actions タブから手動で実行できるようにします。
  workflow_dispatch:

# このジョブがリポジトリをクローンし、ページデプロイメントを作成することを許可します。
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v4
      - name: Install, build, and upload your site
        uses: withastro/action@v1
        with:
          path: ./portfolio # リポジトリ内のAstroプロジェクトのルートロケーション。(オプション)
          node-version: 22 # サイト構築に使用するNodeのバージョン。デフォルトは18です。（オプション）
          # package-manager: pnpm@latest # 依存関係のインストールとサイトのビルドに使用する Node パッケージマネージャ。ロックファイルに基づいて自動的に検出されます。(オプション)

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```
