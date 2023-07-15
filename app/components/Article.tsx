import styles from "./article.module.scss";
import { getArticle } from "../../lib/apolloClient/getArticle";
import { format, parseISO } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  params: {
    id: string;
  };
};

const Article = async ({ params }: Props) => {
  const { data, loading, error } = await getArticle(params.id);
  if (loading) return <p>Loading...</p>;
  const { title, content, tag, _publishedAt, category } = data.blogModel;
  return (
    <>
      {error && <div>{error.message}</div>}
      <article className={styles.article}>
        <div className={styles.meta}>
          <p>{format(parseISO(_publishedAt), "yyyy. MM. dd")}</p>
          <p>{category.name}</p>
        </div>
        <h1>{title}</h1>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
      <div className={styles.tagWrapper}>
        {tag.map((t) => (
          <p key={t.id}>#{t.name}</p>
        ))}
      </div>
    </>
  );
};
export default Article;
