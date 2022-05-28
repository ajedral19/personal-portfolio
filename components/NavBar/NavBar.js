import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import style from './NavBar.module.sass'
import { collapse } from '../../utils/utils'

const NavBar = ({ container = false }) => {
  const [hidden, setHidden] = useState('logog')

  useEffect(() => {
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  const resize = () => {
    setHidden(window.innerWidth)
  }

  return (
    <Fragment>
      <nav className={style.nav}>
        <div className={cn(style.nav_container, { container })}>
          <div
            className={cn('row', 'clear-vertical', 'center-items', style.row)}
          >
            <div className={cn('t-left', 'col-sm-1', 'col-md-1', 'col-lg-1')}>
              <div className={style.logo}>
                <Link href="/#">
                  <a className="block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60.995"
                      height="60.995"
                      viewBox="0 0 60.995 60.995"
                    >
                      <path
                        id="Path_312"
                        data-name="Path 312"
                        d="M-3763.932,887.243a3.091,3.091,0,0,1-3.09,3.091,3.091,3.091,0,0,1-3.091-3.091,3.09,3.09,0,0,1,3.091-3.09A3.09,3.09,0,0,1-3763.932,887.243Zm40.365-11.412a30.5,30.5,0,0,1-30.5,30.5,30.5,30.5,0,0,1-30.5-30.5,30.5,30.5,0,0,1,30.5-30.5A30.5,30.5,0,0,1-3723.567,875.831Zm-54.6,10.721,15.193-15.192h3.807v12.178a2.676,2.676,0,0,0,2.671,2.674,2.673,2.673,0,0,0,2.671-2.674V862.215h22.349a26.359,26.359,0,0,0-22.593-12.759,26.374,26.374,0,0,0-26.375,26.375A26.258,26.258,0,0,0-3778.162,886.552Zm50.474-10.721a26.3,26.3,0,0,0-1.769-9.495H-3749.7V869.3h17.169l-4.121,4.122H-3749.7v2.958h10.089l-4.122,4.122h-5.967v3.038a6.8,6.8,0,0,1-6.792,6.8,6.8,6.8,0,0,1-6.791-6.8V877.5l-12.82,12.82a26.347,26.347,0,0,0,22.038,11.888A26.377,26.377,0,0,0-3727.688,875.831Z"
                        transform="translate(3784.562 -845.334)"
                        fill="#161717"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <h1>{hidden}</h1>

            <div className="col-md-5 col-lg-5">
              <button
                className={cn('btn', 'clear', style.menu_toggler)}
                onClick={(e) => collapse(e, style.collapse, false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="9"
                  viewBox="0 0 24 9"
                >
                  <g
                    id="Group_114"
                    data-name="Group 114"
                    transform="translate(-245.5 -52.5)"
                  >
                    <line
                      id="Line_34"
                      data-name="Line 34"
                      x2="24"
                      transform="translate(245.5 54.5)"
                      fill="none"
                      stroke="#1b1b1b"
                      strokeWidth="4"
                    />
                    <line
                      id="Line_35"
                      data-name="Line 35"
                      x2="24"
                      transform="translate(245.5 60.5)"
                      fill="none"
                      stroke="#1b1b1b"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </button>
              <ul className={cn(style.nav_menu, 'content')}>
                <li>
                  <Link href="/#about">
                    <a className={cn('t-upper', style.menu_anchor)}>about</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#dev">
                    <a className={cn('t-upper', style.menu_anchor)}>dev</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#design">
                    <a className={cn('t-upper', style.menu_anchor)}>design</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#resume">
                    <a className={cn('t-upper', style.menu_anchor)}>resume</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default NavBar
