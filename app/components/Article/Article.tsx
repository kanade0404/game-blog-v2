import type { ReactNode } from "react";
import type { BlogQuery } from "../../../lib/api/query";
import { convertToYYYYMMdd } from "../../../lib/time/convertToyyyyMMdd";
import Markdown from "../Markdown";
import "../../styles/article/page.css";
import styles from "./article.module.css";

type TagType = {
	id: string;
	name?: string | null;
};

type Props = {
	params: {
		blog: BlogQuery["blogModel"];
		adElement: ReactNode;
	};
};

const Article = ({ params: { blog, adElement } }: Props) => {
	if (!blog) return <p>記事が見つかりません</p>;
	
	const title = blog.title || '';
	const content = blog.content || '';
	const _firstPublishedAt = blog._firstPublishedAt || '';
	const category = blog.category || { name: '' };
	const tag = blog.tag || [];
	
	return (
		<>
			<article className={styles.article}>
				<div className={styles.meta}>
					<p>
						{_firstPublishedAt ? convertToYYYYMMdd(_firstPublishedAt) : null}
					</p>
					<p>{category.name}</p>
				</div>
				<h1>{title}</h1>
				<Markdown text={content} />
			</article>
			<div className={styles.tagWrapper}>
				{tag.map((t) => (
					<p key={t.id}>#{t.name}</p>
				))}
			</div>
			{adElement}
		</>
	);
};

export default Article;
