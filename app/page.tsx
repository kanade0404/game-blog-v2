import ArticleList from "./components/ArticleList";
import { ReadonlyURLSearchParams} from "next/navigation"

interface PageProps {
  searchParams: ReadonlyURLSearchParams;
}

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
