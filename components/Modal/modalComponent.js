import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

function ModalComponent({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const handleOncloseCLick = (e) => {
    e.preveentDefault()
    onClose()
  }

  const modalContent = show ? (
    <>
      <h1>child components goes here</h1>
      {children}
    </>
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root'),
    )
  } else return null
}

export default ModalComponent
