import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Meta, StoryObj } from "@storybook/react";
import Index from "../../app/components/Profile";
const meta: Meta<typeof Index> = {
	title: "Component/Profile",
	component: Index,
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
};
export default meta;
type Story = StoryObj<typeof Index>;
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
