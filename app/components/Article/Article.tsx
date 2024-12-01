import type { ReactNode } from "react";
import type { BlogQuery } from "../../../lib/api/query";
import { convertToYYYYMMdd } from "../../../lib/time/convertToyyyyMMdd";
import Markdown from "../Markdown";
import "../../styles/article/page.css";
import styles from "./article.module.css";
type Props = {
	params: {
		blog: BlogQuery["blogModel"];
		adElement: ReactNode;
	};
};
const Article = ({ params: { blog, adElement } }: Props) => {
	const { title, content, _firstPublishedAt, category, tag } = blog;
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
