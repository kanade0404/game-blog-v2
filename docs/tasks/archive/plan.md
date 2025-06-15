# Storybook v9 マイグレーション計画

## 現在の状況

### 環境
- Node.js: v22.12.0 ✅ (v20+要件を満たす)
- pnpm: 10.12.1 ✅ (npm 10+要件を満たす)
- TypeScript: 5.8.3 ✅ (v4.9+要件を満たす)
- Next.js: 15.3.3 ✅ (v14+要件を満たす)

### 現在のStorybook設定
- バージョン: v8.6.14 + v9.0.8/9.0.9 (混在状態)
- 使用アドオン:
  - `@storybook/addon-viewport` (Essential addon - v9でコアに統合)
  - `@storybook/addon-actions` (Essential addon - v9でコアに統合)
  - `@storybook/addon-essentials`
  - `@storybook/addon-interactions`
  - `@storybook/addon-links`
  - `@storybook/addon-onboarding`
  - `msw-storybook-addon`

### ストーリーファイル
- CSF 3.0形式で記述済み ✅
- 4つのストーリーファイル:
  - Layout/Footer.stories.ts
  - Layout/Header.stories.ts
  - Profile/SNS.stories.ts
  - Profile/index.stories.ts

## マイグレーション計画

### フェーズ1: 自動アップグレード
1. `npx storybook@latest upgrade` を実行
2. 依存関係の自動更新を確認

### フェーズ2: 設定ファイルの確認・調整
1. `.storybook/main.ts` の設定確認
2. `.storybook/preview.ts` の設定確認
3. Essential addonsの参照を削除（コアに統合されたため）

### フェーズ3: 依存関係の整理
1. 不要になったaddonパッケージの削除
2. package.jsonの依存関係クリーンアップ
3. `pnpm install` で依存関係を再インストール

### フェーズ4: 動作確認
1. `pnpm storybook` でローカル起動確認
2. `pnpm build-storybook` でビルド確認
3. 各ストーリーが正常に表示されることを確認

### フェーズ5: Chromatic連携確認
1. Chromaticデプロイが正常に動作することを確認

## 予想される変更点

### 削除予定のパッケージ
- `@storybook/addon-viewport` → コアに統合
- `@storybook/addon-actions` → コアに統合
- 他のessential addons関連

### 設定ファイルの変更
- `.storybook/main.ts`: addons配列から統合されたaddonを削除
- `.storybook/preview.ts`: importの調整が必要な場合がある

### 潜在的な問題
- viewport addon のimport先変更の可能性
- 一部のAPIの非推奨化

## 成功基準
1. Storybookが正常に起動する
2. 既存のストーリーがすべて表示される
3. Chromaticデプロイが成功する
4. ビルドエラーが発生しない
5. 依存関係の警告が解消される

## ロールバック計画
マイグレーションに問題が発生した場合:
1. `git checkout .` で変更を取り消し
2. 元のpackage.jsonに戻す
3. `pnpm install` で依存関係を復元

## 注意事項
- 現在既にv9のパッケージが一部混在しているため、まず依存関係を統一する必要がある
- Essential addonsがコアに統合されているため、import文の変更が必要な可能性がある
- MSW addon は影響を受けないはず