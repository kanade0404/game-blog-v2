import styles from "./article_list.module.scss";
import { getArticleList } from "../../lib/graphql/getArticleList";
import { convertToYYYYMMdd } from "../../lib/time/convertToyyyyMMdd";
import clsx from "clsx";

const ArticleList = async () => {
  const { allBlogModels } = await getArticleList();
  if (!allBlogModels) return <p>Not Found</p>;
  return (
    <>
      {allBlogModels.map(({ id, title, category, description, _publishedAt }, key) => (
        <article
          key={id}
          className={clsx(
            styles.articles,
            key === 0 ? null : styles.mTop,
            allBlogModels.length - 1 === key ? null : styles.border,
          )}
        >
          <div className={styles.meta}>
            <p>{convertToYYYYMMdd(_publishedAt)}</p>
            <p>{category.name}</p>
          </div>
          <h1>
            <a className={styles.font} href={`/article/${id}`}>
              {title}
            </a>
          </h1>
          <p>{description.description}</p>
        </article>
      ))}
    </>
  );
};

export default ArticleList;
