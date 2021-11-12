import Image from 'next/image'
import style from './modal.module.sass'
import { useEffect } from 'react'

export default function Modal({ children, onClose = null, type }) {
  useEffect(() => {
    function keyPress() {
      window.addEventListener('keydown', (e) => {
        const key = e.key.toLocaleLowerCase()
        if (key === 'escape') onClose()
      })
    }
    keyPress()
  }, [])

  return (
    <div className={style.modal}>
      {type === 'bot' ? (
        <div className={style.bot_container}>
          <Image
            src="/assets/dancing_bot.gif"
            width="40"
            height="40"
            alt="robot"
          />
          {children}
        </div>
      ) : (
        <div className={style.modal_container}>
          <button onClick={onClose}>close</button>
          {children}
        </div>
      )}
    </div>
  )
}
