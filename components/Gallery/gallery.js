import cn from 'classnames'
import style from './gallery.module.sass'

export default function Gallery({ data }) {
  return (
    <div className={cn(style.gallery)}>
      {data.map((item, key) => (
        <div key={key}>
          <div className={style.meta_content}>
            <h5 className={cn('medium t-6', style.title)}>{item.title}</h5>
            <span className={cn('uppercase regular')}>{item.category}</span>
          </div>
          <div className={style.background}></div>
        </div>
      ))}
    </div>
  )
}
