import { getArticleList } from "../../../lib/graphql/getArticleList";
import ArticleList from "./ArticleList";

const Index = async () => {
	const { allBlogModels } = await getArticleList();
	if (!allBlogModels) return <p>Not Found</p>;
	return <ArticleList blogs={allBlogModels} />;
};

export default Index;
