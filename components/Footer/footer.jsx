import { Fragment } from "react";
import style from "./footer.module.sass";
import cn from "classnames";
import Link from "next/link";
import { FaGithubAlt } from "react-icons/fa";
import { ImBehance } from "react-icons/im";

const profileLinks = [
	{
		name: "Github",
		icon: <FaGithubAlt fontSize="2rem" />,
		url: "https://github.com/ajedral19",
	},
	{
		name: "Behance",
		icon: <ImBehance fontSize="2rem" />,
		url: "https://www.behance.net/ajedral",
	},
];

export default function Footer({ container = false }) {
	return (
		<Fragment>
			<footer className="footer t-left">
				<div className={cn({ container }, style.borderTop)}>
					<div className={cn("row pt-1 pb-1 grow clear")}>
						<div className="col-lg-6 col-md-3 col-sm-2">
							<Link href="/">
								<a className="medium tiny">GoGoPowerAJ &copy;</a>
							</Link>
						</div>
						<div className="col-lg-6 col-md-3 col-sm-2">
							<ul className={style.profileLinks}>
								{profileLinks.map((item, key) => (
									<li key={key}>
										<Link href={item.url}>
											<a target="_blank" rel="noopener noreferrer">
												<item className="icon">{item.icon}</item>
											</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</Fragment>
	);
}
