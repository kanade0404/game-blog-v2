import { graphQLClient } from "./index";
import { BlogListDocument, BlogListQuery } from "../api/query";
import { cache } from "react";

export const getArticleList = cache(async () =>
  graphQLClient.request<BlogListQuery>(BlogListDocument),
);
