import Image from 'next/image'
import style from './banner.module.sass'
import cn from 'classnames'
import heroImg from '../../public/assets/images/banner-hero.png'

export default function Banner() {
  return (
    <div className={cn(style.banner)}>
      <div className={cn(style.content)}>
        <div className="container">
          <h2 className="uppercase regular t-6">Web Developer</h2>
          <h1 className="semibold uppercase t-3">John Doe</h1>
        </div>
      </div>
      <div className={cn(style.absolute_elements)}>
        <div className={cn(style.hero)}>
          <span className={style.wrap}>
            <Image
              priority
              src={heroImg}
              className={style.hero_img}
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </span>
        </div>
        <div className={cn(style.strips)}>
          <span className={cn(style.strip, style.strip_1)}></span>
          <span className={cn(style.strip, style.strip_2)}></span>
        </div>
      </div>
    </div>
  )
}
