import ArticleList from "./components/ArticleList";
import type { ReadonlyURLSearchParams } from "next/navigation";

interface PageProps {
	searchParams: ReadonlyURLSearchParams;
}

export default async function Index({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | undefined }>
}) {
	const { category_id } = await searchParams;
	const categoryIdParam: string | null = category_id || null;
	return (
		<ArticleList categoryId={categoryIdParam} />
	);
}
