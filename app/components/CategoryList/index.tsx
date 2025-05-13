import { getCategoryList } from "../../../lib/graphql/getCategoryList";
import CategoryList from "./CategoryList";
import ScrollToActiveCategory from "./ScrollToActiveCategory";

const Index = async () => {
	const { allCategoryModels } = await getCategoryList();
	if (!allCategoryModels) return <p>カテゴリが見つかりません</p>;

	return (
		<>
			<CategoryList categories={allCategoryModels} />
			<ScrollToActiveCategory />
		</>
	);
};

export default Index;
