import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Preview } from "@storybook/react";
import "../app/global.css";

const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	layout: "fullscreen",
	viewport: {
		viewports: INITIAL_VIEWPORTS,
		defaultViewport: "responsive",
	},
};
const preview: Preview = {
	parameters: parameters,
};
export default preview;
