import { Suspense } from "react";
import ArticleList from "./components/ArticleList";
import Loading from "./loading";

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export default function Index({
	searchParams,
}: {
	searchParams: SearchParams;
}) {
	const categoryId = searchParams.category_id as string | undefined;
	
	return (
		<main>
			<Suspense fallback={<Loading />}>
				<ArticleList categoryId={categoryId} />
			</Suspense>
		</main>
	);
}
