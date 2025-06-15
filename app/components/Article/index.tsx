import { notFound } from "next/navigation";
import { getArticle } from "../../../lib/graphql/getArticle";
import Article from "./Article";

type Props = {
	params: {
		id: string;
	};
};

const Index = async ({ params }: Props) => {
	const { blogModel } = await getArticle(params.id);
	if (!blogModel) {
		notFound();
	}
	return <Article params={{ blog: blogModel }} />;
};
export default Index;
