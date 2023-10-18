import { useEffect, useRef } from "react";

import style from "./style.module.scss";

import { books } from "./books";

export function Body() {
	const headerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const slider = headerRef.current;

		if (slider) {
			slider.addEventListener("wheel", handleScroll);

			return () => {
				if (slider) {
					slider.removeEventListener("wheel", handleScroll);
				}
			};
		}
	}, []);

	const handleScroll = (e: WheelEvent) => {
		if (e.deltaY !== 0) {
			if (headerRef.current) {
				headerRef.current.scrollLeft += e.deltaY;
				e.preventDefault();
			}
		}
	};

	return (
		<header className={style.header}>
			<h1 className={style.header__title}>Путь JavaScript</h1>
			<div ref={headerRef} className={style.header__slider}>
				{books.map((image, i) => (
					<img className={style.header__img} key={i} src={image} alt="" />
				))}
			</div>
			<p className={style.header__text}>
				Можно выделить три основных направления для прогресса JavaScript{" "}
			</p>
		</header>
	);
}
