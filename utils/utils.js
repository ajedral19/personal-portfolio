export const collapse = (e, classes = []) => {
  const elements = [...e.target.parentElement.children]
  const res = elements.find((i) => i.classList.contains('content'))
  if (classes) classes.forEach((c) => res.classList.toggle(c))

  res.style.height = res.scrollHeight + 'px'
  res.classList.toggle('collapse')

  if (!res.classList.contains('collapse')) {
    res.addEventListener('transitionend', () =>
      res.style.removeProperty('height'),
    )
  } else window.setTimeout(() => res.style.removeProperty('height'))
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

export const onLoadEffect = (effect_type, duration, interval) => {}

export const swipe = () => {}

export const parallax = () => {}
