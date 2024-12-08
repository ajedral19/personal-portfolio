import { Fragment, useState, useEffect } from "react";
import { navigateTo } from "../utils/utils";

export default function ScrollToTop() {
	const [button, setButton] = useState({ append: false, hide: false });

	// useEffect(() => {
	//   window.addEventListener('scroll', a)
	//   hideBtn()
	//   return () => {
	//     window.removeEventListener('scroll', a)
	//   }
	// }, [])

	const hideBtn = () => {
		const timeoutId = setTimeout(() => {
			setButton({ ...button, append: false });
		}, 3000);

		if (!button.append) clearTimeout(timeoutId);
	};

	const a = () => {
		if (window.scrollY > 100) {
			setButton({ ...button, append: true });
		} else setButton({ ...button, append: false });
	};

	return (
		<Fragment>
			{button.append && (
				<button onClick={() => navigateTo("header")} className="scroll-to-btn">
					back to top
				</button>
			)}
		</Fragment>
	);
}
