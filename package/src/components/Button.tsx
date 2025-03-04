import React from "react";
import "./ButtonStyle.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	varient: "primary" | "secondary" | "outline";
	disabled?: boolean;
	size?: "xs" | "sm" | "md" | "lg";
};

export const Button: React.FC<ButtonProps> = (props) => {
	const Style = `btn ${props.varient} ${props.disabled ? "disabled" : ""}
			${props.size ? props.size : ""}`;

	return (
		<button {...props} className={Style}>
			{props.children}
		</button>
	);
};
