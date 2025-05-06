import { Suspense } from "react";
import { getCategoryList } from "../../../lib/graphql/getCategoryList";
import Loading from "../../loading";
import CategoryList from "./CategoryList";

const Index = async () => {
  const { allCategoryModels } = await getCategoryList();
  if (!allCategoryModels) return <p>Not Found</p>;
  return (
    <Suspense fallback={<Loading />}>
      <CategoryList categories={allCategoryModels} />
    </Suspense>
  );
};

export default Index;
