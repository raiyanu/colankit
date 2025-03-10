import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../../package/colankit/index";

const meta = {
	title: "Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: { options: ["primary", "secondary", "outline", "link"] },
		disabled: { control: "boolean" },
		rounded: { control: "boolean" },
		borderRadius: { control: "text" },
	},
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Button",
	},
};

export const Secondary: Story = {
	args: {
		children: "Button",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		children: "Button",
	},
};

export const Small: Story = {
	args: {
		children: "Button",
	},
};
