---
layout: ../../layouts/Blog.astro
title: 'Astroで本番環境と開発環境のURLのズレ問題を解決する'
subtitle: ''
poster: '/images/astro.jpg'
---

# Astroで本番環境と開発環境のURLのズレ問題を解決する

## 事象

本番環境であるGitHub PagesではURLが「https://<ユーザー名>.github.io/<リポジトリ名>」になり、WebサーバーのルートはこのURLになる。

[Astro公式ドキュメント](https://docs.astro.build/ja/guides/deploy/github/)によると、以下の理由でastro.config.mjsにbaseオプションでリポジトリ名を設定しないといけない。

> base には、/my-repo のように、スラッシュで始まるリポジトリ名を指定します。これは、Astro があなたのウェブサイトのルートがデフォルトの / ではなく my-repo であることを理解するためです。

しかし、この設定の状態で開発環境で`npm run dev`でサーバーを立てようとすると、ローカルのサーバのルートが「localhost:4321/<リポジトリ名>」になってしまい、開発環境のルーティングがうまく機能しなくなってしまう。

## 解決策

baseオプションを本番環境のみで使用する設定にする。

### やり方

1. `astro.config.mjs`の修正
   baseオプションを以下のように修正する。

   ```javascript
   base: isProduction ? '/portfolio/' : '',
   ```

2. Node.jsの型定義をインストールする

   ```bash
   npm install --save-dev @types/node
   ```

3. TypeScriptの設定を修正する

   ```json
   {
     "compilerOptions": {
       "types": ["@types/node"], // Nodeの型を使用
       "moduleResolution": "node",
       "target": "esnext",
       "module": "esnext",
       "strict": true,
       "jsx": "preserve"
     }
   }
   ```
