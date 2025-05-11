import { Suspense } from "react";
import { ReadonlyURLSearchParams } from "next/navigation";
import ArticleList from "./components/ArticleList";
import Loading from "./loading";

type PageProps = {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
};

export default function Index({ searchParams }: PageProps) {
	const categoryId = searchParams.category_id as string | undefined;
	
	return (
		<main>
			<Suspense fallback={<Loading />}>
				<ArticleList categoryId={categoryId} />
			</Suspense>
		</main>
	);
}
