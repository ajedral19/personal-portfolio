import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Fragment, useInsertionEffect } from "react";
import { collapse, typewritter } from "../utils/utils";
import style from "../styles/Home.module.sass";
import cn from "classnames";

// images
import profileImg from "../assets/images/profile-image.png";

// components
import Footer from "../components/Footer/footer";
import Description from "../components/Description";
import NavBar from "../components/NavBar/NavBar";

// utils
import { fetch_parsed_data } from "../lib/data";

export async function getStaticProps() {
	const projectsData = await fetch_parsed_data("json");
	const experiences = await fetch_parsed_data("markdown");
	return { props: { projects: projectsData.data.projects, experiences } };
}

export default function Home({ projects, experiences }) {
	return (
		<Fragment>
			<NavBar container />
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
							<Description title="Career Experiences" description={state.desc}>
								<div className="t-left mt-2">
									<h3 className="title size-normal medium t-cap">Hey i got some experiences too!</h3>
									<ol className="mt-2 accordion">
										{experiences.length
											? experiences.map((experience, key) => (
													<li key={key} className="mb-1 item">
														<button role="button" className="btn clear full-width trigger t-cap" onClick={(e) => collapse(e)}>
															<span className="collapse-icon mr-1">
																<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" className="icon">
																	<g id="Group_114" data-name="Group 114" transform="translate(-799 -3136)">
																		<rect className="rectA" data-name="Rectangle 220" width="12" height="2" transform="translate(799 3141)" fill="#eaeaea" />
																		<rect className="rectB" data-name="Rectangle 221" width="12" height="2" transform="translate(806 3136) rotate(90)" fill="#eaeaea" />
																	</g>
																</svg>
															</span>
															{experience.data.title}
														</button>
														<article className="collapse content">
															{experience.data.company && <h4 className="block t-cap title size-normal medium">{experience.data.company}</h4>}
															<p className="mb-1 tiny t-cap">{experience.data["year-started"] + " - " + experience.data["year-ended"]}</p>
															<p className="pb-1">{experience.content}</p>
														</article>
													</li>
											  ))
											: "sad, no experience yet"}
									</ol>
								</div>
							</Description>
							<button className="btn t-cap mt-2">download resume</button>
						</div>
					</div>
				</div>
			</section>
			{/* <ScrollToTop /> */}
			<Footer container />
		</Fragment>
	);
}
