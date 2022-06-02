import { Fragment, useEffect, useState } from 'react'
import ImageThumbnail from '../ImageThumbnail'
import style from './carousel.module.sass'
import cn from 'classnames'
import { slide } from '../../utils/utils'

const Carousel = ({ items = [] }) => {
  const [carousel, setCarousel] = useState()
  useEffect(() => {
    setCarousel(document.querySelector(`.${style.carousel}`))
  }, [setCarousel])

  return (
    <Fragment>
      {items.length ? (
        <div className={style.carouselContainer}>
          <div className={style.carouselControl}>
            <button
              className={cn('btn', style.btn, style.prev)}
              // onClick={() => slide(true, false)}
              onClick={() => slide(true, false, carousel)}
            >
              <svg
                id="Group_122"
                data-name="Group 122"
                width="28"
                height="28"
                viewBox="0 0 28 28"
              >
                <path
                  id="Path_325"
                  data-name="Path 325"
                  d="M126.834,313.88l-4.618,4.618,4.618,4.618"
                  transform="translate(-111.334 -304.38)"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                />
                <g
                  id="Ellipse_17"
                  data-name="Ellipse 17"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <circle cx="14" cy="14" r="14" stroke="none" />
                  <circle cx="14" cy="14" r="13.5" fill="none" />
                </g>
              </svg>
            </button>
            <button
              className={cn('btn', style.btn, style.next)}
              // onClick={() => slide(false, true)}
              onClick={() => slide(false, true, carousel)}
            >
              <svg width="28" height="28" viewBox="0 0 28 28">
                <g
                  id="Group_120"
                  data-name="Group 120"
                  transform="translate(-1444 -1236)"
                >
                  <path
                    id="Path_325"
                    data-name="Path 325"
                    d="M122.217,313.88l4.618,4.618-4.618,4.618"
                    transform="translate(1334.283 931.62)"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                  <g
                    id="Ellipse_17"
                    data-name="Ellipse 17"
                    transform="translate(1444 1236)"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <circle cx="14" cy="14" r="14" stroke="none" />
                    <circle cx="14" cy="14" r="13.5" fill="none" />
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <div className={style.carousel}>
            <div className="row no-wrap">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={cn(style.item, 'col-lg-3', 'col-md-2', 'col-sm-2')}
                >
                  <ImageThumbnail square />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h1>'no projects yet'</h1>
      )}
    </Fragment>
  )
}

export default Carousel
