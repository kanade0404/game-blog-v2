import { Suspense } from "react";
import ArticleList from "./components/ArticleList";
import Loading from "./loading";

export default function Index() {
	return (
		<main>
			<Suspense fallback={<Loading />}>
				<ArticleList />
			</Suspense>
		</main>
	);
}
