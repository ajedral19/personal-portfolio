import { Fragment } from "react";
import cn from "classnames";
import style from "./carousel.module.sass";

const Carousel = ({ items = [] }) => {
	return (
		<Fragment>
			{items.length && (
				<ul className={cn(style.carousel)}>
					{items.map((item) => (
						<li key={item.name}>{item.icon}</li>
					))}
				</ul>
			)}
		</Fragment>
	);
};

export default Carousel;
