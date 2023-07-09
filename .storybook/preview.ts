import { Preview } from "@storybook/react";

const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
const preview: Preview = {
  parameters: parameters,
};
export default preview;
