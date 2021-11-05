import Image from 'next/image'
import cn from 'classnames'
import style from './gallery.module.sass'
import Thumbnail from '../Thumbnail/thumbnail'

export default function Gallery({ data, listener = null }) {
  return (
    <div className={cn(style.gallery)}>
      {data.map((item, key) => (
        <Thumbnail
          key={key}
          data={item}
          className={style.item_container}
          showCategory
          onClick={() => listener(item.id)}
        />
      ))}
    </div>
  )
}
