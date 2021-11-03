import cn from 'classnames'
import React, { useEffect, useState } from 'react'
import { _Carousel } from '../../utils/utulity'
import Thumbnail from '../Thumbnail/thumbnail'
import style from './carousel.module.sass'

export default function Carousel({ data, className }) {
  const [state, setState] = useState({ jumpCount: 0 })

  const slide = (prev, next) => {
    let jump = state.jumpCount

    if (next)
      jump = jump >= state.cars.length - 2 ? state.cars.length - 2 : jump + 1
    if (prev) jump = jump <= 0 ? 0 : jump - 1

    state.cars.map((car, i, arr) => {
      return (car.style.transform = `translateX(-${100 * jump}%)`)
    })
    setState({ ...state, jumpCount: jump })
  }

  const setCarousel = (carousel) => {
    const cars = Array.from(carousel.children)
    setState({ ...state, carousel, cars })
    // const height = cars[0].offsetHeight
    // carousel.style.height = `${height}px`
  }

  useEffect(() => {
    setCarousel(document.querySelector(`.${style.carousel}`))
  }, [])

  return (
    <div className={style.carousel_container}>
      <div className={cn(style.carousel_controls)}>
        <button
          className={cn(style.carousel_btn, style.btn_prev)}
          onClick={() => slide(true, false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 9">
            <polyline
              fill="none"
              stroke="currentcolor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={style.arror_head}
              points="4.5 0.5 0.5 4.5 4.5 8.5"
            />
          </svg>
        </button>
        <button
          className={cn(style.carousel_btn, style.btn_next)}
          onClick={() => slide(false, true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 9">
            <polyline
              fill="none"
              stroke="currentcolor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={style.arror_head}
              points="0.5 0.5 4.5 4.5 0.5 8.5"
            />
          </svg>
        </button>
      </div>
      <div className={cn(style.carousel, className)}>
        {data.map((item) => {
          return (
            <Thumbnail className={cn(style.item)} key={item.id} data={item} />
          )
        })}
      </div>
    </div>
  )
}
