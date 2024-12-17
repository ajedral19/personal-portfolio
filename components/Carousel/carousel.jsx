import { Fragment, useEffect, useState } from "react";
import cn from "classnames";
import style from "./carousel.module.sass";

const Carousel = ({ items = [] }) => {

	const [load, setLoad] = useState(false)

	useEffect(() => {
		if(!load){
			const scroller = document.querySelector(`.${style.infinite_scroll__scroller}`)
			const items = Array.from(scroller.children)
			items.forEach(item => {
				const clone = item.cloneNode(true)
				clone.setAttribute('area-hidden', "true")
				scroller.appendChild(clone)
			})
			
		}

		return () => setLoad(true)

	}, [load])

    return (
        <Fragment>
            {items.length && (
                <div className={cn(style.infinite_scroll)}>
                    <ul className={cn(style.infinite_scroll__scroller)}>
                        {items.map((item) => (
                            <li key={item.name}>{item.icon}</li>
                        ))}
                    </ul>
                </div>
            )}
        </Fragment>
    );
};

export default Carousel;