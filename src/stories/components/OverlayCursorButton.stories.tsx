import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button, MouseOverLayerButton } from "../../../package/colankit";
import React from "react";
const meta = {
	title: "OverlayCursorButton",
	component: MouseOverLayerButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		children: { control: "text" },
		style: { control: "object" },
	},
	args: { onClick: fn() },
} satisfies Meta<typeof MouseOverLayerButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		style: {
			padding: "1rem",
			border: "1px solid gray",
			marginBlock: "auto",
			display: "block",
			borderRadius: "8px",
			height: "300px",
			width: "300px",
		},
		button: (
			<Button rounded borderRadius="99px" variant="primary" size="md">
				Read More
			</Button>
		),
		children: (
			<div>
				<h1 style={{ margin: 0 }}>Hey there</h1>
				<span>There always an eye on you.</span>
				<hr
					style={{
						borderColor: "rgba(0,0,0,0.1)",
						maxWidth: "70%",
						marginLeft: 0,
					}}
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
					voluptatum cupiditate pariatur exercitationem delectus consequatur.
				</p>
				<p>
					voluptatum cupiditate pariatur exercitationem delectus consequatur.
				</p>
			</div>
		),
	},
};
