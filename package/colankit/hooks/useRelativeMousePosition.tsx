import { useState, useEffect, RefObject, useRef } from "react";

interface MousePosition {
	x: number;
	y: number;
}

interface MousePositionReturns {
	position: MousePosition;
	sectionRef: RefObject<HTMLDivElement | null>;
	maskHovered: boolean;
}

export default function useMousePosition(): MousePositionReturns {
	const [position, setPosition] = useState<{ x: number; y: number }>({
		x: 0,
		y: 0,
	});
	const [maskHovered, setMaskHovered] = useState<boolean>(false);
	const sectionRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const setMousePos = (pos: MousePosition) =>
			setPosition({ x: pos.x, y: pos.y });

		if (!sectionRef || !sectionRef.current) return;

		const sectionElement = sectionRef.current;

		const handleBlobMove = (e: MouseEvent) => {
			const sectionPosition = sectionElement.getBoundingClientRect();
			const relativeX = e.clientX - sectionPosition.left;
			const relativeY = e.clientY - sectionPosition.top;
			const position: MousePosition = {
				x: relativeX,
				y: relativeY,
			};
			setMousePos(position);
			console.log("mask", position);
		};

		const handleBlobScroll = (e: Event) => {
			const sectionPosition = sectionElement.getBoundingClientRect();
			const relativeX = (e as MouseEvent).clientX - sectionPosition.left;
			const relativeY = (e as MouseEvent).clientY - sectionPosition.top;
			const position: MousePosition = {
				x: relativeX,
				y: relativeY,
			};
			setMousePos(position);
		};

		window.addEventListener("mousemove", handleBlobMove);
		window.addEventListener("scroll", handleBlobScroll);

		sectionRef.current?.addEventListener("mouseenter", () => {
			setMaskHovered(true);
		});
		sectionRef.current?.addEventListener("mouseleave", () => {
			setMaskHovered(false);
		});

		return () => {
			window.removeEventListener("mousemove", handleBlobMove);
			window.removeEventListener("scroll", handleBlobScroll);
		};
	}, [sectionRef, maskHovered]);

	return { position, sectionRef, maskHovered };
}
