import { useState } from "react";

import { ArrIcon, MenuIcon } from "components/Icons";

import { links } from "../../links";

import { useMediaQuery } from "hooks/useMediaQuery";

import style from "./style.module.scss";

import cn from "classnames";

interface IProps {
	mainModal: boolean;
	setMainModal: (el: boolean) => void;
}

export function NavigationMenu({ mainModal, setMainModal }: IProps) {
	const isMobile = useMediaQuery("(max-width: 800px)");

	const [coutcesModal, setCourcesModal] = useState(false);
	const [menu, setMenu] = useState(false);

	const cources = [
		"JavaScript Pro",
		"JavaScript для новчиков",
		"JavaScript ниндзя",
	];

	return (
		<>
			{isMobile && <MenuIcon onClick={() => setMenu((prev) => !prev)} />}
			<nav
				className={cn(
					isMobile ? style.navigation__mobile : "",
					menu ? style.navigation__open : style.navigation__close
				)}
			>
				<ul className={style.navigation__list}>
					{links.map((link) => (
						<li
							onClick={() => {
								if (link.name === "Курсы") {
									setCourcesModal((prev) => !prev);
								}
							}}
							className={style.navigation__underlink}
							key={link.name}
						>
							<a className={style.navigation__link} href={link.link}>
								{link.name}
							</a>
							{link.name === "Курсы" && (
								<ArrIcon
									className={coutcesModal ? style.navigation__link_clicked : ""}
								/>
							)}
							{link.name === "Статьи" && <ArrIcon />}
							{link.name === "Курсы" && coutcesModal && (
								<div className={style.navigation__courcees}>
									{cources.map((el) => (
										<span>{el}</span>
									))}
								</div>
							)}
						</li>
					))}
				</ul>
				{isMobile && (
					<button
						onClick={() => setMainModal(!mainModal)}
						className={style.navigation__button}
					>
						Начать учиться
					</button>
				)}
			</nav>
			{!isMobile && (
				<button
					onClick={() => setMainModal(!mainModal)}
					className={style.navigation__button}
				>
					Начать учиться
				</button>
			)}
		</>
	);
}
