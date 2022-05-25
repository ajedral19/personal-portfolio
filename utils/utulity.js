const Slide = (
  transform,
  arr = [{}],
  prev = false,
  next = false,
  index = 0,
  step = 1,
) => {
  let stepCount = 0
  return transform(
    arr,
    index,
    prev ? stepCount - step : next ? stepCount > stepCount + step : stepCount,
  )
}

export { Slide }
