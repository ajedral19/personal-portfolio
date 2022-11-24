import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import style from './carousel.module.sass'
import cn from 'classnames'
import Card from '../Card/Card'
import { isAssetError } from 'next/dist/client/route-loader'
// import { slide } from '../../utils/utils'

const Carousel = ({ items = [] }) => {

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  // function getThreeValues(n) {
  //   if (!(n in arr)) return
  //   let _arr = [];
  //   if (n == 0)
  //     _arr = [arr.length - 1, n, n + 1]
  //   else if (n >= arr.length - 1)
  //     _arr = [n - 1, n, 0]
  //   else
  //     _arr = [n - 1, n, n + 1]
  //   console.log(_arr)
  // }
  const [count, setCount] = useState(0)
  const [els, setEls] = useState([])
  useEffect(() => {
    let count = 0
    window.setInterval(() => {
      getThreeValues(count)
      count += 1
      if (count > arr.length - 1)
        count = 0
    }, 2000)
  }, [])

  function getThreeValues(n) {
    if (!(n in arr)) return
    let _arr = [];
    if (n == 0)
      _arr = [arr.length - 1, n, n + 1]
    else if (n >= arr.length - 1)
      _arr = [n - 1, n, 0]
    else
      _arr = [n - 1, n, n + 1]

    const els = _arr.map(i =>
      <div key={i} className={cn(style.carousel__platform__item, `${i}`)} data-r="b" datafocus={i == n ? "1" : i == _arr - 1 ? "0" : "2"}>
        <Card type="image" />
      </div >
    );

    setEls(els)
  }

  return (
    <Fragment>
      <div className={cn(style.carousel)}>
        <div className={cn(style.carousel__control)}></div>
        <div className={cn(style.carousel__platform)}>
          {els}
          {/* <div className={cn(style.carousel__platform__item)}>
            <Card type="image" />
          </div>
          <div className={cn(style.carousel__platform__item)}>
            <Card type="image" />
          </div>
          <div className={cn(style.carousel__platform__item)}>
            <Card type="image" />
          </div>
          <div className={cn(style.carousel__platform__item)}>
            <Card type="image" />
          </div>
          <div className={cn(style.carousel__platform__item)}>
            <Card type="image" />
          </div>
          <div className={cn(style.carousel__platform__item)}>
            <Card type="image" />
          </div> */}
        </div>
      </div>
    </Fragment>
  )
}

export default Carousel
