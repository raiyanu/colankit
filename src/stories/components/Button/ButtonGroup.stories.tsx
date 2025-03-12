import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {
	ButtonGroup,
	ButtonGroupItem,
} from "../../../../package/colankit/index";
import React from "react";

const ButtonGroupExample = () => (
	<>
		<ButtonGroupItem>Button</ButtonGroupItem>
		<ButtonGroupItem loading={true}>Button</ButtonGroupItem>
		<ButtonGroupItem disabled>Button</ButtonGroupItem>
	</>
);

const meta = {
	title: "ButtonGroup",
	component: ButtonGroup,
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
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: <ButtonGroupExample />,
	},
};

export const Secondary: Story = {
	args: {
		children: <ButtonGroupExample />,
		variant: "secondary",
		size: "md",
	},
};

export const Outline: Story = {
	args: {
		size: "lg",
		children: <ButtonGroupExample />,
		variant: "outline",
	},
};

export const LoadingButton: Story = {
	args: {
		children: <ButtonGroupExample />,
		size: "sm",
		borderRadius: "222px",
		rounded: true,
		loading: true,
		variant: "primary",
		disabled: false,
	},
};
