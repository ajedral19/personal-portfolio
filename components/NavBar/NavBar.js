import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import style from './NavBar.module.sass'
import { navigateTo, switchTheme } from '../../utils/utils'

const defaultState = {
  isOnPhone: false,
  displayMenu: false,
  scrolledDown: false,
}
const NavBar = ({ container = false }) => {
  const [state, setState] = useState({ ...defaultState })

  useEffect(() => {
    window.addEventListener('load', handleOnLoad)
    window.addEventListener('resize', handleResize)
    // window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('load', handleOnLoad)
      window.removeEventListener('resize', handleResize)
      // window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleResize = () => {
    if (window.innerWidth <= 760) {
      return setState({ ...state, isOnPhone: true, displayMenu: false })
    }
    return setState({ ...state, isOnPhone: false, displayMenu: true })
  }

  const handleOnLoad = () => {
    // handleScroll(140)
    handleResize()
  }

  const handleScroll = (target = 140) => {
    if (typeof target == undefined || !target) return
    if (
      typeof target === 'string'
        ? window.scrollY >= document.getElementById(target)?.offsetHeight
        : typeof target === 'number' && window.scrollY >= target
    ) {
      return setState({ ...state, scrolledDown: true })
    }
    return setState({ ...state, scrolledDown: false })
  }

  const toggleMenu = () => {
    setState({ ...state, displayMenu: !state.displayMenu })
  }

  return (
    <Fragment>
      <nav className={cn(style.nav_bar, { [style.pinch]: state.scrolledDown })}>
        <div className={cn({ container }, style.container)}>
          <div className={cn(style.nav_row)}>
            <div className={cn(style.logo_wrap)}>
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
            </div>
            {state.isOnPhone && (
              <button
                className={cn(style.nav_btn, style.nav_menu_toggle_btn)}
                onClick={() => toggleMenu()}
              >
                <span className={cn(style.toggle_icon)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="17"
                    viewBox="0 0 24 17"
                  >
                    <g
                      id="Component_2_2"
                      data-name="Component 2 – 2"
                      transform="translate(0 1.5)"
                    >
                      <line
                        id="Line_40"
                        className="line"
                        data-name="Line 40"
                        x1="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <line
                        id="Line_41"
                        className="line"
                        data-name="Line 41"
                        x1="24"
                        transform="translate(0 7)"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <line
                        id="Line_43"
                        className="line"
                        data-name="Line 43"
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
            )}
            <button
              className={cn(style.nav_btn, style.theme_toggle_btn)}
              onClick={() => switchTheme()}
            >
              <svg width="25" height="25" viewBox="0 0 25 25">
                <g
                  id="Group_123"
                  data-name="Group 123"
                  transform="translate(-51.5 -22.5)"
                >
                  <g
                    id="Ellipse_32"
                    className="ball"
                    data-name="Ellipse 32"
                    transform="translate(57 28)"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <circle cx="7" cy="7" r="7" stroke="none" />
                    <circle cx="7" cy="7" r="5.5" fill="none" />
                  </g>
                  <line
                    id="Line_53"
                    data-name="Line 53"
                    className="ray"
                    y1="4"
                    transform="translate(64 22.5)"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <line
                    id="Line_54"
                    data-name="Line 54"
                    className="ray"
                    y1="4"
                    transform="translate(64 43.5)"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <line
                    id="Line_55"
                    data-name="Line 55"
                    className="ray"
                    y1="4"
                    transform="translate(51.5 35) rotate(-90)"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <line
                    id="Line_56"
                    data-name="Line 56"
                    className="ray"
                    y1="4"
                    transform="translate(72.5 35) rotate(-90)"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <line
                    id="Line_57"
                    data-name="Line 57"
                    className="ray"
                    y1="4"
                    transform="translate(55.161 26.161) rotate(-45)"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <line
                    id="Line_58"
                    data-name="Line 58"
                    className="ray"
                    y1="4"
                    transform="translate(70.01 41.01) rotate(-45)"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <line
                    id="Line_59"
                    data-name="Line 59"
                    className="ray"
                    y1="4"
                    transform="translate(55.161 43.839) rotate(-135)"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <line
                    id="Line_60"
                    data-name="Line 60"
                    className="ray"
                    y1="4"
                    transform="translate(70.01 28.99) rotate(-135)"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </g>
              </svg>
            </button>
            {
              // ((state.isOnPhone && state.displayMenu) || state.displayMenu) &&
              ((state.isOnPhone && state.displayMenu) || state.displayMenu) && (
                <div
                  className={cn(style.nav_menu_wrap, {
                    [style.toggle]: state.isOnPhone && state.displayMenu,
                  })}
                >
                  <ul className={cn(style.nav_menu)}>
                    <li className={cn(style.menu_item)}>
                      <a onClick={() => navigateTo('about')}>About</a>
                    </li>
                    <li className={cn(style.menu_item)}>
                      <a onClick={() => navigateTo('dev')}>Dev</a>
                    </li>
                    <li className={cn(style.menu_item)}>
                      <a onClick={() => navigateTo('design')}>Design</a>
                    </li>
                    <li className={cn(style.menu_item)}>
                      <a onClick={() => navigateTo('resume')}>Resume</a>
                    </li>
                    {state.isOnPhone && (
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
              )
            }
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default NavBar
