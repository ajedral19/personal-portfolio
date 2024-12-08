import { useEffect, useState } from "react";

export const useTheme = () => {
	const [state, setState] = useState(false);

	useEffect(() => {
		let curr_theme;
		if (!state) curr_theme = window.localStorage.getItem("ajed_theme");

		return () => {
			window.document.documentElement.setAttribute("data-theme", curr_theme);
			setState(true);
		};
	}, [state]);
};
