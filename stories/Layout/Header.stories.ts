import Header from "../../app/components/Layout/Header";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof Header> = {
  title: "Component/Layout/Header",
  component: Header,
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
type Story = StoryObj<typeof Header>;
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
