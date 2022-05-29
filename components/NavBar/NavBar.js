import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import style from './NavBar.module.sass'
import { collapse } from '../../utils/utils'

const NavBar = ({ container = false }) => {
  const [state, setState] = useState({ returnTop: null, contactDetails: null })

  useEffect(() => {
    window.addEventListener('resize', resize)
    window.addEventListener('load', resize)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('load', resize)
    }
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  const resize = () => {
    if (window.innerWidth <= 768) {
      setState({
        returnTop: (
          <button
            className={cn('btn', 'square', style.scroll_to_top)}
            onClick={scrollUp}
          >
            ^
          </button>
        ),
      })
    }
    // setHidden(window.scrollY)
  }

  return (
    <Fragment>
      <nav className={cn(style.nav_bar)}>
        <div className={cn({ container }, style.nav_container)}>
          <div className="row center-items split-lg">
            <div className="col-sm-4 col-md-2 col-lg-2">
              <div className={style.logo_wrap}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="74"
                  height="74"
                  viewBox="0 0 74 74"
                  className={style.logo}
                >
                  <path
                    className={style.path}
                    data-name="Path 312"
                    d="M-3759.533,896.179a3.75,3.75,0,0,1-3.749,3.751,3.751,3.751,0,0,1-3.751-3.751,3.749,3.749,0,0,1,3.751-3.749A3.749,3.749,0,0,1-3759.533,896.179Zm48.971-13.845a37,37,0,0,1-37,37,37,37,0,0,1-37-37,37,37,0,0,1,37-37A37,37,0,0,1-3710.562,882.334Zm-66.235,13.007,18.432-18.431h4.619v14.774a3.246,3.246,0,0,0,3.24,3.245,3.244,3.244,0,0,0,3.241-3.245v-25.87h27.113a31.979,31.979,0,0,0-27.41-15.479,32,32,0,0,0-32,32A31.855,31.855,0,0,0-3776.8,895.341Zm61.235-13.007a31.9,31.9,0,0,0-2.146-11.519h-24.558v3.594h20.83l-5,5h-15.83V883h12.24l-5,5h-7.239v3.685a8.252,8.252,0,0,1-8.24,8.244,8.251,8.251,0,0,1-8.239-8.244v-7.326l-15.553,15.553a31.965,31.965,0,0,0,26.736,14.423A32,32,0,0,0-3715.562,882.334Z"
                    transform="translate(3784.562 -845.334)"
                    fill="#161717"
                  />
                </svg>
              </div>
            </div>
            <div className="col-sm-4 col-md-6 col-lg-6">
              <div className={style.nav_menu_container}>
                <ul className={cn(style.nav_menu, style.collapse)}>
                  <li className={style.menu_item}>
                    <Link href="/#about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li className={style.menu_item}>
                    <Link href="/#dev">
                      <a>Dev</a>
                    </Link>
                  </li>
                  <li className={style.menu_item}>
                    <Link href="/#design">
                      <a>Design</a>
                    </Link>
                  </li>
                  <li className={style.menu_item}>
                    <Link href="/#resume">
                      <a>Resume</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-md-3 col-lg-3">
              <div className={style.info}>
                <span className="block tiny medium">09295855661</span>
                <span className="block tiny medium">ajedral1994@gmail.com</span>
              </div>
            </div> */}
          </div>
        </div>
        {/* <button className={cn('btn', 'square', style.scroll_to_top)}>^</button> */}
        {state.returnTop}
      </nav>
    </Fragment>
  )
}

export default NavBar
