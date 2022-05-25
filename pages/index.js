import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import style from '../styles/Home.module.sass'

// images

// components
import Footer from '../components/Footer/footer'

// utils
import { fetch_parsed_data } from '../lib/data'

export async function getStaticProps() {
  const projects = await fetch_parsed_data('json')
  const content = await fetch_parsed_data('markdown')
  return { props: { projects, content } }
}

export default function Home({ projects, content }) {
  const [state, setState] = useState()

  return (
    <>
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
                  web <span className={style.typing}>Designer</span>
                </div>
                <div className={style.name}>John Doe</div>
              </h1>
            </div>
            <div className={cn(style.heroWrapper)}>
              <div className={cn(style.hero, 'container', style.container)}>
                <img src="/assets/images/hero.png" alt="hero image" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Footer />
    </>
  )
}
