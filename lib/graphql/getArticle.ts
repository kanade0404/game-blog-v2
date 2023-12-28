import { cache } from "react";
import { BlogDocument, BlogQuery } from "../api/query";
import { graphQLClient } from "./index";

export const getArticle = cache(async (id: string) =>
	graphQLClient.request<BlogQuery>(BlogDocument, { id: id }),
);
