import React from "react";
import Styles from "./Button.module.css";

interface ButtonProps {
	children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
	return <button className={Styles.btn}>{children}</button>;
}

export { Button };
