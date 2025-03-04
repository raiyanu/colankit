import React from "react";
import "./Button.css";

interface ButtonProps {
	children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
	return <button>{children}</button>;
}

export { Button };
