import { getClient } from "./index";
import { BlogDocument, BlogQuery } from "../api/query";
import { cache } from "react";

export const getArticle = cache(async (id: string) =>
  getClient().query<BlogQuery>({
    query: BlogDocument,
    variables: { id: id },
    fetchPolicy: "no-cache",
  }),
);
