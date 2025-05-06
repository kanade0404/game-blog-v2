import { cache } from "react";
import { CategoryListDocument, type CategoryListQuery } from "../api/query";
import { graphQLClient } from "./index";

export const getCategoryList = cache(async () =>
  graphQLClient.request<CategoryListQuery>(CategoryListDocument),
);
