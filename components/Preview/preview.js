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
      {JSON.stringify(state.data)}

      <h4>{state.data.title}</h4>
      <h6>{state.data.category}</h6>

      <Image
        src={state.data.image}
        alt={state.data.title}
        layout="intrinsic"
        width="100"
        height="100"
      />
    </div>
  )
}
