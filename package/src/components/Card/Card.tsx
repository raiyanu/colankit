import React from "react";
import "./ButtonStyle.css";

type CardProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	varient: "primary" | "secondary" | "outline";
	disabled?: boolean;
	size?: "xs" | "sm" | "md" | "lg";
};

export const Card: React.FC<CardProps> = (props) => {
	const Style = `btn ${props.varient} ${props.disabled ? "disabled" : ""}
            ${props.size ? props.size : ""}`;

	return (
		<button {...props} className={Style}>
			{props.children}
		</button>
	);
};
