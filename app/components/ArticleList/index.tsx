import { Suspense } from "react";
import { getArticleList } from "../../../lib/graphql/getArticleList";
import { getCategoryBlogList } from "../../../lib/graphql/getCategoryBlogList";
import Loading from "../../loading";
import ArticleList from "./ArticleList";
import type { BlogListQuery } from "../../../lib/api/query";

type Props = {
	categoryId?: string;
};

const Index = async ({ categoryId }: Props) => {
	let allBlogModels: BlogListQuery["allBlogModels"] = [];
	
	if (categoryId) {
		const result = await getCategoryBlogList(categoryId);
		allBlogModels = result.allBlogModels || [];
	} else {
		const result = await getArticleList();
		allBlogModels = result.allBlogModels || [];
	}
	
	if (!allBlogModels || allBlogModels.length === 0) return <p>Not Found</p>;
	
	return (
		<Suspense fallback={<Loading />}>
			<ArticleList blogs={allBlogModels} />
		</Suspense>
	);
};

export default Index;
