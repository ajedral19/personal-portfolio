import Image from 'next/image'
import style from './modal.module.sass'
import { useEffect } from 'react'

export default function Modal({ children, onClose = null, type }) {
  useEffect(() => {
    function keyPress() {
      window.addEventListener('keydown', (e) => {
        const key = e.key.toLocaleLowerCase()
        if (key === 'escape') {
          onClose()
        }
      })
    }
    keyPress()
  }, [])

  return (
    <div className={style.modal}>
      <div className={style.modal_container}>
        <button onClick={onClose} className={style.btn_close}>
          close
        </button>
        {children}
      </div>
    </div>
  )
}
