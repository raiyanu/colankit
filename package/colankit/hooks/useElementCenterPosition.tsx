import { RefObject } from "react";

interface ElementCenterPosition {
	x: number;
	y: number;
}
interface ElementCenterPositionParams {
	buttonRef: RefObject<HTMLDivElement | null>;
	position: ElementCenterPosition;
}
export default function useElementCenterPosition({
	buttonRef,
	position,
}: ElementCenterPositionParams): ElementCenterPosition {
	const rect = buttonRef.current?.getBoundingClientRect() || {
		width: 0,
		height: 0,
	};
	const centerPosition = {
		x: position.x - rect.width / 2,
		y: position.y - rect.height / 2,
	};
	return centerPosition;
}
