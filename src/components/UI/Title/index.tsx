import style from "./style.module.scss";

interface ITitleProps {
	children: string;
	type?: "medium" | "big";
}

export function Title({ children, type }: ITitleProps) {
	return (
		<div className={type === "big" ? style.bigTitle : style.mediumTitle}>
			{children}
		</div>
	);
}
