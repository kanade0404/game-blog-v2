import Footer from "../../app/components/Layout/Footer";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof Footer> = {
  title: "Component/Layout/Footer",
  component: Footer,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Footer>;
export const Default: Story = {};

export const IPhone12ProMax: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphone12promax",
    },
  },
};
export const IPhone5: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphone5",
    },
  },
};

export const Ipad: Story = {
  parameters: {
    viewport: {
      defaultViewport: "ipad",
    },
  },
};
