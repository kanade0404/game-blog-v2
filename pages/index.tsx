import { useBlogQuery } from "../lib/api/query";
import { initializeApollo } from "../lib/apollo";

const Index = () => {
  const { data, loading, error } = useBlogQuery();
  if (error) {
    console.error(error);
  }
  if (loading || !data) {
    return <div></div>;
  }
  return (
    <div>
      {data.allBlogModels.map((blog) => (
        <div key={blog.id}>
          <h1>{blog.title}</h1>
          <p>{blog.createdAt}</p>
          <p>{blog.updatedAt}</p>
          tags:{" "}
          {blog.tag.map((t) => (
            <p key={t.id}>{t.name}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Index;
