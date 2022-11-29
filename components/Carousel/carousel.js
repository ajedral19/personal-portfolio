import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import style from "./carousel.module.sass";
import cn from "classnames";
import Card from "../Card/Card";
import { el } from "date-fns/locale";
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
		{
			id: "f",
			title: "",
			description: "",
		},
		{
			id: "g",
			title: "",
			description: "",
		},
	];

	const [elements, setElements] = useState([])

	const constructElements = () => {
		const elements_array = cards.map((item, key) =>
			<Fragment key={key}>
				<p>{item.id}</p>
				<div className={cn(style.carousel__platform__item)}>
					<Card type="image" />
				</div>
			</Fragment>
		)
		setElements(elements_array)
	}


	useEffect(() => {
		constructElements()
	}, [])


	const slide = () => {
		let arr = elements
		let a = arr.shift()
		arr.push(a)
		setElements([...arr])
	}

	return (
		<Fragment>
			<div className={cn(style.carousel)}>
				<div className={cn(style.carousel__control)}></div>
				<div className={cn(style.carousel__platform)}>
					{
						elements?.map((item, key, arr) => (
							item
						)
						)}
				</div>
				<button onClick={() => slide()}>prev</button>
				<button onClick={() => slide()}>next</button>
			</div>
		</Fragment >
	);
};

export default Carousel;
