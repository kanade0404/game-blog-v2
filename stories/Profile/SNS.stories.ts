import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Meta, StoryObj } from "@storybook/react";
import SNS from "../../app/components/Profile/SNS";
const meta: Meta<typeof SNS> = {
	title: "Component/Profile/SNS",
	component: SNS,
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
};
export default meta;
type Story = StoryObj<typeof SNS>;
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
