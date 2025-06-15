import type { Metadata } from "next";
import { getCategoryBlogList } from "../../../lib/graphql/getCategoryBlogList";
import { getCategoryList } from "../../../lib/graphql/getCategoryList";
import ArticleList from "../../components/ArticleList/ArticleList";
import styles from "./category.module.css";

type Props = {
	params: Promise<{
		id: string;
	}>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { allCategoryModels } = await getCategoryList();
	const resolvedParams = await params;
	const category = allCategoryModels?.find(
		(cat) => cat.id === resolvedParams.id,
	);

	if (!category) return {};

	return {
		title: `${category.name}の記事一覧`,
		description: `${category.name}に関する記事一覧です。`,
	};
}

export default async function CategoryPage({ params }: Props) {
	const resolvedParams = await params;
	const { allCategoryModels } = await getCategoryList();
	const { allBlogModels } = await getCategoryBlogList(resolvedParams.id);

	const category = allCategoryModels?.find(
		(cat) => cat.id === resolvedParams.id,
	);

	if (!category) return <p>カテゴリーが見つかりませんでした。</p>;

	if (!allBlogModels || allBlogModels.length === 0) {
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
			<ArticleList blogs={allBlogModels} />
		</div>
	);
}
