function span(arr, predicate) {
  const index = arr.findIndex((el) => predicate(el) === false)
  return index === -1
    ? [arr, []]
    : [arr.slice(0, index), arr.slice(index, arr.length)]
}

console.log(span([2, 4, 6, 1, 4, 8], (x) => Math.abs(x) % 2 === 0)) // [[2, 4, 6], [1, 4, 8]]
