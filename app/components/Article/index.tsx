import { getArticle } from "../../../lib/graphql/getArticle";
import Article from "./Article";

type Props = {
	params: {
		id: string;
	};
};

const Index = async ({ params }: Props) => {
	const { blogModel } = await getArticle(params.id);
	if (!blogModel) return <p>Not Found</p>;
	return <Article params={{ blog: blogModel, adElement: <></> }} />;
};
export default Index;
