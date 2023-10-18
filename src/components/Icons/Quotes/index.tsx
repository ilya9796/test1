import { IIconProps } from "../types";

export function QuotesIcon({ className }: IIconProps) {
	return (
		<svg
			width="38"
			height="38"
			viewBox="0 0 38 38"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19ZM14.0262 12.8445C11.7763 12.8445 10 14.6603 10 16.8707C10 18.9628 11.6184 20.6996 13.6709 20.8574C13.2367 21.6074 12.4868 22.4363 11.1842 23.2258C10.8289 23.4232 10.5921 23.8179 10.5921 24.2126C10.5921 25.0415 11.421 25.5941 12.171 25.2784C14.342 24.2915 18.0129 21.8837 18.0129 16.8707C18.0524 14.6603 16.2366 12.8445 14.0262 12.8445ZM19.9865 16.8707C19.9865 14.6603 21.7627 12.8445 24.0126 12.8445C26.2231 12.8445 28.0388 14.6603 27.9994 16.8707C27.9994 21.8837 24.3284 24.2915 22.1574 25.2784C21.4075 25.5941 20.5785 25.0415 20.5785 24.2126C20.5785 23.8179 20.8154 23.4232 21.1706 23.2258C22.4732 22.4363 23.2232 21.6074 23.6574 20.8574C21.6048 20.6996 19.9865 18.9628 19.9865 16.8707Z"
				fill="#2D1AA7"
			/>
		</svg>
	);
}
