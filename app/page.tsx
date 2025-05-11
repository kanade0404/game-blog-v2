import { Suspense } from "react";
import ArticleList from "./components/ArticleList";
import Loading from "./loading";

export default function Index({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const categoryId = typeof searchParams.category_id === 'string' ? searchParams.category_id : undefined;
	
	return (
		<main>
			<Suspense fallback={<Loading />}>
				<ArticleList categoryId={categoryId} />
			</Suspense>
		</main>
	);
}
