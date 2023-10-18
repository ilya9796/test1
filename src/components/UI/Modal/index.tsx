import { CloseIcon } from "components/Icons";

import { Portal } from "../Portal";

import style from "./style.module.scss";

import cn from "classnames";

interface Iprops {
	className?: string;
	modal: boolean;
	setModal: (el: boolean) => void;
}

export function Modal({ setModal, modal }: Iprops) {
	return (
		<Portal>
			<div
				onClick={() => setModal(false)}
				className={cn(
					style.modal,
					modal ? style.modal__open : style.modal__close
				)}
			>
				<article
					onClick={(e) => e.stopPropagation()}
					className={style.modal__article}
				>
					<div
						className={style.modal__closeIcon}
						onClick={() => setModal(false)}
					>
						<CloseIcon />
					</div>

					<h2>Начать учиться</h2>
					<p className={style.modal__recall}>
						Оставьте заявку и наш менеджер вам перезвонит.
					</p>
					<div className={style.modal__name}>
						<input placeholder="Name" type="text" />
					</div>
					<input
						placeholder="Ваш email"
						className={style.modal__emaile}
						type="text"
					/>
					<button className={style.modal__btn}>Отправить</button>
					<p className={style.modal__subtitle}>
						Нажимая кнопку «Отправить», вы соглашаетесь
						<a href="#"> с политикой конфиденциальности</a>
					</p>
				</article>
			</div>
		</Portal>
	);
}
