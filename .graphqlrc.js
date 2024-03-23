import { config } from "dotenv";
config();

module.exports = {
	name: "Game Blog V2",
	schemaPath: "schema.json",
	extensions: {
		endpoints: {
			"DatoCMS Endpoint": {
				url: "https://graphql.datocms.com",
				headers: {
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
				},
				introspect: false,
			},
		},
	},
};
