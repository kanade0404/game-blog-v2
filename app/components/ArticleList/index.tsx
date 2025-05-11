import type { BlogListQuery } from "../../../lib/api/query";
import { getArticleList } from "../../../lib/graphql/getArticleList";
import { getCategoryBlogList } from "../../../lib/graphql/getCategoryBlogList";
import ArticleList from "./ArticleList";

type Props = {
	categoryId: string | null;
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

	return <ArticleList blogs={allBlogModels} />;
};

export default Index;
