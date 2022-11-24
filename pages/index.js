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
import Banner from "../components/Banner/Banner";
import NavBar from "../components/NavBar/NavBar";
import Modal from "../components/Modal/Modal";
import ScrollToTop from "../components/ScrollToTop";

// utils
import { fetch_parsed_data } from "../lib/data";
import Card from "../components/Card/Card";

export async function getStaticProps() {
	const projectsData = await fetch_parsed_data("json");
	const experiences = await fetch_parsed_data("markdown");
	return { props: { projects: projectsData.data.projects, experiences } };
}

export default function Home({ projects, experiences }) {
	const [skills, setSkills] = useState(["code", "design", "any"]);
	const [state, setState] = useState({
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, impedit vel molestias incidunt dolore laboriosam dolores soluta quas fugit harum temporibus ipsa magnam iste. Illo, ducimus temporibus.",
		promptModal: true,
	});

	const [word, setWord] = useState("Code");

	const handleModalOnClick = () => setState({ ...state, promptModal: false });

	// to do next

	// useEffect(() => {
	//   typewritter(setWord, skills, Math.floor(Math.random() * skills.length))
	//   // changeWord(Math.floor(Math.random() * skillset.length))
	// }, [word])

	useEffect(() => {
		// document.body.style.overflow = state.promptModal ? 'hidden' : 'unset'
	}, [state.promptModal]);

	return (
		<Fragment>
			{/* {state.promptModal && <Modal onClick={handleModalOnClick} />} */}
			{/* <NavBar container={false} /> */}
			{/* <NavBar container />
      <Banner /> */}
			<section className="section" id="about">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-3 col-sm-4">
							<Description classes={[style.custom_m_r]} title="Hey neighbor" description={state.desc} />
						</div>
						<div className="col-lg-6 col-md-3 col-sm-4">
							<div className="row">
								<div className="col-lg-6 col-md-3 col-sm-2">
									<Link href="https://github.com/ajedral1994">
										<a target="_blank">
											<Card />
										</a>
									</Link>
								</div>
								<div className="col-lg-6 col-md-3 col-sm-2">
									<Link href="https://www.behance.net/ajedral">
										<a target="_blank">
											<Card />
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <section className="section t-left" id="dev">
        <div className="container">
          <h2 className="t-upper title medium mb-1">Check out my dev stuffs</h2>
          <Carousel
            items={
              projects.rows.length
                ? projects.rows.filter((item) => item.category === 'dev')
                : null
            }
          />
        </div>
      </section> */}

			<section className="section t-left" id="design">
				<div className="container">
					<Description title="i can design too" description={state.desc} classes={["mb-2"]} />
          <Card type="image" ratio=""/>
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
							<Description title="okay...hear me" description={state.desc}>
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
										{/* <li className="mb-1 item">
                      <span
                        role="button"
                        className="trigger t-cap"
                        onClick={(e) => collapse(e)}
                      >
                        2018 - associate graphic designer
                      </span>
                      <article className="collapse content">
                        <h4 className="t-cap title size-normal medium mb-1 pt-1">
                          ripe concepts
                        </h4>
                        <p className="pb-1">{state.desc}</p>
                      </article>
                    </li>
                    <li className="mb-1 item">
                      <span
                        role="button"
                        className="trigger t-cap"
                        onClick={(e) => collapse(e)}
                      >
                        2019 - junior front-end developer
                      </span>
                      <article className="collapse content">
                        <h4 className="t-cap title size-normal medium mb-1 pt-1">
                          customer business services
                          <span className="t-upper">(CBS)</span>, cebu
                        </h4>
                        <p className="pb-1">{state.desc}</p>
                      </article>
                    </li>
                    <li className="mb-1 item">
                      <span
                        role="button"
                        className="trigger t-cap"
                        onClick={(e) => collapse(e)}
                      >
                        current - freelance logo / graphic designer
                      </span>
                      <article className="collapse content">
                        <h4 className="t-cap title size-normal medium mb-1 pt-1">
                          graphic / logo / web design flatforms
                        </h4>
                        <p className="pb-1">{state.desc}</p>
                      </article>
                    </li> */}
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
