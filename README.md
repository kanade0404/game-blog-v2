# Game Blog V2
![build ci](https://github.com/kanade0404/game-blog-v2/actions/workflows/ci.yml/badge.svg)
![codeql ci](https://github.com/kanade0404/game-blog-v2/actions/workflows/codeql-analysis.yml/badge.svg)
![storybook cd](https://github.com/kanade0404/game-blog-v2/actions/workflows/storybook.yml/badge.svg)

## Setup

```shell
cp .env.example .env
# If you have not yet set up an API TOKEN for DatoCMS and Chromatic project token, please get one from a member.
pnpm i && pnpm dev
```

## library

- [Next.js](https://nextjs.org/)
- [graphql](https://graphql.org/graphql-js/)
- [GraphQL Code Generator](https://www.graphql-code-generator.com/)
- [biome](https://biomejs.dev/ja/)
- [vitest](https://vitest.dev/)
- [storybook](https://storybook.js.org/)
- [Chromatic](https://www.chromatic.com/)

## Directories

```shell
tree -L 2 -d -I node_modules/ -I coverage/ -I storybook-static/
.
├── app
│   ├── api # Draft ModeのAPI
│   ├── article
│   ├── components
│   ├── privacy
│   └── profile
├── lib
│   ├── api # GraphQL CodeGeneratorの生成コード
│   ├── graphql # GraphQL API呼び出し
│   ├── schema # GraphQL schema格納先
│   └── time
├── public
├── stories
│   ├── Layout
│   └── Profile
└── test # テストに必要なセットアップコード群
```


17 directories
