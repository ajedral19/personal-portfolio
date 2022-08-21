import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import style from './NavBar.module.sass'
import { navigateTo, switchTheme } from '../../utils/utils'

const NavBar = ({ container = false, unstick = false }) => {
  const router = useRouter()
  const [state, setState] = useState({
    theme_dark: false,
    pinch_nav: false,
    transform_menu: false,
    show_menu: false,
  })

  const setSrollPadding = () => {
    const navHeight = document.getElementById('nav_bar').clientHeight
    document.documentElement.style.setProperty('--scroll-padding', navHeight + 'px')
  }

  const handleScroll = () => {
    // const scrollHeight = window.scrollY
    // setState({ ...state, pinch_nav: scrollHeight > 100 ? true : false })
    setSrollPadding()
  }

  const handleOnLoad = () => {
    handleResize()
  }

  const handleResize = () => {
    const screenWidth = window.innerWidth
    setState(() => ({
      ...state,
      transform_menu: screenWidth < 760 ? true : false,
    }))
    handleScroll()
    setSrollPadding()

  }

  useEffect(() => {
    // document.body.style.overflow = !state.show_menu ? 'unset' : 'hidden'
  }, [state.show_menu])

  useEffect(() => {
    window.document.documentElement.classList.toggle('dark-mode')
    return () => { }
  }, [state.theme_dark])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false)
    window.addEventListener('load', handleOnLoad, false)
    window.addEventListener('resize', handleResize, false)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('load', handleOnLoad)
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <Fragment>
      <nav id="nav_bar"
        className={cn(style.nav_bar, {
          [style.pinch]: state.pinch_nav,
          [style.unstick]: unstick,
        })}
      >
        <div className={cn({ container }, style.container)}>
          <div className={cn(style.nav_row)}>
            <div className={cn(style.logo_wrap)}>
              <Link href="/">
                <a>
                  <span className={cn(style.logo)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                    >
                      <path
                        id="Path_324"
                        data-name="Path 324"
                        d="M-3769.68,875.566a2.23,2.23,0,0,1-2.23,2.23,2.23,2.23,0,0,1-2.23-2.23,2.23,2.23,0,0,1,2.23-2.229A2.229,2.229,0,0,1-3769.68,875.566Zm29.119-8.232a22,22,0,0,1-22,22,22,22,0,0,1-22-22,22,22,0,0,1,22-22A22,22,0,0,1-3740.561,867.334Zm-39.384,7.733,10.96-10.959h2.746v8.784a1.931,1.931,0,0,0,1.927,1.929,1.929,1.929,0,0,0,1.927-1.929V857.511h16.121a19.014,19.014,0,0,0-16.3-9.2,19.025,19.025,0,0,0-19.026,19.027A18.93,18.93,0,0,0-3779.945,875.068Zm36.41-7.733a18.993,18.993,0,0,0-1.275-6.849h-14.6v2.137h12.386L-3750,865.6h-9.413v2.134h7.278l-2.973,2.973h-4.3v2.191a4.906,4.906,0,0,1-4.9,4.9,4.906,4.906,0,0,1-4.9-4.9v-4.356l-9.248,9.248a19.006,19.006,0,0,0,15.9,8.576A19.028,19.028,0,0,0-3743.535,867.334Z"
                        transform="translate(3784.561 -845.334)"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </a>
              </Link>
            </div>

            <button
              className={cn(style.nav_btn, style.nav_menu_toggle_btn, { [style.show]: state.show_menu })}
              onClick={() =>
                setState({ ...state, show_menu: !state.show_menu })
              }
            >
              <span>
                <svg width="24" height="17" viewBox="0 0 24 17">
                  <g id="Component_2_2" transform="translate(0 1.5)">
                    <line
                      id="line_1"
                      className="line1"
                      x1="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <line
                      id="line_2"
                      className="line2"
                      x1="24"
                      transform="translate(0 7)"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <line
                      id="line_3"
                      className="line3"
                      x1="16"
                      transform="translate(0 14)"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </g>
                </svg>
              </span>
            </button>

            <button
              className={cn(style.nav_btn, style.theme_toggle_btn, {
                [style.toggled]: state.theme_dark,
              })}
              onClick={() =>
                switchTheme(state, setState)
                // setState(() => ({ ...state, theme_dark: !state.theme_dark }))
              }
            >
              <span>
                <svg viewBox="0 0 26 26">
                  <path
                    d="M13,7.43A5.58,5.58,0,1,1,9.07,9.07,5.6,5.6,0,0,1,13,7.43M14.24,0H11.76V3.71h2.48Zm7.49,2.54L19.5,4.77,21.23,6.5l2.23-2.23Zm-17.46,0L2.54,4.27,4.77,6.5,6.5,4.77Zm8.73,3A7.43,7.43,0,1,0,20.43,13,7.43,7.43,0,0,0,13,5.57Zm13,6.19H22.29v2.48H26Zm-22.29,0H0v2.48H3.71ZM21.23,19.5,19.5,21.23l2.23,2.23,1.73-1.73Zm-16.46,0L2.54,21.73l1.73,1.73L6.5,21.23Zm9.47,2.79H11.76V26h2.48Z"
                    style={{ fill: 'currentColor' }}
                  />
                </svg>
              </span>
            </button>

            <div
              className={cn(style.nav_menu_wrap, {
                [style.show]: state.show_menu,
              })}
            >
              <ul
                className={cn(style.nav_menu, {
                  [style.show]: state.show_menu,
                })}
              >
                <li className={cn(style.menu_item)}>
                  <a
                    onClick={() => navigateTo(router, "about")}
                  // onClick={() =>,
                  //   router.push('/#about', "/#about", { shallow: true })
                  // }
                  >
                    About
                  </a>
                </li>
                <li className={cn(style.menu_item)}>
                  <a
                    onClick={() => navigateTo(router, 'dev')}
                  >
                    Dev
                  </a>
                </li>
                <li className={cn(style.menu_item)}>
                  <a
                    onClick={() => navigateTo(router, 'design')}
                  >
                    Design
                  </a>
                </li>
                <li className={cn(style.menu_item)}>
                  <a
                    onClick={() => navigateTo(router, 'resume')}
                  >
                    Resume
                  </a>
                </li>

                {state.transform_menu && (
                  <li className={cn(style.menu_item, style.footer)}>
                    <Link href="/">
                      <a className={cn('medium', 'tiny')}>
                        GoGoGoPowerAJ &copy;
                      </a>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default NavBar
