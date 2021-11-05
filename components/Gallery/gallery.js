import Image from 'next/image'
import cn from 'classnames'
import style from './gallery.module.sass'
import Thumbnail from '../Thumbnail/thumbnail'

export default function Gallery({ data }) {
  return (
    <div className={cn(style.gallery)}>
      {data.map((item, key) => (
        <Thumbnail
          key={key}
          data={item}
          className={style.item_container}
          showCategory
        />
        // <div className={cn(style.item_container)}>
        //   <div key={key} className={cn(style.item)}>
        //     <div className={style.meta_content}>
        //       <h5 className={cn('medium t-6', style.title)}>{item.title}</h5>
        //       <span className={cn('uppercase regular')}>{item.category}</span>
        //     </div>
        //     <div className={style.background}>
        //       <Image
        //         src={item.image}
        //         layout="fill"
        //         objectFit="cover"
        //         alt={item.title}
        //       />
        //     </div>
        //   </div>
        // </div>
      ))}
    </div>
  )
}
