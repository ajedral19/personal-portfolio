import { Fragment, useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [button, setButton] = useState({ append: false, hide: false })

  useEffect(() => {
    window.addEventListener('scroll', a)
    return () => {
      window.removeEventListener('scroll', a)
    }
  }, [])

  const a = () => {
    if (window.scrollY > 100) {
      setButton({ ...button, append: true })
    } else setButton({ ...button, append: false })
  }

  const handleOnClick = () =>
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

  return (
    <Fragment>
      {button.append && (
        <button onClick={handleOnClick} className="scroll-to-btn">
          back to top
        </button>
      )}
    </Fragment>
  )
}
