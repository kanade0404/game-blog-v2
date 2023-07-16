import { getClient } from "./index";
import { BlogListDocument, BlogListQuery } from "../api/query";
import { cache } from "react";

export const getArticleList = cache(async () =>
  getClient().query<BlogListQuery>({ query: BlogListDocument }),
);
