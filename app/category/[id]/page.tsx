import type { Metadata } from "next";
import { getArticleList } from "../../../lib/graphql/getArticleList";
import { getCategoryList } from "../../../lib/graphql/getCategoryList";
import ArticleList from "../../components/ArticleList/ArticleList";
import styles from "./category.module.css";

type CategoryParams = {
  id: string;
};

type Props = {
  params: CategoryParams;
  searchParams: Record<string, string | string[] | undefined>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { allCategoryModels } = await getCategoryList();
  const category = allCategoryModels?.find((cat) => cat.id === params.id);
  
  if (!category) return {};
  
  return {
    title: `${category.name}の記事一覧`,
    description: `${category.name}に関する記事一覧です。`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { allBlogModels } = await getArticleList();
  const { allCategoryModels } = await getCategoryList();
  
  const category = allCategoryModels?.find((cat) => cat.id === params.id);
  
  if (!category) return <p>カテゴリーが見つかりませんでした。</p>;
  
  const filteredBlogs = allBlogModels?.filter(
    (blog) => blog.category?.id === params.id
  );
  
  if (!filteredBlogs || filteredBlogs.length === 0) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{category.name}の記事一覧</h1>
        <p>このカテゴリーの記事はまだありません。</p>
      </div>
    );
  }
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{category.name}の記事一覧</h1>
      <ArticleList blogs={filteredBlogs} />
    </div>
  );
}
