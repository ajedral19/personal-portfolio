import { Fragment, useEffect, useState } from 'react'
import cn from 'classnames'
import style from './Modal.module.sass'

const Modal = ({ onClick }) => {
  //   const [state, setState] = useState({ winx: null, winy: null })

  useEffect(() => {
    // window.addEventListener('scroll', () => handleScroll())
    return () => {
      //   window.removeEventListener('scroll', () => handleScroll())
    }
  }, [])

  //   const handleScroll = () => {
  //     if (state.winx !== null && state.winy !== null) {
  //       window.scrollTo(state.winx, state.winy)
  //     }
  //   }

  //   const enableScroll = () => setState({ winx: null, winy: null })

  //   const disableScroll = () =>
  //     setState({ winx: window.scrollX, winy: window.scrollY })

  return (
    <Fragment>
      <div className={cn(style.modal)}>
        <div className={cn(style.modal_container)}>
          <div className={cn(style.modal_content)}>
            <div className={cn('row', style.modal_row)}>
              <div className={cn('col-sm-4', 'col-md-6', 'col-lg-12')}>
                <h4 className={cn(style.prompt_title)}>{'Opps! Sorry :)'}</h4>
                <p className={cn(style.prompt_msg, 'mt-1')}>
                  i'm still working on it. if you want you can continue
                </p>
              </div>
              <div className={cn('col-sm-4', 'col-md-6', 'col-lg-12')}>
                <button
                  onClick={() => onClick()}
                  className={cn('btn', 'mt-4', style.prompt_btn)}
                >
                  Okay, Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Modal
