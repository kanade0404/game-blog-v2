import { BlogDocument, useBlogQuery } from "../libs/api/query";
import { addApolloState, initializeApollo } from "../libs/apolloClient";

export default function Index() {
  const { data, loading, error } = useBlogQuery();
  if (error) {
    console.error(error);
    return <></>;
  }
  if (loading || !data) {
    return <></>;
  }
  return (
    <div>
      {data.allBlogModels.map((blog) => (
        <div key={blog.id}>
          <h1>{blog.title}</h1>
          <p>{blog.createdAt}</p>
          <p>{blog.updatedAt}</p>
          tags:
          {blog.tag.map((t) => (
            <p key={t.id}>{t.name}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: BlogDocument,
  });
  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
}
