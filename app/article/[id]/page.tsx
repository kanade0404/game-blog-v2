import type { Metadata } from "next";
import { Suspense } from "react";
import { getArticle } from "../../../lib/graphql/getArticle";
import Article from "../../components/Article";
import Loading from "../../loading";

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
export default async function Index({ params }: Props) {
	return (
		<main>
			<Suspense fallback={<Loading />}>
				<Article params={await params} />
			</Suspense>
		</main>
	);
}
