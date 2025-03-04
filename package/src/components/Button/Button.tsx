import React from "react";
import "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	variant: "primary" | "secondary" | "outline";
	disabled?: boolean;
	size?: "xs" | "sm" | "md" | "lg";
};

export const Button: React.FC<ButtonProps> = ({
	children,
	variant,
	disabled,
	size,
	...rest
}) => {
	const buttonClass = `btn ${variant} ${size} ${disabled ? "disabled" : ""}`;

	return (
		<button {...rest} className={buttonClass}>
			{children}
		</button>
	);
};
