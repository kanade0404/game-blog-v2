import { draftMode } from "next/headers";
import { cache } from "react";
import { BlogDocument, type BlogQuery, ItemStatus } from "../api/query";
import { graphQLClient } from "./index";

export const getArticle = cache(async (id: string) => {
	const { isEnabled } = draftMode();
	if (isEnabled) {
		graphQLClient.setHeader("X-Include-Drafts", "true");
		return graphQLClient.request<BlogQuery>(BlogDocument, {
			id: id,
			status: ItemStatus.Draft,
		});
	}
	return graphQLClient.request<BlogQuery>(BlogDocument, {
		id: id,
		status: ItemStatus.Published,
	});
});
