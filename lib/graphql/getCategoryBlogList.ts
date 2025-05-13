import { cache } from "react";
import {
	CategoryBlogListDocument,
	type CategoryBlogListQuery,
} from "../api/query";
import { graphQLClient } from "./index";

export const getCategoryBlogList = cache(async (categoryId: string) =>
	graphQLClient.request<CategoryBlogListQuery>(CategoryBlogListDocument, {
		categoryId,
	}),
);
