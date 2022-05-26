import { Fragment } from 'react'
import cn from 'classnames'

export default function ImageThumbnail({
  color,
  title = 'test title',
  subject = 'just a subject',
  description = '',
  category = '',
  image,
  url = '',
  square = false,
}) {
  return (
    <Fragment>
      <div className={cn('image-thumbnail', color, { square })}>
        <div className="meta-data t-left">
          {/* <h4 className="title size-normal medium t-cap">{title}</h4>
          <span className="block subject t-upper">{subject}</span> */}
        </div>
        <div className="background"></div>
      </div>
    </Fragment>
  )
}
