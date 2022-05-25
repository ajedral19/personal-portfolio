import Image from 'next/image'
import Link from 'next/link'
import style from './preview.module.sass'
import cn from 'classnames'
import { useState } from 'react'
import { Column, Row } from '../FlexBox/flexbox'

export default function Preview({ payload }) {
  const [state, setState] = useState({ data: payload })
  return (
    <div className={style.project_preview_container}>
      {/* {JSON.stringify(state.data)} */}

      <div className={style.project_info}>
        <h4 className={cn('t-5')}>{state.data.title}</h4>
        <h6 className={cn('t-6 capitalize')}>{state.data.category}</h6>

        <div>
          <Image
            src={state.data.image}
            alt={state.data.title}
            layout="intrinsic"
            objectFit="contain"
            width="100"
            height="100"
          />
          {state.data.images.map((item) => (
            <Image
              key={item.id}
              src={item.image}
              alt={state.data.title}
              layout="intrinsic"
              objectFit="contain"
              width="100"
              height="100"
            />
          ))}
        </div>
      </div>

      <div className={style.display_container}>
        <Image
          src={state.data.image}
          alt={state.data.title}
          layout="fill"
          objectFit="contain"
        />
        <div className={style.controls}>
          <button className={style.toggle_zoom}></button>
        </div>
      </div>
    </div>
  )
}
