import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import style from "./carousel.module.sass";
import cn from "classnames";
import Card from "../Card/Card";
// import { slide } from '../../utils/utils'

const Carousel = ({ items = [] }) => {
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	// function getThreeValues(n) {
	//   if (!(n in arr)) return
	//   let _arr = [];
	//   if (n == 0)
	//     _arr = [arr.length - 1, n, n + 1]
	//   else if (n >= arr.length - 1)
	//     _arr = [n - 1, n, 0]
	//   else
	//     _arr = [n - 1, n, n + 1]
	//   console.log(_arr)
	// }
	const [count, setCount] = useState(0);
	const [carts, setCarts] = useState([]);
	// useEffect(() => {
	// 	let count = 0;
	// 	window.setInterval(() => {
	// 		getThreeValues(count);
	// 		count += 1;
	// 		if (count > arr.length - 1) count = 0;
	// 	}, 2000);
	// }, []);

	function getThreeValues(n) {
		if (!(n in arr)) return;
		let _arr = [];
		if (n == 0) _arr = [arr.length - 1, n, n + 1];
		else if (n >= arr.length - 1) _arr = [n - 1, n, 0];
		else _arr = [n - 1, n, n + 1];

		const els = _arr.map((i) => (
			<div key={i} className={cn(style.carousel__platform__item, `${i}`)} data-r="b">
				<Card type="image" />
			</div>
		));

		setEls(els);
	}

	const generateCarts = (data, n_of_display, n_start = null) => {
		if (!(n_of_display in data) || n_of_display <= 0) return;

		let right_excess;
		let left_excess;
		let new_arr = [];
		for (let i = 0; i < n_of_display; i++) {
			left_excess = !(i >= data.length) && data[data.length - 1];
			right_excess = n_of_display >= data.length - 1 ? data[0] : data[n_of_display];
			new_arr = [...new_arr, data[i]];
		}
		return [left_excess, ...new_arr, right_excess];
	};

	// const data = generateCarts([1, 4, 56, 7, 4, 2, 2, 3, 99], 8);
	const data = generateCarts([1, 4, 56, 7, 4, 2, 2, 3, 99], 1);

	return (
		<Fragment>
			<div className={cn(style.carousel)}>
				<div className={cn(style.carousel__control)}></div>
				<div className={cn(style.carousel__platform)}>
					{data?.map((item, key) => (
						<div id={key} key={key} className={cn(style.carousel__platform__item)}>
							<Card type="image" />
						</div>
					))}
					{/* <div className={cn(style.carousel__platform__item)}>
						<Card type="image" />
            </div>
					<div className={cn(style.carousel__platform__item)}>
          <Card type="image" />
					</div>
					<div className={cn(style.carousel__platform__item)}>
						<Card type="image" />
            </div>
					<div className={cn(style.carousel__platform__item)}>
          <Card type="image" />
					</div>
					<div className={cn(style.carousel__platform__item)}>
						<Card type="image" />
					</div>
					<div className={cn(style.carousel__platform__item)}>
          <Card type="image" />
        </div> */}
				</div>
				<button>next</button>
			</div>
		</Fragment>
	);
};

export default Carousel;
