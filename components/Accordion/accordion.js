import style from './accordion.module.sass'
import cn from 'classnames'
import { useEffect, useState } from 'react'

export default function Accordion({ data }) {
  const [state, setState] = useState({})

  const collapseBar = (data) => {
    const bars = data.map((item, key) => {
      return (
        <div className={cn(style.child, style.collapsible)} key={key}>
          <span
            className={style.title_bar}
            onClick={(e) => setActiveBar(e, key)}
          >
            {item['year-started']} - {item.title}
          </span>
          <div className={style.accordion_content}>
            <div className="pl-2 pb-1 pt-1">
              <h4 className={cn('t-6', 'medium', 'mb-1')}>{item.company}</h4>
              <p>{item.content}</p>
            </div>
          </div>
          <span className={cn(style.title_bar, style.end_bar)}>
            {item['year-ended']}
          </span>
        </div>
      )
    })

    return setState({ ...state, bars })
    // return acBars
  }

  function setActiveBar(e, key) {
    let i = Array.from(e.target.parentElement.children).find((item) =>
      item.classList.contains(style.accordion_content),
    )

    e.target.parentElement.classList.toggle(cn(style.active))

    if (!e.target.parentElement.classList.contains(cn(style.active)))
      i.style.removeProperty('height')
    else i.style.height = i.scrollHeight + 'px'
  }

  useEffect(() => {
    collapseBar(data)
  }, [collapseBar])

  return <div className={cn(style.accordion)}>{state.bars || 'loading...'}</div>
}
