import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { IconButton } from "../../../../package/colankit/index";

const meta = {
	title: "IconButton",
	component: IconButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["primary", "secondary", "outline", "link"],
		},
		disabled: { control: "boolean" },
		rounded: { control: "boolean" },
		borderRadius: { control: "text" },
	},
	args: {
		variant: "primary",
		disabled: false,
		rounded: false,
		borderRadius: "4px",
		onClick: fn(),
	},
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "@",
	},
};

export const Secondary: Story = {
    args: {
        variant: "secondary",
        disabled: false,
        rounded: true,
        borderRadius: "499px",
        children: "@",
        size: "md",
        loading: false
    }
};

export const Loading: Story = {
    args: {
        variant: "outline",
        disabled: true,
        rounded: true,
        borderRadius: "499px",
        children: "@",
        size: "md",
        loading: true
    }
};
