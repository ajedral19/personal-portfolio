import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import style from './thumbnail.module.sass'

export default function Thumbnail({
  data,
  className,
  showCategory = false,
  height,
  layout,
  onClick = null,
}) {
  const customHeight = { paddingTop: `${height}%` }
  return (
    <div className={cn(style.thumbnail, className)} onClick={onClick}>
      <div className={style.thumbnail_content}>
        <div className={style.meta_content}>
          <div className={style.link_icons}>
            <Link href="/">
              <a className={style.link}></a>
            </Link>
          </div>
          <h4 className={cn(style.title, 't-6', 'capitalize', 'medium')}>
            {data.title}
          </h4>
          {showCategory && data.category && (
            <span className={cn('block capitalize', style.category)}>
              {data.category}
            </span>
          )}
        </div>
        <div className={cn(style.background)}>
          <Image
            priority
            src={data.image}
            layout="responsive"
            objectFit="cover"
            width="100"
            height="100"
            alt={data.title}
          />
        </div>
      </div>
    </div>
  )
}
