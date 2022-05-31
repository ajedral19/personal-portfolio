import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import style from './NavBar.module.sass'

const defaultState = {
  scrollUpBtn: null,
  activeToggler: false,
  toggle: false,
  expandContainer: false,
}

const NavBar = ({ container = false }) => {
  const [state, setState] = useState(defaultState)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  const handleScroll = () => {
    // scroll_y()
  }
  const handleResize = () => {
    // scroll_y()
    breakpoint()
  }
  const handleLoad = () => {
    // scroll_y()
    breakpoint()
  }

  const breakpoint = () => {
    if (window.innerWidth < 760) {
      setState({ ...state, activeToggler: true })
    } else {
      setState({ ...defaultState, toggle: true })
    }
  }

  const scroll_y = () => {
    if (window.scrollY > 100) setState({ ...state, expandContainer: true })
    else setState({ ...state, expandContainer: false })
  }

  const scrollTo = (id) => {
    if (typeof id !== 'string') return

    window.scrollTo({
      top: document.getElementById(id).offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  }

  const toggleMenu = () => {
    setState({ ...state, toggle: !state.toggle })
  }

  return (
    <Fragment>
      <nav className={cn(style.nav_bar)}>
        <div
          className={cn({ container: container }, style.nav_container, {
            [style.expand_container]: state.expandContainer,
          })}
        >
          <div className="row center-items split-md split-lg">
            <div className="col-sm-4 col-md-2 col-lg-2">
              <div
                className={style.logo_wrap}
                onClick={() => state.activeToggler && toggleMenu()}
              >
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
            <div className="col-sm-4 col-md-4 col-lg-6">
              <div className={style.nav_menu_container}>
                <ul
                  className={cn(style.nav_menu, {
                    [`${style.hide}`]: !state.toggle,
                  })}
                >
                  <li className={style.menu_item}>
                    <a onClick={() => scrollTo('about')}>About</a>
                  </li>
                  <li className={style.menu_item}>
                    <a onClick={() => scrollTo('dev')}>Dev</a>
                  </li>
                  <li className={style.menu_item}>
                    <a onClick={() => scrollTo('design')}>Design</a>
                  </li>
                  <li className={style.menu_item}>
                    <a onClick={() => scrollTo('resume')}>Resume</a>
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
      </nav>
    </Fragment>
  )
}

export default NavBar
