import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle } from "../../../lib/graphql/getArticle";
import Article from "../../components/Article";

type Props = {
	params: Promise<{
		id: string;
	}>;
};
export const dynamic = "force-dynamic";
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { blogModel } = await getArticle((await params).id);
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
						alt: description.image.alt || undefined,
					}
				: undefined,
		},
		twitter: {
			card: "summary_large_image",
			title: description.title || undefined,
			description: description.description || undefined,
			images: description.image
				? {
						url: description.image.url,
						alt: description.image.alt || undefined,
					}
				: undefined,
		},
	};
}
export default async function Index({ params }: Props) {
	const { id } = await params;
	const { blogModel } = await getArticle(id);
	
	if (!blogModel) {
		notFound();
	}
	
	return (
		<main>
			<Article params={{ blog: blogModel, adElement: null }} />
		</main>
	);
}
