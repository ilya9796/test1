import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface IPortal {
	children: ReactNode;
	container?: HTMLElement;
}

export function Portal({ children, container = document.body }: IPortal) {
	return ReactDOM.createPortal(children, container);
}
