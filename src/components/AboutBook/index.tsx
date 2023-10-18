import { useState } from "react";

import { Title } from "components/UI";
import { ArrIcon, StarIcon } from "components/Icons";

import { ButtonsType } from "./types";

import style from "./style.module.scss";

import cn from "classnames";

export function AboutBook() {
	const [button, setButton] = useState<ButtonsType>("Выберите книгу");

	const [modal, setModal] = useState(false);

	const [star, setStar] = useState(-1);

	return (
		<section onClick={() => setModal(false)} className={style.book}>
			<Title>Что вы думаете об этой книге?</Title>
			<span className={style.book__estimate}>Оцените статью</span>
			<div className={style.book_stars}>
				<span>{star >= 0 && star + 1}</span>
				{Array.from({ length: 5 }).map((_, i) => (
					<StarIcon
						onClick={() => setStar(i)}
						className={i <= star ? style.whiteStar : style.greyStar}
					/>
				))}
			</div>
			<p className={style.book__add}>Добавить комментарий к книге</p>
			<div className={style.book__inputs}>
				<div className={style.book__name}>
					<label htmlFor="name">Имя</label>
					<input placeholder="Name" type="text" />
				</div>
				<input placeholder="Email" className={style.book__mail} type="email" />
				<div onClick={(e) => e.stopPropagation()} className={style.book__modal}>
					<button
						className={style.book__currentBtn}
						onClick={() => setModal(!modal)}
					>
						{button}
					</button>
					{modal && (
						<div className={style.book__popup}>
							{ButtonsType.filter((btn: ButtonsType) => btn !== button).map(
								(btn, i) => (
									<button
										className={btn === button ? style.book__activeBtn : ""}
										onClick={() => {
											setModal(false);
											setButton(btn);
										}}
										key={i}
									>
										{btn}
									</button>
								)
							)}
						</div>
					)}
					<ArrIcon
						className={cn(style.book__arr, modal && style.book__arr_rotate)}
					/>
				</div>
			</div>
			<textarea
				className={style.book__textarea}
				placeholder="Ваш отзыв"
			></textarea>
			<button className={style.book__send}>Отправить</button>
		</section>
	);
}
