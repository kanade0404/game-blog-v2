import { BlogDocument } from "../../lib/api/query";
import { getClient } from "../../lib/apolloClient";

const Articles = async () => {
  const { data, loading, error } = await getClient().query({ query: BlogDocument });
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      {error && <div>{error.message}</div>}
      {data.allBlogModels.map((blog) => (
        <h1 key={blog.id}>{blog.title}</h1>
      ))}
    </div>
  );
};

export default Articles;
