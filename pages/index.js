import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout/layout'
import stl from '../styles/style.module.sass'
import cn from 'classnames'
import Carousel from '../components/Carousel/carousel'
import Footer from '../components/Footer/footer'
import Resume from '../components/Resume/resume'
import Modal from '../components/Modal/modal'
import Preview from '../components/Preview/preview'
import { getData } from '../lib/data'
import { Column, Row } from '../components/FlexBox/flexbox'
import { facebook, instagram, twitter } from '../utils/icons'
import Gallery from '../components/Gallery/gallery'

export async function getStaticProps() {
  const portfolio = await getData('json')
  const job = await getData('markdown')
  return { props: { portfolio, job } }
}

export default function Home({ portfolio, job }) {
  const [state, setState] = useState({
    categories: portfolio.design.categories,
    designs: portfolio.design.work,
    modal: { show: false },
  })

  const switchGalleryContent = (keyword) => {
    const _data = portfolio.design.work.filter((item) =>
      keyword ? item.category === keyword : item.category !== keyword,
    )
    setState({ ...state, designs: _data })
  }

  const preview = async (id) => {
    const foundItem = portfolio.design.work.find((item) => item.id === id)
    if (foundItem) {
      setState({ ...state, modal: { show: true, payload: foundItem } })
    }
  }

  return (
    <Layout>
      <section>
        <Row alignStart>
          <Column sm="12" md="6" lg="6">
            <div className={stl.intro}>
              <h2 className="t-5 uppercase medium mb-1">Who am I?</h2>
              <p className="mb-1">
                A graphic designer and front-end developer who specialized in
                pixel-perfect design to code conversion and delivering quality
                outputs with graphic design.
              </p>
              <ul className={stl.social_media_links}>
                <li>
                  <Link href="/">
                    <a>
                      <i className="icn medium">{facebook}</i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <i className="icn medium">{instagram}</i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <i className="icn medium">{twitter}</i>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </Column>
          <Column sm="6" md="3" lg="3">
            <div className={cn(stl.profile_card)}>
              <div className={cn(stl.cover_wrap, 'mb-1')}>
                <Image
                  priority
                  src="/assets/images/behance-cover.jpg"
                  className={cn(stl.profile_cover)}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
              <h4 className={cn('t-6 bold', stl.title)}>Behance</h4>
              <p>Illo, ducimus temporibus.</p>
            </div>
          </Column>
          <Column sm="6" md="3" lg="3">
            <div className={cn(stl.profile_card)}>
              <div className={cn(stl.cover_wrap, 'mb-1')}>
                <Image
                  priority
                  src="/assets/images/github-cover.jpg"
                  className={cn(stl.profile_cover)}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
              <h4 className={cn('t-6 bold', stl.title)}>Github</h4>
              <p>Rerum, impedit vel molestias.</p>
            </div>
          </Column>
        </Row>
      </section>
      {/*  */}
      <section>
        <h2 className="t-5 uppercase medium mb-1">My Work</h2>

        <Carousel data={portfolio.webdev.work} />
      </section>
      <section>
        <h2 className="t-5 uppercase medium mb-1">Graphic design</h2>
        <p className={cn()}>
          In that case, you can use Server-Side Rendering. It will be slower,
          but the pre-rendered page will always be up-to-date. Or you can skip
          pre-rendering and use client-side JavaScript to populate data.
        </p>
        {/* tabs - this needs to be overflow-x scroll */}
        <ul className={cn(stl.categories, 'mt-2 mb-1')}>
          <li
            className={cn(stl.category, stl.active, 'uppercase medium')}
            onClick={() => switchGalleryContent()}
          >
            all
          </li>
          {state.categories.map((item, key) => (
            <li
              key={key}
              className={cn(stl.category, stl.active, 'uppercase medium')}
              onClick={() => switchGalleryContent(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        {/* tabs */}
        <Gallery data={state.designs} />
        {/* <div className={cn(stl.gallery_widget)}>
          {state.designs.map((item, key) => (
            <div
              key={key}
              className={cn(
                stl.gallery_item,
                stl[`_${key}`],
                { [stl['col-span-2']]: item.span == 'col' },
                { [stl['row-span-2']]: item.span == 'row' },
              )}
              // onClick={() => preview(item.id)}
            >
              <div className={stl.meta_data}>
                <h5 className={cn('medium t-6', stl.title)}>{item.title}</h5>
                <span className={cn('uppercase regular', stl.category)}>
                  {item.category}
                </span>
              </div>
              <div className={stl.item_wrap}>
                <Image
                  priority
                  src={item.image}
                  layout="responsive"
                  objectFit="cover"
                  width="100"
                  height="100"
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div> */}
        <Link href="/">
          <a className="block medium mt-2">click for more</a>
        </Link>
      </section>

      <section>
        <Row alignStart>
          <Column sm="12" md="4" className="relative">
            <span className={stl.about_hero_wrap}>
              <Image
                className={stl.about_hero}
                src="/assets/images/about_me_hero.png"
                layout="fill"
                objectFit="contain"
                // width="100"
                // height="100"
              />
            </span>
          </Column>
          <Column sm="12" md="8">
            <h2 className="t-5 uppercase medium mb-1">About me</h2>
            <Resume profileData={job.data.experience} />
          </Column>
        </Row>
      </section>

      <Footer />
    </Layout>
  )
}
