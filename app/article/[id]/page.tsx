import { getArticle } from "../../../lib/apolloClient/getArticle";
import Article from "../../components/Article";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data, error } = await getArticle(params.id);
  if (error) throw error;
  const title = data.blogModel.title;
  // templateを設定しているので、サイト名は自動で付く
  return { title };
}
export default function Index({ params }: Props) {
  return (
    <main>
      <Article params={params} />
    </main>
  );
}
