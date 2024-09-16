import { Suspense } from "react";
import { getArticleList } from "../../../lib/graphql/getArticleList";
import Loading from "../../loading";
import ArticleList from "./ArticleList";

const Index = async () => {
	const { allBlogModels } = await getArticleList();
	if (!allBlogModels) return <p>Not Found</p>;
	return (
		<Suspense fallback={<Loading />}>
			<ArticleList blogs={allBlogModels} />
		</Suspense>
	);
};

export default Index;
