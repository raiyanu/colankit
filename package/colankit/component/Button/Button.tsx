import React from "react";
import Styles from "./Button.module.css";
import useMousePosition from "../../hooks/useRelativeMousePosition";
import useElementCenterPosition from "../../hooks/useElementCenterPosition";
interface ClickInterface {
	children?: React.ReactNode;
	variant?: "primary" | "secondary" | "outline" | "link";
	disabled?: boolean;
	size?: "xs" | "sm" | "md" | "lg";
	rounded?: boolean;
	borderRadius?: string;
	loading?: boolean;
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
	loading,
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
			{loading && <div className={Styles.loader}></div>}
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
	loading,
	...rest
}) => {
	const buttonClass = `
	${Styles.btn} 
	${Styles.icon} 
	${Styles[variant ?? "primary"]}  
	${Styles[size ?? ""]} 
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
			{loading ? <div className={Styles.loader}></div> : children}
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
	loading,
	...rest
}) => {
	const buttonClass = `
	${Styles.btn} 
	${disabled ? Styles.disabled : ""}
	`;

	return (
		<button className={buttonClass} {...rest}>
			{loading && <div className={Styles.loader}></div>}
			{children}
		</button>
	);
};

interface MouseOverLayerButtonProps
	extends React.HtmlHTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	button: React.ReactNode;
}

/**
 * @param children Inner content of the button
 * @param button
 * @param <HtmlHTMLAttributes<HTMLDivElement>>
 * @returns
 * @description
 * MouseOverLayerButton component
 * @example
 * <MouseOverLayerButton button={<Button>Click me</Button>}>
 * 	<div>Hover me</div>
 * </MouseOverLayerButton>
 *
 */
export const MouseOverLayerButton: React.FC<MouseOverLayerButtonProps> = ({
	children,
	button,
	...rest
}) => {
	const {
		position: { x, y },
		sectionRef,
		maskHovered,
	} = useMousePosition();
	const buttonRef = React.useRef<HTMLDivElement | null>(null);
	const { x: centerX, y: centerY } = useElementCenterPosition({
		buttonRef,
		position: { x, y },
	});
	return (
		<div className={Styles.MouseOverLayerButton} ref={sectionRef} {...rest}>
			{children}
			{button && maskHovered && (
				<div
					ref={buttonRef}
					className={`${Styles.btnLayer} ${Styles.overLayerButton}`}
					style={{
						top: `${centerY}px`,
						left: `${centerX}px`,
					}}
				>
					{button}
				</div>
			)}
		</div>
	);
};
