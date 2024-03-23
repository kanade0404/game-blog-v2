import { cache } from "react";
import { BlogListDocument, type BlogListQuery } from "../api/query";
import { graphQLClient } from "./index";

export const getArticleList = cache(async () =>
	graphQLClient.request<BlogListQuery>(BlogListDocument),
);
