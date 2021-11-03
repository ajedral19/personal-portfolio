import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import style from './thumbnail.module.sass'

export default function Thumbnail({ data, className, height, layout }) {
  const customHeight = { paddingTop: `${height}%` }
  return (
    <div className={cn(style.thumbnail, className)}>
      <div className={style.thumbnail_content}>
        <div className={style.meta_content}>
          <div className={style.link_icons}>
            <Link href="/">
              <a className={style.link}></a>
            </Link>
          </div>
          <h4
            className={cn(style.title, 't-6', 'mb-1', 'capitalize', 'medium')}
          >
            {data.title}
          </h4>
        </div>
        <div className={cn(style.background)}>
          <Image
            priority
            src={data.image}
            layout="fill"
            objectFit="cover"
            alt={data.title}
          />
        </div>
      </div>
    </div>
  )
}
