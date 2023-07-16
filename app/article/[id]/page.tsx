import { getArticle } from "../../../lib/apolloClient/getArticle";
import Article from "../../components/Article";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};
export const dynamic = "force-dynamic";
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data, error } = await getArticle(params.id);
  if (error) throw error;
  if (!data.blogModel) return {};
  const { description } = data.blogModel;
  if (!description) return {};
  return {
    title: description.title,
    description: description.description,
    openGraph: {
      images: [],
    },
    twitter: {
      card: "summary_large_image",
      title: description.title,
      description: description.description,
      images: description.image ? [description.image.url, description.image.alt] : [],
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
