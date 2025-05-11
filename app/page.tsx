import { Suspense } from "react";
import ArticleList from "./components/ArticleList";
import Loading from "./loading";

export default function Index({
	searchParams,
}: {
	searchParams: { category_id?: string };
}) {
	const categoryId = searchParams.category_id;
	
	return (
		<main>
			<Suspense fallback={<Loading />}>
				<ArticleList categoryId={categoryId} />
			</Suspense>
		</main>
	);
}
