# CLAUDE.md

このファイルは、このリポジトリでのコード作業時にClaude Code (claude.ai/code) へのガイダンスを提供します。

## 言語設定
- 日本語でコミュニケーションを行う
- コードのコメントやドキュメントも日本語で記述する
- エラーメッセージや説明も日本語で提供する

## コマンド

### 開発
- `pnpm dev` - 開発サーバーを起動（最初にcodegenを実行）
- `pnpm build` - 本番用ビルド（最初にcodegenを実行）
- `pnpm start` - 本番サーバーを起動

### コード生成
- `pnpm codegen` - GraphQLの型とSCSSの型定義を生成
- `pnpm codegen:gql` - DatoCMSスキーマからGraphQLの型を生成
- `pnpm codegen:scss` - CSSモジュール用のTypeScript定義を生成

### テスト・品質管理
- `pnpm test` - Vitestでテストを実行（最初にcodegenを実行）
- `pnpm confirm` - すべてのlintとスペルチェックを実行
- `pnpm confirm:lint` - Biome linterを実行
- `pnpm confirm:spell` - TypeScriptファイルにcspellを実行
- `pnpm fix` - フォーマットとpackage.jsonを自動修正
- `pnpm fix:format` - Biome formatterで自動修正

### Storybook
- `pnpm storybook` - Storybook v9開発サーバーをポート6006で起動
- `pnpm build-storybook` - 静的Storybookをビルド
- `pnpm chromatic` - ビジュアルテスト用にChromaticへデプロイ

### バンドル解析
- `pnpm analyze` - バンドルアナライザーを有効にしてビルド

## アーキテクチャ

### GraphQL統合
- DatoCMSをヘッドレスCMSとしてGraphQL経由で利用
- GraphQL Code GeneratorがスキーマからTypeScriptの型を生成
- `https://graphql.datocms.com/`からAPI_TOKENを使用してスキーマを取得
- 生成された型とクエリ関数は`lib/api/query.ts`に配置
- GraphQLクライアントは`lib/graphql/index.ts`で設定

### Next.js App Router構造
- `app/`ディレクトリを使用したApp Routerアーキテクチャ
- CSSモジュールを使用したコンポーネントベースの構造
- コンポーネントは`app/components/`に配置、スタイルも同じ場所に配置
- ページは入れ子のレイアウトとローディング状態を使用
- CMSプレビュー用のドラフトモードAPIエンドポイント

### CSSモジュールと型安全性
- TypeScript定義が自動生成されるCSSモジュール
- `.d.ts`ファイルの生成には`pnpm codegen:scss`または`tcm app`を使用
- コンポーネント全体で型安全なCSSクラス名を使用

### エラー監視
- エラー追跡のためのSentry統合
- `sentry.client.config.ts`と`sentry.server.config.ts`で設定
- 本番ビルドでSentry webpackプラグインが実行

### テスト設定
- jsdom環境でのVitest
- Reactコンポーネントテスト用のTesting Library
- `test/setup.ts`でグローバルテスト設定
- コンポーネント開発とビジュアルテスト用のStorybook v9
- Essential addons（viewport、actions、controls等）がコアに統合済み

### プリコミットフック
- Lefthookがgitフックを管理
- ステージされたファイルに対してBiomeフォーマット・lintを自動実行
- コミット時にcspellでスペルチェック

## 主要な依存関係
- Next.js 15 with App Router
- React 19
- GraphQL with graphql-request client
- Biome for linting/formatting（ESLint/Prettierの代替）
- Vitest for testing
- Storybook v9 for component development（Essential addonsはコアに統合済み）
- TypeScript with strict configuration

## 環境設定
- Node.js 22.16.0が必要（厳密なバージョン指定）
- パッケージマネージャーはpnpmを使用
- `.env.example`を`.env`にコピーし、DatoCMSのAPI_TOKENを設定
- ビジュアルテスト用のChromaticプロジェクトトークンが必要

## ドキュメント構成

### `/docs/`
プロジェクト全体のドキュメントを集約するディレクトリ

### `/docs/tasks/`
Claude Codeによる依頼タスクの管理ディレクトリ
- **現在のタスク**: 実行中のタスクは `docs/tasks/` 直下に配置
- **完了済みタスク**: 完了後は `docs/tasks/archive/` に移動
- **ファイル構成**: 
  - `plan.md`: タスクの計画と分析
  - `task.md`: 詳細なタスクリストと完了条件

### `/docs/tasks/archive/`
完了したタスクの履歴を保管
- 過去のタスクを参考資料として保持
- プロジェクトの作業履歴を追跡可能