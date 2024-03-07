import { Metadata } from "next";
import { getArticle } from "../../../lib/graphql/getArticle";
import Article from "../../components/Article";

type Props = {
	params: {
		id: string;
	};
};
export const dynamic = "force-dynamic";
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { blogModel } = await getArticle(params.id);
	if (!blogModel) return {};
	const { description } = blogModel;
	if (!description) return {};
	return {
		title: description.title,
		description: description.description,
		openGraph: {
			images: description.image
				? {
						url: description.image.url,
						alt: description.image.alt,
				  }
				: undefined,
		},
		twitter: {
			card: "summary_large_image",
			title: description.title,
			description: description.description,
			images: description.image
				? {
						url: description.image.url,
						alt: description.image.alt,
				  }
				: undefined,
		},
	};
}
export default function Index({ params }: Props) {
	return (
		<main>
			<Article params={params} />
		</main>
	);
}
