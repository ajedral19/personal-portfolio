import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import cn from 'classnames'
import style from '../../project.module.sass'
import { fetch_parsed_data } from '../../../../lib/data'
import NavBar from '../../../../components/NavBar/NavBar'
import Footer from '../../../../components/Footer/footer'
import Description from '../../../../components/Description'
import ImageThumbnail from '../../../../components/ImageThumbnail'
import Carousel from '../../../../components/Carousel/carousel'
// import style from '../../../styles/Home.module.sass'
// import Header from '../../../components/header'
import prj_img from '../../../../assets/images/content/test_img.jpg'

const fetchRows = async () => {
  const res = await fetch_parsed_data('json')
  return await res.data.projects.rows
}

export async function getStaticProps() {
  return { props: { projects: await fetchRows() } }
}

export async function getStaticPaths() {
  const rows = await fetchRows()

  const paths = rows.map((post) => ({
    params: {
      id: post.id,
      category: post.category,
      title: post.title,
    },
  }))

  return { paths, fallback: false }
}

const Project = ({ projects }) => {
  const router = useRouter()
  const { category, id, title } = router.query
  const [state, setState] = useState({ project: null, other_projects: null })

  // useEffect(() => {
  //   document.title = title
  // })

  useEffect(() => {
    grabContents()
    window.scrollTo(0, 0)
  }, [router.asPath])

  const grabContents = () => {
    let proj = null
    let projs = []
    projects.map((project) => {
      if (project.id === id) proj = project
      else {
        let currId = project.id
        let steps = 1
        if (project.category === category && projs.length < 8)
          projs.push(project)
      }
    })
    setState({ project: proj, other_projects: projs })
  }

  // console.log(state)

  return (
    <>
      {/* Header better to create a Head component */}
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>{state.project?.title}</title>
        <meta name="title" content={state.project?.title} />
        <meta name="description" content={state.project?.meta_description} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={'https://ajedesign.vercel.app' + router.asPath} />
        <meta property="og:title" content={state.project?.title} />
        <meta property="og:description" content={state.project?.meta_description} />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={'https://ajedesign.vercel.app' + router.asPath} />
        <meta property="twitter:title" content={state.project?.title} />
        <meta property="twitter:description" content={state.project?.meta_description} />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      </Head>
      {/* end Header */}
      <NavBar container />
      <section className={cn('section', 'mt-6')}>
        <div className={cn('container')}>
          {state.project ? (
            <div className={cn('row')}>
              <div className={cn('col-sm-4', 'col-md-3', 'col-lg-5')}>
                <div>
                  <div className={cn(style.image_wrap)}>
                    {/* <Image src="" /> */}
                    <Image
                      layout='fill'
                      objectFit='cover'
                      src={prj_img}
                      alt="this is test image"
                    />
                  </div>
                </div>
              </div>
              <div className={cn('col-sm-4', 'col-md-3', 'col-lg-7')}>
                <div className={cn('t-left', style.content)}>
                  <Description
                    title={state.project.title}
                    description={state.project.description}
                    classes={['mb-2']}
                  >
                    {state.project.tags && (
                      <div className={cn(style.tags, 'mb-2', 'mt-2')}>
                        {state.project.tags.map((tag, key) => (
                          <span key={key} className={cn(style.tag)}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Description>

                  {/* make this a component */}
                  <div className={cn(style.buttons)}>
                    <Link href="">
                      <a className={cn('btn')}>Demo</a>
                    </Link>
                    <Link href="">
                      <a className={cn('btn')}>Source</a>
                    </Link>
                  </div>
                </div>

                {state.other_projects ?
                  <div className={cn('mt-2')}>
                    <span className={cn('block', 't-left', 'mb-1', 'medium')}>
                      Check my other projects
                    </span>
                    <Carousel items={state.other_projects} />
                  </div>
                  : 'loading...'}
              </div>

            </div>
          ) : (
            'loading...'
          )}
        </div>
      </section>
      <Footer container />
    </>
  )
}

export default Project
