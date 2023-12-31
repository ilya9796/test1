import { IIconProps } from "../types";

export function CloseIcon({ className, onClick }: IIconProps) {
	return (
		<svg
			width="22"
			height="22"
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M9.58579 11L4.63604 15.9498L6.05025 17.364L11 12.4142L15.9497 17.364L17.364 15.9498L12.4142 11L17.364 6.05026L15.9497 4.63604L11 9.58579L6.05025 4.63604L4.63604 6.05026L9.58579 11Z"
				fill="#202326"
			/>
		</svg>
	);
}
