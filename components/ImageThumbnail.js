import { Fragment } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import test_img from '../assets/images/content/placeholder_image.png'

const ImageThumbnail = ({
  color,
  data,
  square = false,
}) => {
  const { title, description } = data || {}
  return (
    <Fragment>
      <div className={cn('image-thumbnail', color, { square })}>
        <div className="meta-data t-left">
          {title && (
            <span className='block meta-data-content'>
              <h4 className="title size-normal medium t-cap">{title}</h4>
              {/* <span className="block subject t-upper">{subject}</span> */}
            </span>
          )}
        </div>
        <div className="background">
          <Image
            layout='fill'
            objectFit='contain'
            src={test_img}
            alt="this is a test"
          />
        </div>
      </div>
    </Fragment>
  )
}


export default ImageThumbnail