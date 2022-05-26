import { Fragment, useEffect, useState } from 'react'
import ImageThumbnail from '../ImageThumbnail'
import style from './Carousel.module.sass'
import cn from 'classnames'
import { slide } from '../../utils/utils'

const Carousel = ({ items = [] }) => {
  const [carousel, setCarousel] = useState()
  useEffect(() => {
    setCarousel(document.querySelector(`.${style.carousel}`))
  }, [setCarousel])

  return (
    <Fragment>
      <div className={style.carouselContainer}>
        <div className={style.carouselControl}>
          <button
            className={cn('btn', style.btn, style.prev)}
            // onClick={() => slide(true, false)}
            onClick={() => slide(true, false, carousel)}
          ></button>
          <button
            className={cn('btn', style.btn, style.next)}
            // onClick={() => slide(false, true)}
            onClick={() => slide(false, true, carousel)}
          ></button>
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
    </Fragment>
  )
}

export default Carousel
