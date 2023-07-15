import { getClient } from "./index";
import { BlogListDocument, BlogListQuery } from "../api/query";

export const getArticleList = () => getClient().query<BlogListQuery>({ query: BlogListDocument });
