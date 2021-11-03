import Image from 'next/image'
import Link from 'next/link'
import style from './preview.module.sass'
import cn from 'classnames'
import { useState } from 'react'
import { Column, Row } from '../FlexBox/flexbox'

export default function Preview({ payload, data }) {
  console.log(payload)
  const [state, setState] = useState(null)
  return <div className={style.project_preview_container}></div>
}
