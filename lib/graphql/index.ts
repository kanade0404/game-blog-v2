import { GraphQLClient } from "graphql-request";

export const graphQLClient = new GraphQLClient(process.env.GRAPHQL_ENDPOINT, {
	credentials: "include",
	mode: "cors",
	headers: {
		Authorization: `Bearer ${process.env.API_TOKEN}`,
	},
});
