import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Fragment } from "react";
import { collapse } from "../utils/utils";
import style from "../styles/Home.module.sass";
import cn from "classnames";

// components
import Footer from "../components/Footer/footer.jsx";

// utils
import { fetch_parsed_data } from "../lib/data";
import NavBar from "../components/NavBar/NavBar";
import Modal from "../components/Modal/Modal";

export async function getStaticProps() {
	const projectsData = await fetch_parsed_data("json");
	const experiences = await fetch_parsed_data("markdown");
	return { props: { projects: projectsData.data.projects, experiences } };
}

const template = {
	title: "",
	desc: "",
};

export default function Home({ projects, experiences }) {
	// const [skills, setSkills] = useState(["code", "design", "any"]);
	// const [devWorks, setDevWorks] = useState(template);
	const [designWorks] = useState(template); //setDesignWorks
	const [state, setState] = useState({
		promptModal: false,
	});

	const [word, setWord] = useState("");

	const handleModalOnClick = () => setState({ ...state, promptModal: false });

	// to do next

	useEffect(() => {
		// typewritter(skills, 0, 0, setWord);
		// changeWord(Math.floor(Math.random() * skillset.length))
	}, [word]);

	useEffect(() => {
		document.body.style.overflow = state.promptModal ? "hidden" : "unset";
	}, [state.promptModal]);

	return (
		<Fragment>
			{state.promptModal && <Modal onClick={handleModalOnClick} />}
			<main>
				<NavBar container />
				<header>
					<div className="container">
						<h1 className={cn("title size-normal medium", style.intro)}>
							<span className="block title bold size-large">AJ Edral</span>
							Your regular normal neighboor
						</h1>
					</div>
				</header>
				<section className="container t-left pt-6 pb-6">
					<div className="row center-items split-lg reverse-md reverse-lg">
						<div className="col-lg-6 col-md-3 col-sm-4">
							<Image
								src="/assets/the_me.gif"
								alt=""
								width={540}
								height={260}
								layout="responsive"
								objectFit="cover"
								className="greyscale"
							/>
						</div>
						<div className="col-lg-5 col-md-3 col-sm-4">
							<h3 className="mb-2 title semibold">Hey Neighboor</h3>
							<p>
								Just a quick brief. I was a graphic designer, I specialized on creating logos and digital marketing
								assets. I then worked as front-end developer and now I am as a somehow a Web Developer.
							</p>
						</div>
					</div>
				</section>

				<section className="pt-6 pb-6">
					<div className="container">
						<div className="row split-md relative">
							<div className="col-lg-4 col-md-3 col-sm-4 lg-sticky">
								<h4 className="title medium mb-4">Background and experiences</h4>
								<p className="mb-2">
									I am a Graphic Designer and Front-end (Web somehow) Developer. In 2017 I decided to do some coding and
									set aside designing.
								</p>
								<p className="mb-2">
									Besides, I love watching creepy YouTube videos/Horror Movies every night or dawn with lights turned
									off, and that makes me feel better every time I felt tired of creating something.
								</p>
								<p>
									Sounds nonsence, right?
									<br />
									But nevermind.
								</p>

								{/* <button className="btn">Download CV</button> */}
							</div>
							<div className="col-lg-5 col-md-3 col-sm-4">
								<ol className="accordion pt-6">
									{experiences.length
										? experiences.map((experience, key) => (
												<li key={key} className="mb-1 item">
													<button
														role="button"
														className="btn clear full-width trigger t-cap"
														onClick={(e) => collapse(e)}
													>
														<span className="collapse-icon mr-1 collapse">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="12"
																height="12"
																viewBox="0 0 12 12"
																className="icon"
															>
																<g id="Group_114" data-name="Group 114" transform="translate(-799 -3136)">
																	<rect
																		className="rectA"
																		data-name="Rectangle 220"
																		width="12"
																		height="2"
																		transform="translate(799 3141)"
																		fill="#eaeaea"
																	/>
																	<rect
																		className="rectB"
																		data-name="Rectangle 221"
																		width="12"
																		height="2"
																		transform="translate(806 3136) rotate(90)"
																		fill="#eaeaea"
																	/>
																</g>
															</svg>
														</span>
														{experience.data.title}
													</button>
													<article className="content">
														{experience.data.company && (
															<h4 className="block t-cap title size-normal medium" style={{ lineHeight: 1.6 }}>
																{experience.data.company}
															</h4>
														)}
														<p className="mb-1 title size-normal t-cap">
															{experience.data["year-started"] + " - " + experience.data["year-ended"]}
														</p>
														<p className="pb-1">{experience.content}</p>
													</article>
												</li>
										  ))
										: "sad, no experience yet"}
								</ol>
							</div>
						</div>
					</div>
				</section>

				<Footer container />
			</main>
		</Fragment>
	);
}
