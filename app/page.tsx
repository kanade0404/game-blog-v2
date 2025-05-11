import { Suspense } from "react";
import ArticleList from "./components/ArticleList";
import Loading from "./loading";

interface PageProps {
  params: { slug?: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function Index({ searchParams = {} }: PageProps) {
	const categoryId = typeof searchParams.category_id === 'string' ? searchParams.category_id : undefined;
	
	return (
		<main>
			<Suspense fallback={<Loading />}>
				<ArticleList categoryId={categoryId} />
			</Suspense>
		</main>
	);
}
