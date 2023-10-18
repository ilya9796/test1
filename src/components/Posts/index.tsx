import { Title } from "components/UI";

import { useMediaQuery } from "hooks/useMediaQuery";

import { postData } from "./data";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import style from "./style.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function Posts() {
	const isMobile = useMediaQuery("(max-width: 800px)");
	return (
		<section className={style.post}>
			<Title type="medium">Похожие посты</Title>
			{isMobile ? (
				<div>
					<Swiper
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						spaceBetween={50}
						slidesPerView={1}
						navigation
						pagination={{ clickable: true }}
						onSwiper={(swiper: any) => console.log(swiper)}
						onSlideChange={() => console.log("slide change")}
					>
						{postData.map((post) => (
							<SwiperSlide className={style.post__article} key={post.id}>
								<img src={post.img} alt="" />
								<span>{post.data}</span>
								<p>{post.title}</p>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			) : (
				<div className={style.post__body}>
					{postData.map((post) => (
						<article className={style.post__article} key={post.id}>
							<img src={post.img} alt="" />
							<span>{post.data}</span>
							<p>{post.title}</p>
						</article>
					))}
				</div>
			)}
		</section>
	);
}
