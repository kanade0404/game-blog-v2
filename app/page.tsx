import ArticleList from "./components/ArticleList";
import type { ReadonlyURLSearchParams } from "next/navigation";

export default async function Index({
	searchParams,
  }: {
	searchParams: Promise<{ [key: string]: string | undefined }>
  }){

	const {category_id} = await searchParams
	return (
		<ArticleList categoryId={category_id} />
	);
}
