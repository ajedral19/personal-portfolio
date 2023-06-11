import { Fragment } from "react";
import Image from "next/image";
import cn from "classnames";
import style from "./Card.module.sass";

import placeholder_img from "/assets/images/content/placeholder_image.png";

const Card = ({ title, description, type = null, ratio = null }) => {
	return (
		<Fragment>
			<div className={cn(style.card)}>
				<div className={cn(style.card__thumbnail)}>
					<span className={cn(style.img_wrap)}>
						<Image src={placeholder_img} layout="fill" objectFit="contain" alt="" />
					</span>
				</div>
				{type == "image" && (
					<div className={cn(style.card__socmed)}>
						<button aria-label="like">Like</button>
						<button aria-label="Pin">Pin</button>
						<span className={cn(style.idk)}>
							<button aria-label="Pin">idk</button>
						</span>
					</div>
				)}
				<div className={cn(style.card__body, { [style["card__body--hidden"]]: type == "image" })}>
					{title && <h4 className={cn(style.title)}>{title}</h4>}
					{description && <p className={cn(style.p)}>{description}</p>}
				</div>
			</div>
		</Fragment>
	);
};

export default Card;
