import styles from "./articles.module.scss";
import { BlogDocument, BlogQuery } from "../../lib/api/query";
import { getClient } from "../../lib/apolloClient";
import { format, parseISO } from "date-fns";

const Articles = async () => {
  const { data, loading, error } = await getClient().query<BlogQuery>({ query: BlogDocument });
  if (loading) return <p>Loading...</p>;
  return (
    <>
      {error && <div>{error.message}</div>}
      {data.allBlogModels.map((blog) => (
        <article key={blog.id} className={styles.articles}>
          <div className={styles.meta}>
            <p>{format(parseISO(blog._publishedAt), "yyyy. MM. dd")}</p>
            {blog.tag.map((t) => (
              <p key={t.id}>#{t.name}</p>
            ))}
          </div>
          <h1>{blog.title}</h1>
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

export default Articles;
