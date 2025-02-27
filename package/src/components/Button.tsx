import React from "react";

type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<button
			onClick={onClick}
			style={{
				padding: "10px 20px",
				fontSize: "16px",
				cursor: "pointer",
				backgroundColor: "#007bff",
				color: "#fff",
				border: "none",
				borderRadius: "4px",
			}}
		>
			{children}
		</button>
	);
};
