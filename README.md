# Game Blog V2
![build ci](https://github.com/kanade0404/game-blog-v2/actions/workflows/ci.yml/badge.svg)
![build ci](https://github.com/kanade0404/game-blog-v2/actions/workflows/codeql-analysis.yml/badge.svg)
![build ci](https://github.com/kanade0404/game-blog-v2/actions/workflows/storybook.yml/badge.svg)

## Setup

```shell
cp .env.example .env
# If you have not yet set up an API TOKEN for DatoCMS and Chromatic project token, please get one from a member.
yarn && yarn dev
```

## library

- [Next.js](https://nextjs.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [chakra-ui](https://chakra-ui.com/)
- [GraphQL Code Generator](https://www.graphql-code-generator.com/)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [jest](https://jestjs.io/)
- [storybook](https://storybook.js.org/)
- [Chromatic](https://www.chromatic.com/)

## Directories

```shell
tree -L 2 -d -I node_modules/ -I coverage/ -I storybook-static/
.
├── libs
│   ├── api # GraphQL CodeGeneratorの生成コード
│   ├── apolloClient # Apollo Client
│   └── schema # GraphQL schema格納先
├── pages # Next.jsのページ
├── stories # storybookのstory格納先
│   └── assets # storyのassetsの格納先
└── test # テストコードの格納先（一時的）
```
