import { notFound } from "next/navigation";
import { getArticleList } from "../../../lib/graphql/getArticleList";
import ArticleList from "./ArticleList";

const Index = async () => {
	const { allBlogModels } = await getArticleList();
	if (!allBlogModels) {
		notFound();
	}
	return <ArticleList blogs={allBlogModels} />;
};

export default Index;
