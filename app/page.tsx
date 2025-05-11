import { Suspense } from "react";
import ArticleList from "./components/ArticleList";
import CategoryList from "./components/CategoryList";
import Loading from "./loading";
import { pageLayout, sidebar } from "./page.module.css";

interface PageProps {
	searchParams: Promise<{ category_id: string | null }>;
}

export default async function Index({ searchParams }: PageProps) {
	const category_id = (await searchParams).category_id;
	return (
		<div className={pageLayout}>
			<div className={sidebar}>
				<Suspense fallback={<Loading />}>
					<CategoryList />
				</Suspense>
			</div>
			<ArticleList categoryId={category_id} />
		</div>
	);
}
