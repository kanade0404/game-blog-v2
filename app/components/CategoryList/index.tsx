import { Suspense, useEffect } from "react";
import { getCategoryList } from "../../../lib/graphql/getCategoryList";
import Loading from "../../loading";
import CategoryList from "./CategoryList";

const Index = async () => {
  const { allCategoryModels } = await getCategoryList();
  if (!allCategoryModels) return <p>Not Found</p>;
  
  return (
    <Suspense fallback={<Loading />}>
      <CategoryList categories={allCategoryModels} />
      <ScrollToActiveCategory />
    </Suspense>
  );
};

"use client";
function ScrollToActiveCategory() {
  useEffect(() => {
    const activeCategory = document.getElementById('current-category');
    if (activeCategory) {
      requestAnimationFrame(() => {
        const container = activeCategory.closest('.scrollContainer');
        if (container) {
          const containerRect = container.getBoundingClientRect();
          const activeRect = activeCategory.getBoundingClientRect();
          const scrollLeft = activeRect.left - containerRect.left - 
                            (containerRect.width / 2) + (activeRect.width / 2);
          
          container.scrollLeft = scrollLeft;
        }
      });
    }
  }, []);
  
  return null;
}

export default Index;
