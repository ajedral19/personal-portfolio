import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import style from "./carousel.module.sass";
import cn from "classnames";
import Card from "../Card/Card";
// import { slide } from '../../utils/utils'

const Carousel = ({ items = [] }) => {
	let cards = [
		{
			id: "a",
			title: "",
			description: "",
		},
		{
			id: "b",
			title: "",
			description: "",
		},
		{
			id: "c",
			title: "",
			description: "",
		},
		{
			id: "d",
			title: "",
			description: "",
		},
		{
			id: "e",
			title: "",
			description: "",
		},
	];
	const [currentIndex, setCurrentIndex] = useState(0);

	const cardsOnDisplay = (n, n_start) => {
		if (n > cards.length || !(n_start in cards)) return;
		let arr = [];
		for (let i = 1; i <= n; i++) {
			if (n_start > cards.length - 1) n_start = 0;
			arr = [...arr, n_start];
			n_start += 1;
		}

		return arr;
	};

	const slide = (next = false) => {
		let i = currentIndex;
		i = !next ? (currentIndex <= 0 ? cards.length - 1 : currentIndex - 1) : currentIndex >= cards.length - 1 ? 0 : currentIndex + 1;
		setCurrentIndex(i);
	};

	console.log(cardsOnDisplay(4, currentIndex));

	return (
		<Fragment>
			<div className={cn(style.carousel)}>
				<div className={cn(style.carousel__control)}></div>
				<div className={cn(style.carousel__platform)}>
					{cards?.map((item, key, arr) => (
						<div key={key} className={cn(style.carousel__platform__item, { [[style]["active"]]: item.visible })}>
							<Card type="image" />
						</div>
					))}
				</div>
				<button onClick={() => slide()}>prev</button>
				<button onClick={() => slide(true)}>next</button>
			</div>
		</Fragment>
	);
};

export default Carousel;
