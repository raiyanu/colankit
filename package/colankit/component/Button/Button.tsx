import React from "react";
import Styles from "./Button.module.css";

interface ClickInterface {
	children?: React.ReactNode;
	variant?: "primary" | "secondary" | "outline" | "link";
	disabled?: boolean; // Consider removing if redundancy is unwanted
	size?: "xs" | "sm" | "md" | "lg";
	rounded?: boolean;
	borderRadius?: string;
}

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		ClickInterface {}

interface ButtonGroupProps
	extends ClickInterface,
		React.HTMLAttributes<HTMLDivElement> {
	direction?: "vertical" | "horizontal";
}

type ButtonGroupItemProps = Omit<
	ButtonProps,
	"variant" | "size" | "rounded" | "borderRadius"
>;

/**
 *
 * @param children Inner content of the button
 * @param variant
 * @param disabled
 * @param size
 * @param rounded
 * @param borderRadius
 * @param <ButtonHTMLAttributes<HTMLButtonElement>>
 * @returns
 * @description
 * Button component with 4 variants and 4 sizes
 * @example
 * <Button variant="primary" size="lg">
 * 	Hey there! Inner content goes here
 * </Button>
 * <Button variant="outline" size="lg">
 * 	Hey there! Inner content goes here
 * </Button>
 * @returns Button component
 *
 */
export const Button: React.FC<ButtonProps> = ({
	children,
	variant,
	disabled,
	size,
	borderRadius,
	rounded,
	...rest
}) => {
	const buttonClass = `${Styles.btn} ${Styles[variant ?? "primary"]} ${
		Styles[size ?? ""]
	} ${variant ?? ""} ${Styles[size ?? ""]} ${disabled ? Styles.disabled : ""} ${
		rounded ? Styles.rounded : ""
	}`;

	const Style = {
		borderRadius: borderRadius && rounded ? borderRadius : rounded ? "4px" : "",
		"--border-radius":
			borderRadius && rounded ? borderRadius : rounded ? "4px" : "",
	};
	return (
		<button className={buttonClass} style={Style} {...rest}>
			{children}
		</button>
	);
};
/**
 * @param children Inner content of the button
 * @param variant
 * @param disabled
 * @param size
 * @param rounded
 * @param borderRadius
 * @param <ButtonHTMLAttributes<HTMLButtonElement>>
 * @returns
 * @description
 * IconButton component with 4 variants and 4 sizes
 * @example
 * <IconButton variant="primary" size="lg">
 * 	<svg></svg>
 * </IconButton>
 * <IconButton variant="outline" size="lg">
 * 	<svg></svg>
 * </IconButton>
 * @returns IconButton component
 *
 */
export const IconButton: React.FC<ButtonProps> = ({
	children,
	variant,
	disabled,
	size,
	rounded,
	borderRadius,
	...rest
}) => {
	const buttonClass = `
	${Styles.btn} 
	${Styles[variant ?? "primary"]}  
	${Styles[size ?? ""]} 
	${Styles.icon} 
	${variant ?? ""} 
	${Styles[size ?? ""]} 
	${disabled ? Styles.disabled : ""}
	${rounded ? Styles.rounded : ""}
	`;
	const Style = {
		borderRadius: borderRadius ?? "",
		"--border-radius": borderRadius ?? "4px",
	};

	return (
		<button className={buttonClass} style={Style} {...rest}>
			{children}
		</button>
	);
};

/**
 * @param children Inner content of the button
 * @param variant
 * @param disabled
 * @param size
 * @param rounded
 * @param direction
 * @param borderRadius
 * @returns
 * @description
 * ButtonGroup component with 4 variants and 4 sizes
 * @example
 * <ButtonGroup
 * 	direction="horizontal"
 * 	variant="outline"
 * 	size="lg"
 * 	rounded
 * 	borderRadius="6px"
 * >
 * 	<ButtonGroupItem>Button</ButtonGroupItem>
 * 	<ButtonGroupItem disabled>Button</ButtonGroupItem>
 * </ButtonGroup>
 * @returns ButtonGroup component
 *
 */
export const ButtonGroup: React.FC<ButtonGroupProps> = ({
	children,
	variant,
	disabled,
	size,
	rounded,
	direction,
	borderRadius,
	...rest
}) => {
	const buttonClass = `
	${Styles.btnGroup} 
	${Styles[variant ?? "primary"]}  
	${Styles[size ?? ""]} 
	${Styles.icon} 
	${variant ?? ""} 
	${Styles[size ?? ""]} 
	${disabled ? Styles.disabled : ""}
	${rounded ? Styles.rounded : ""}
	${direction === "vertical" ? Styles.vertical : ""}
	${Styles.horizontal ?? "horizontal"}
	`;
	const Style = {
		borderRadius: borderRadius ?? "",
		"--border-radius": borderRadius ?? "4px",
	};

	return (
		<div className={buttonClass} style={Style} {...rest}>
			{children}
		</div>
	);
};

/**
 * @param children Inner content of the button
 * @param disabled
 * @returns
 * @description
 * ButtonGroupItem component
 * @example
 * <ButtonGroupItem>Button</ButtonGroupItem>
 * @returns ButtonGroupItem component
 *
 */
export const ButtonGroupItem: React.FC<ButtonGroupItemProps> = ({
	children,
	disabled,
	...rest
}) => {
	const buttonClass = `
	${Styles.btn} 
	${Styles.icon} 
	${disabled ? Styles.disabled : ""}
	`;

	return (
		<button className={buttonClass} {...rest}>
			{children}
		</button>
	);
};
