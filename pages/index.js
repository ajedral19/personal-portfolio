import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Fragment, useInsertionEffect } from "react";
import { collapse, typewritter } from "../utils/utils";
import style from "../styles/Home.module.sass";
import cn from "classnames";

// images
import hero from "../assets/images/hero.png";
import profileImg from "../assets/images/profile-image.png";

// components
import Footer from "../components/Footer/footer";
import Description from "../components/Description";
import ImageThumbnail from "../components/ImageThumbnail";
import Carousel from "../components/Carousel/carousel";

// utils
import { fetch_parsed_data } from "../lib/data";
import NavBar from "../components/NavBar/NavBar";
import ScrollToTop from "../components/ScrollToTop";
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
			<NavBar container />

			<header>
				{/* <h1 className="title">Front-end Engineer</h1> */}
			</header>

			<section className="section" id="about">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-3 col-sm-4">
							<Description
								classes={[style.custom_m_r]}
								title="Hey Neighboor"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, impedit vel molestias incidunt dolore laboriosam dolores soluta quas fugit harum temporibus ipsa magnam iste. Illo, ducimus temporibus."
							/>
						</div>
						<div className="col-lg-6 col-md-3 col-sm-4">
							<div className="row">
								<div className="col-lg-6 col-md-3 col-sm-2">
									<Link href="https://github.com/ajedral1994">
										<a target="_blank">
											<ImageThumbnail />
										</a>
									</Link>
								</div>
								<div className="col-lg-6 col-md-3 col-sm-2">
									<Link href="https://www.behance.net/ajedral">
										<a target="_blank">
											<ImageThumbnail />
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section t-left" id="dev">
				<div className="container">
					<h2 className="t-upper title medium mb-1">{state.devWorks}</h2>
					{/* carousel */}
					<Carousel items={projects.rows.length ? projects.rows.filter((item) => item.category === "dev") : null} />
					{/* <Carousel items={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]} /> */}
					{/* carousel */}
				</div>
			</section>

			{/* <section className="section t-left" id="Coding">
				<div className="container">
					<h2 className="t-upper title medium mb-1">having some fun is awesome</h2>
					<Description 
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, impedit vel molestias incidunt dolore laboriosam dolores soluta quas fugit harum temporibus ipsa magnam iste. Illo, ducimus temporibus." 
					/>
				</div>
			</section> */}

			<section className="section t-left" id="design">
				<div className="container">
					<Description title={designWorks.title} description={designWorks.desc} classes={["mb-2"]} />
					{projects.rows.length ? (
						<div className="row">
							{projects.rows.map(
								(proj, key) =>
									proj.category === "design" && (
										<div key={proj.id} className="col-lg-4 col-md-3 col-sm-2">
											<Link
												href="/project/[category]/[id]/[title]"
												as={`/project/${proj.category}/${proj.id}/${proj.title}`}
												scroll={false}
											>
												<a>
													<ImageThumbnail data={proj} />
												</a>
											</Link>
										</div>
									)
							)}
						</div>
					) : (
						// need a layout for this
						<h3>'no projects yet'</h3>
					)}
				</div>
			</section>
			<section className="section" id="resume">
				<div className="container">
					<div className="row t-left">
						<div className="col-lg-4 col-md-6 col-sm-4 pt-5">
							<div className="profile profile-wrap">
								<span className="block img">
									<Image src={profileImg} layout="intrinsic" alt="go go power aj" />
								</span>
							</div>
						</div>
						<div className="col-lg-8 col-md-6 col-sm-4">
							<Description
								title="okay...hear me"
								description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
							>
								<div className="t-left mt-2 mb-4">
									<h3 className="title size-normal medium t-cap">Hey i got some experiences too!</h3>
									<ol className="mt-2 accordion">
										{experiences.length
											? experiences.map((experience, key) => (
													<li key={key} className="mb-1 item">
														<button
															role="button"
															className="btn clear full-width trigger t-cap"
															onClick={(e) => collapse(e)}
														>
															<span className="collapse-icon mr-1">
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
														<article className="collapse content">
															{experience.data.company && (
																<h4 className="block t-cap title size-normal medium">{experience.data.company}</h4>
															)}
															<p className="mb-1 tiny t-cap">
																{experience.data["year-started"] + " - " + experience.data["year-ended"]}
															</p>
															<p className="pb-1">{experience.content}</p>
														</article>
													</li>
											  ))
											: "sad, no experience yet"}
									</ol>
								</div>
							</Description>
							<button className="btn block t-cap">download resume</button>
						</div>
					</div>
				</div>
			</section>
			{/* <ScrollToTop /> */}
			<Footer container />
		</Fragment>
	);
}
