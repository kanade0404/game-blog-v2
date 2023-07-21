import { graphQLClient } from "./index";
import { BlogDocument, BlogQuery } from "../api/query";
import { cache } from "react";

export const getArticle = cache(async (id: string) =>
  graphQLClient.request<BlogQuery>(BlogDocument, { id: id }),
);
