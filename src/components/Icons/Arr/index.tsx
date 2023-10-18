import { IIconProps } from "../types";

export function ArrIcon({ className }: IIconProps) {
	return (
		<svg
			width="8"
			height="6"
			viewBox="0 0 8 6"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path d="M1 1.5L4 4.5L7 1.5" stroke="#202326" stroke-width="1.5" />
		</svg>
	);
}