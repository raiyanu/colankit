import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../../../../package/colankit/index";

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
		variant: "secondary",
		size: "md",
	},
};

export const Outline: Story = {
	args: {
		size: "lg",
		children: "Button",
		variant: "outline",
	},
};

export const LoadingButton: Story = {
	args: {
		children: "Button",
		size: "sm",
		borderRadius: "222px",
		rounded: true,
		loading: true,
		variant: "primary",
		disabled: false,
	},
};
