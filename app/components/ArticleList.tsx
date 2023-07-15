import styles from "./article_list.module.scss";
import { getArticleList } from "../../lib/apolloClient/getArticleList";
import clsx from "clsx";
import { format, parseISO } from "date-fns";

const ArticleList = async () => {
  const { data, loading, error } = await getArticleList();
  if (loading) return <p>Loading...</p>;
  return (
    <>
      {error && <div>{error.message}</div>}
      {data.allBlogModels.map((blog, key) => (
        <article
          key={blog.id}
          className={clsx(
            styles.articles,
            key === 0 ? null : styles.mTop,
            data.allBlogModels.length - 1 === key ? null : styles.border,
          )}
        >
          <div className={styles.meta}>
            <p>{format(parseISO(blog._publishedAt), "yyyy. MM. dd")}</p>
            <p>{blog.category.name}</p>
          </div>
          <h1>
            <a className={styles.font} href={`/article/${blog.id}`}>
              {blog.title}
            </a>
          </h1>
          <p>
            {
              blog._seoMetaTags.find(
                (tag) => tag.tag === "meta" && tag.attributes["name"] === "description",
              ).attributes.content
            }
          </p>
        </article>
      ))}
    </>
  );
};

export default ArticleList;
