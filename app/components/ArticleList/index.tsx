import ArticleList from "./ArticleList";
import { getArticleList } from "../../../lib/graphql/getArticleList";

const Index = async () => {
  const { allBlogModels } = await getArticleList();
  if (!allBlogModels) return <p>Not Found</p>;
  return <ArticleList blogs={allBlogModels} />;
};

export default Index;
