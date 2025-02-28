import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button
			style={{
				padding: "10px 20px",
				fontSize: "16px",
				cursor: "pointer",
				backgroundColor: "blue",
				color: "#fff",
				border: "none",
				borderRadius: "4px",
				outline: "none !important",
			}}
			{...props}
		>
			{props.children}
		</button>
	);
};
