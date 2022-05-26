import { Fragment } from 'react'
import cn from 'classnames'

export default function Description({
  children,
  title = '',
  subject = '',
  description = '',
  classes = [],
}) {
  return (
    <Fragment>
      <article className={cn('t-left', ...classes)}>
        <h2 className="title medium t-upper mb-1">{title}</h2>
        {subject === '' || <h4 className="t-upper">{subject}</h4>}
        <p>{description}</p>
      </article>
      {children}
    </Fragment>
  )
}
