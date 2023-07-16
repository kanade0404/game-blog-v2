import Multiplex from "./Ad/Multiplex";
import styles from "./article.module.scss";
import Markdown from "./Markdown";
import { getArticle } from "../../lib/apolloClient/getArticle";
import { convertToYYYYMMdd } from "../../lib/time/convertToyyyyMMdd";

type Props = {
  params: {
    id: string;
  };
};

const Article = async ({ params }: Props) => {
  const { data, loading, error } = await getArticle(params.id);
  if (error) throw error;
  if (loading) return <p>Loading...</p>;
  const { title, content, tag, _publishedAt, category } = data.blogModel;
  return (
    <>
      <article className={styles.article}>
        <div className={styles.meta}>
          <p>{convertToYYYYMMdd(_publishedAt)}</p>
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
      <Multiplex />
    </>
  );
};
export default Article;
