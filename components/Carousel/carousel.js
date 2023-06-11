import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import style from "./carousel.module.sass";
import cn from "classnames";
import Card from "../Card/Card";
import { el } from "date-fns/locale";
// import { slide } from '../../utils/utils'



const sampleData = [
	{
		id: 'A01',
		title: "Title 1",
		description: ""
	},
	{
		id: 'A02',
		title: "Title 2",
		description: ""
	},
	{
		id: 'A03',
		title: "Title 3",
		description: ""
	},
	{
		id: 'A04',
		title: "Title 4",
		description: ""
	},
	{
		id: 'A05',
		title: "Title 5",
		description: ""
	},
	{
		id: 'A06',
		title: "Title 6",
		description: ""
	},
	{
		id: 'A07',
		title: "Title 7",
		description: ""
	}
]
const Carousel = () => {
	return <>
		<div className="container">
			<div className={cn(style.controls)}>
				<button> {"prev<"} </button>
				<button> {">next"} </button>
			</div>
			<div className={cn(style.carousel, style["carousel--type-solo"])}>
				{
					sampleData.map((item, key, sampleData) => (
						<div key={item.id} className={cn(style.carousel__wagon)}>
							<Card ratio="1:1" title={item.title} />
						</div>
					))
				}
			</div>
		</div>
	</>
}

export default Carousel