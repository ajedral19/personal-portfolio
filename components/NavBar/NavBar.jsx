import { Fragment } from "react";
import cn from "classnames";
import Link from "next/link";
import style from "./NavBar.module.sass";

const NavBar = ({ container = false, unstick = false }) => {
	return (
		<Fragment>
			<nav className={cn(style.nav)}>
				<div className={cn({ container })}>
					<ul className="row center split-md split-lg">
						<li className="col-lg-12">
							<Link href="/">
								<a className={cn(style.logo)}>
									<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 157.34 157.34">
										<g id="Layer_1-2" data-name="Layer 1">
											<path
												fill="currentColor"
												d="m152.06,50.35h-60.37v8.84h51.21l-12.29,12.29h-38.92v8.82h30.09l-12.29,12.29h-17.8v9.06c0,11.17-9.09,20.27-20.26,20.27s-20.26-9.1-20.26-20.27v-18.01L12.94,121.88c14.07,21.35,38.25,35.46,65.73,35.46,43.45,0,78.67-35.22,78.67-78.67,0-9.99-1.88-19.53-5.28-28.32ZM40.02,121.92c-5.09,0-9.22-4.13-9.22-9.22s4.13-9.22,9.22-9.22,9.22,4.13,9.22,9.22-4.13,9.22-9.22,9.22Zm12.09-56.59L6.79,110.64c-4.35-9.77-6.79-20.59-6.79-31.98C0,35.22,35.22,0,78.67,0c28.59,0,53.61,15.25,67.38,38.06h-66.66v63.6c0,4.4-3.56,7.98-7.97,7.98s-7.97-3.58-7.97-7.98v-36.32h-11.36Z"
											/>
										</g>
									</svg>
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</Fragment>
	);
};

export default NavBar;
