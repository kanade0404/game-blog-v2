import { getClient } from "./index";
import { BlogDocument, BlogQuery } from "../api/query";

export const getArticle = (id: string) =>
  getClient().query<BlogQuery>({ query: BlogDocument, variables: { id: id } });
