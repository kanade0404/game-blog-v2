import clsx from "clsx";
import type { BlogListQuery } from "../../../lib/api/query";
import { convertToYYYYMMdd } from "../../../lib/time/convertToyyyyMMdd";
import styles from "./article_list.module.scss";

type Props = {
	blogs: BlogListQuery["allBlogModels"];
};
type AllBlogModels = BlogListQuery["allBlogModels"];
type ArticleType = AllBlogModels[number];
type ArticleProps = {
	params: {
		blog: ArticleType;
		key: number;
		len: number;
	};
};
const Article = ({ params: { blog, key, len } }: ArticleProps) => (
	<article
		key={blog.id}
		className={clsx(
			styles.articles,
			key === 0 ? null : styles.mTop,
			len - 1 === key ? null : styles.border,
		)}
	>
		<div className={styles.meta}>
			<p>{convertToYYYYMMdd(blog._firstPublishedAt)}</p>
			<p>{blog.category.name}</p>
		</div>
		<h1>
			<a className={styles.font} href={`/article/${blog.id}`}>
				{blog.title}
			</a>
		</h1>
		<p>{blog.description?.description}</p>
	</article>
);
const ArticleList = ({ blogs }: Props) => {
	return (
		<>
			{blogs.map((blog, key) => (
				<Article
					key={blog.id}
					params={{
						blog,
						key,
						len: blogs.length,
					}}
				/>
			))}
		</>
	);
};
export default ArticleList;
