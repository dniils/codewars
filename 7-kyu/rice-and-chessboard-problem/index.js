function squaresNeeded(grains) {
  if (grains === 0) return 0
  let count = 1
  let grainsAmount = 1

  do {
    count++
    grainsAmount *= 2
  } while (grainsAmount <= grains)

  return count - 1
}
