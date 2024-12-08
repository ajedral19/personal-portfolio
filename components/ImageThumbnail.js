import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import cn from "classnames";
import test_img from "../assets/images/content/test_img.jpg";

const ImageThumbnail = ({ color, data, square = false, aspect_ratio }) => {
	const [image, setImage] = useState([]);
	const { title, description } = data || {};

	useEffect(() => {
		setImage(data?.display_image);
	}, [data]);

	return (
		<Fragment>
			<div className={cn("thumbnail-card", color, { square })}>
				<div className="thumbnail-card__content-wrap t-left">
					{title && (
						<div className="block content">
							<p>{image}</p>
							<h4 className="title medium t-cap">{title}</h4>
							{/* <p className="title size-normal">{data.meta_description}</p> */}
							{/* <span className="block subject t-upper">{subject}</span> */}
						</div>
					)}
				</div>
				<div className="background">
					{/* <Image layout="responsive" objectFit="contain" className="testimg" src={image} alt="this is a test" /> */}
				</div>
			</div>
		</Fragment>
	);
};

export default ImageThumbnail;
