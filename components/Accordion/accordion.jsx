import { Fragment, useEffect, useState } from 'react'
import style from './Accordion.module.sass'
import cn from 'classnames'
import { collapse } from '../../utils'

export default function Accordion({ children, label = '', classes = [] }) {
  const [accordion, setAccordion] = useState()

  useEffect(() => {
    setAccordion(document.querySelector('.' + style.content))
  }, [setAccordion])

  return (
    <Fragment>
      <div className={cn(style.accordion)}>
        <span
          role="button"
          className={cn(style.trigger, 't-cap')}
          onClick={() => collapse(accordion, style.collapse, classes)}
        >
          {label}
        </span>
        <div className={cn(style.content, style.collapse)}>{children}</div>
      </div>
    </Fragment>
  )
}
