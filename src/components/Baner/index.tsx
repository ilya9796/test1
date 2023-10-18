import { images } from "images";

import style from "./style.module.scss";

export function Baner() {
	return (
		<section className={style.baner}>
			<img src={images.baner} alt="" />
			<p>
				Реклама на <span>blabla.com</span>
			</p>
		</section>
	);
}
