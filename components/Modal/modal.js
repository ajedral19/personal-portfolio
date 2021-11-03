import style from './modal.module.sass'
import cn from 'classnames'
import { useEffect } from 'react'

export default function Modal({ children }) {
  return <div className={style.modal}>{children}</div>
}
