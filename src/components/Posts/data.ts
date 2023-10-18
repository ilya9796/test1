import { images } from "../../images";

export interface IPostData {
	img: string;
	data: string;
	title: string;
	id: number;
}

export const postData: IPostData[] = [
	{
		img: images.post_1,
		data: "12 декабря",
		title: "События жизненного цикла ReactJS",
		id: 1,
	},
	{
		img: images.post_2,
		data: "10 декабря",
		title: "CSS Grids. Полное руководство",
		id: 2,
	},
	{
		img: images.post_3,
		data: "5 декабря",
		title: "Асинхронность в JavaScript",
		id: 3,
	},
];
