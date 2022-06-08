import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
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

  useEffect(() => {
    document.title = title
  })

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
      {/* <Header /> */}
      <NavBar container />
      <section className={cn('section', 'mt-6')}>
        <div className={cn('container')}>
          {state.project ? (
            <div className={cn('row')}>
              <div className={cn('col-sm-4', 'col-md-3', 'col-lg-5')}>
                <div>
                  <div className={cn(style.image_wrap)}>
                    {/* <Image src="" /> */}
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
