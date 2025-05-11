import { Suspense } from "react";
import { getArticleList } from "../../../lib/graphql/getArticleList";
import { getCategoryBlogList } from "../../../lib/graphql/getCategoryBlogList";
import Loading from "../../loading";
import ArticleList from "./ArticleList";

type Props = {
	categoryId?: string;
};

const Index = async ({ categoryId }: Props) => {
	let allBlogModels;
	
	if (categoryId) {
		const result = await getCategoryBlogList(categoryId);
		allBlogModels = result.allBlogModels;
	} else {
		const result = await getArticleList();
		allBlogModels = result.allBlogModels;
	}
	
	if (!allBlogModels) return <p>Not Found</p>;
	
	return (
		<Suspense fallback={<Loading />}>
			<ArticleList blogs={allBlogModels} />
		</Suspense>
	);
};

export default Index;
