import { GraphQLClient } from "graphql-request";

const endpoint = process.env.GRAPHQL_ENDPOINT || "https://graphql.datocms.com";

export const graphQLClient = new GraphQLClient(endpoint, {
	credentials: "include",
	mode: "cors",
	headers: {
		Authorization: `Bearer ${process.env.API_TOKEN || ""}`,
	},
});
