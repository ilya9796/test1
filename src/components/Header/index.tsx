import { Body } from "./components/Body";
import { Navigation } from "./components/Navigation";

import style from "./style.module.scss";

export function Header() {
	return (
		<section className={style.header}>
			<Navigation />
			<Body />
		</section>
	);
}
