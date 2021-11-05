class _Carousel {
  constructor(carousel) {
    this.carousel = carousel
    console.log(carousel)
  }
}

function DisableScroll(disable = true) {
  let winx = -1
  let winy = -1

  if (disable) {
    winx = window.scrollX
    winy = window.scrollY
  } else {
    winx = null
    winy = null
  }

  window.addEventListener('scroll', () => {
    if (winx !== -1 || winy !== -1) {
      window.scrollTo(winx, winy)
    }
  })
}

export { _Carousel, DisableScroll }
