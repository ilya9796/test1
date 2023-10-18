import { Title } from "components/UI";
import { QuotesIcon } from "components/Icons";

import style from "./style.module.scss";

export function AboutJS() {
	return (
		<section className={style.about}>
			<Title type="medium">Серверный JavaScript</Title>
			<div className={style.about__body}>
				<QuotesIcon className={style.aboutQuotes} />
				<div className={style.about__text}>
					<p>
						Разработчики и клиенты часто неправильно понимают, что такое
						система. Они видят графический интерфейс и думают, что он и есть
						система. Они определяют систему в терминах графического интерфейса и
						считают, что должны сразу начать работу с графическим интерфейсом.
						Они не понимают важнейшего принципа: ввод/вывод не важен.
					</p>
					<span>— Р. Мартин</span>
				</div>
			</div>
		</section>
	);
}
