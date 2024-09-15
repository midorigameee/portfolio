# ポートフォリオ

## コンテンツ

以下の３カテゴリを用意しようと思っている。

- プロフィール/スキル
- リポジトリ
  - Udemy や書籍の写経
  - 自身で作成した Web サイト
  - 上記をデプロイしたもの
- ブログ
  - 書評
  - 技術的な備忘録

## システム構成

デプロイ先：Github Pages
フレームワーク：Astro

## Astro について

### テーマ

下記のテンプレートを使用する。

<https://astro.build/themes/details/elkamali-portfolio-blog/>

下記のリンクを参考にして、以下のコマンドでテーマが適用された Astro プロジェクトを作成する。

`npm create astro@latest -- --template Marve10s/Elkamali-Portfolio-Template`

（参考）<https://qiita.com/Rui010/items/124b5a7e27c6b93a6595>

### GitHub Pages へのデプロイ

以下のページを参考にして、main ブランチが更新されるたびにデプロイする GitHub Actions を作成した。

<https://docs.astro.build/ja/guides/deploy/github/>
