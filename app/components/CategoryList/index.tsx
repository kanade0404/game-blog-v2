import { Suspense } from "react";
import { getCategoryList } from "../../../lib/graphql/getCategoryList";
import Loading from "../../loading";
import CategoryList from "./CategoryList";
import ScrollToActiveCategory from "./ScrollToActiveCategory";


const Index = async () => {
  const { allCategoryModels } = await getCategoryList();
  if (!allCategoryModels) return <p>カテゴリが見つかりません</p>;

  return (
    <Suspense fallback={<Loading />}>
      <CategoryList categories={allCategoryModels} />
      <ScrollToActiveCategory />
    </Suspense>
  );
};

export default Index;
