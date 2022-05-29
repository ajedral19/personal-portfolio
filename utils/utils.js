export const collapse_ = (e, classes = []) => {
  const elements = [...e.target.parentElement.children]
  const res = elements.find((i) => i.classList.contains('content'))
  if (classes) classes.forEach((c) => res.classList.toggle(c))
  const collapseIcon = elements[0].children[0]

  res.style.height = res.scrollHeight + 'px'
  res.classList.toggle('collapse')
  collapseIcon.classList.toggle('collapse')

  if (!res.classList.contains('collapse')) {
    res.addEventListener('transitionend', () =>
      res.style.removeProperty('height'),
    )
  } else window.setTimeout(() => res.style.removeProperty('height'))
}

// icon must be element 0
// content element must be grouped in a container with className content
// collapse style accordion defualt to true
export const collapse = (e, className = null, accordion = true) => {
  const el = e.target.ownerDocument.activeElement
  const collapseIcon = el.children[0] || null
  const parent = el.parentElement.children
  const contentElement =
    [...parent].find((child) => child.classList.contains('content')) || null

  if (contentElement) {
    if (accordion)
      contentElement.style.height = contentElement.scrollHeight + 'px'
    el.classList.toggle(className || 'collapse')
    contentElement.classList.toggle(className || 'collapse')
    collapseIcon && collapseIcon.classList.toggle(className || 'collapse')

    if (accordion) {
      if (!contentElement.classList.contains(className || 'collapse'))
        contentElement.addEventListener('transitionend', () =>
          contentElement.style.removeProperty('height'),
        )
      else
        window.setTimeout(() => contentElement.style.removeProperty('height'))
    }
  }
}
// export const collapse = (
//   accordion = undefined,
//   classCollapse = '',
//   classes = [],
// ) => {
//   if (accordion) {
//     if (classes) classes.forEach((c) => accordion.classList.toggle(c))

//     accordion.style.height = accordion.scrollHeight + 'px'
//     accordion.classList.toggle(classCollapse)

//     if (!accordion.classList.contains(classCollapse)) {
//       accordion.addEventListener('transitionend', () =>
//         accordion.style.removeProperty('height'),
//       )
//     } else window.setTimeout(() => accordion.style.removeProperty('height'))
//   }
// }

export const slide = (prev = false, next = false, container = undefined) => {
  if (container) {
    const scrollWidth = container.clientWidth
    if (next) container.scrollBy(scrollWidth, 0)
    if (prev) container.scrollBy(-scrollWidth, 0)
  }
}

export const toggleElement = (e, el, className) => {
  const element = document.querySelector('.' + el)
  element.classList.toggle(className)
  e.target.classList.toggle(className)
}

export const onLoadEffect = (effect_type, duration, interval) => {}

export const swipe = () => {}

export const parallax = () => {}
