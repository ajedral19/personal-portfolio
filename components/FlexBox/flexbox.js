import style from './flexbox.module.sass'
import cn from 'classnames'

export function Row({
  children,
  alignStart = false,
  clearH = false,
  clearV = false,
  clear = false,
}) {
  return (
    <div
      className={cn(
        style['flex-row'],
        { [style['align-start']]: alignStart },
        { [style['clear-h']]: clearH },
        { [style['clear-v']]: clearV },
        { [style['clear-both']]: clear },
      )}
    >
      {children}
    </div>
  )
}

export function Column({
  children,
  auto = false,
  sm = null,
  md = null,
  lg = null,
  className,
  selfStart,
  selfEnd,
  selfCenter,
}) {
  return (
    <div
      className={cn(
        { [style['flex-col']]: auto },
        { [style[`flex-col-sm-${sm}`]]: sm },
        { [style[`flex-col-md-${md}`]]: md },
        { [style[`flex-col-lg-${lg}`]]: lg },
        { [style[`self-start`]]: selfStart },
        { [style[`self-end`]]: selfEnd },
        { [style[`self-center`]]: selfCenter },
        className,
      )}
    >
      {children}
    </div>
  )
}
