import { useState } from "react";

import { Modal } from "components/UI/Modal";
import { LogoIcon } from "components/Icons";
import { NavigationMenu } from "./components/NavigationMenu";

import style from "./style.module.scss";

export function Navigation() {
	const [mainModal, setMainModal] = useState(false);
	return (
		<div className={style.navigation}>
			<LogoIcon />
			<NavigationMenu mainModal={mainModal} setMainModal={setMainModal} />
			<Modal modal={mainModal} setModal={setMainModal} />
		</div>
	);
}
