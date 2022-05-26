import Image from 'next/image'
import { useState, useEffect, Fragment } from 'react'
import { collapse } from '../utils/utils'
import style from '../styles/Home.module.sass'
import cn from 'classnames'

// images
import hero from '../assets/images/hero.png'
import profileImg from '../assets/images/profile-image.png'

// components
import Footer from '../components/Footer/footer'
import Description from '../components/Description'
import ImageThumbnail from '../components/ImageThumbnail'
import Carousel from '/components/Carousel/carousel'

// utils
import { fetch_parsed_data } from '../lib/data'

export async function getStaticProps() {
  const projects = await fetch_parsed_data('json')
  const content = await fetch_parsed_data('markdown')
  return { props: { projects, content } }
}

export default function Home({ projects, content }) {
  const [state, setState] = useState({ desc: '' })

  useEffect(() => {
    setState({
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, impedit vel molestias incidunt dolore laboriosam dolores soluta quas fugit harum temporibus ipsa magnam iste. Illo, ducimus temporibus.',
    })
  }, [setState])

  return (
    <Fragment>
      <header className={cn('top-page', style.topPage)}>
        <div className={style.banner}>
          <div className={style.heading}>
            <div className={style.strips}>
              <span className={style.strip}></span>
              <span className={cn(style.strip, style.large)}></span>
            </div>
            <div className={cn('container', style.topPageContainer)}>
              <h1>
                <div className={style.title}>
                  knows how to <span className={style.typing}>code</span>
                </div>
                <div className={style.name}>John Doe</div>
              </h1>
            </div>
            <div className={cn(style.heroWrapper)}>
              <div className={cn(style.hero, 'container', style.container)}>
                <span className={cn(style.img, 'block')}>
                  <Image layout="intrinsic" src={hero} alt="hero image" />
                </span>
                {/* <img src="/assets/images/hero.png" alt="hero image" /> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-3 col-sm-4">
              <Description
                classes={[style.custom_m_r]}
                title="This is a title"
                description={state.desc}
              />
            </div>
            <div className="col-lg-6 col-md-3 col-sm-4">
              <div className="row">
                <div className="col-lg-6 col-md-3 col-sm-2">
                  <ImageThumbnail />
                </div>
                <div className="col-lg-6 col-md-3 col-sm-2">
                  <ImageThumbnail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section t-left">
        <div className="container">
          <h2 className="t-upper title medium mb-1">web development</h2>
          {/* carousel */}
          <Carousel items={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]} />
          {/* carousel */}
        </div>
      </section>

      <section className="section t-left">
        <div className="container">
          <Description
            title="graphic / web design"
            description={state.desc}
            classes={['mb-2']}
          />
          <div className="row">
            <div className="col-lg-4 col-md-3 col-sm-2">
              <ImageThumbnail />
            </div>
            <div className="col-lg-4 col-md-3 col-sm-2">
              <ImageThumbnail color="orange" />
            </div>
            <div className="col-lg-4 col-md-3 col-sm-2">
              <ImageThumbnail />
            </div>
            <div className="col-lg-4 col-md-3 col-sm-2">
              <ImageThumbnail color="orange" />
            </div>
            <div className="col-lg-4 col-md-3 col-sm-2">
              <ImageThumbnail />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row t-left">
            <div className="col-lg-4 col-md-6 col-sm-4 pt-5">
              <div className="profile profile-wrap">
                <span className="block img">
                  <Image
                    src={profileImg}
                    layout="intrinsic"
                    alt="go go power aj"
                  />
                </span>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-4">
              <Description title="hear me" description={state.desc}>
                <div className="t-left mt-2">
                  <h3 className="title size-normal medium t-cap">
                    i got some experiences too!
                  </h3>

                  <ol className="mt-1 accordion">
                    <li className="mb-1 item">
                      <span
                        role="button"
                        className="trigger t-cap"
                        onClick={(e) => collapse(e)}
                      >
                        2016 - graphic / web designer
                      </span>
                      <article className="collapse content">
                        <h4 className="t-cap title size-normal medium mb-1 pt-1">
                          binary ideas, st. diego inc.
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
                    </li>
                  </ol>
                </div>
              </Description>
              <button className="btn t-cap mt-2">download resume</button>
            </div>
          </div>
        </div>
      </section>
      <Footer container />
    </Fragment>
  )
}
