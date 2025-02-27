import React from "react";
import "./Button.scss";

type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<button onClick={onClick} className="colan-button">
			{children}
		</button>
	);
};
