function findEvenIndex(arr) {
  const solutions = []

  for (let i = 0; i < arr.length; i++) {
    const left = arr.slice(0, i)
    const right = arr.slice(i + 1)
    const leftSum = left.length && left.reduce((a, b) => a + b, 0)
    const rightSum = right.length && right.reduce((a, b) => a + b, 0)
    const sidesSumsAreEqual =
      leftSum === rightSum ||
      (left.length === 0 && rightSum === 0) ||
      (right.length === 0 && leftSum === 0)

    if (sidesSumsAreEqual) {
      solutions.push(i)
    }
  }

  if (solutions.length) {
    return Math.min(...solutions)
  } else {
    return -1
  }
}

console.log(findEvenIndex([1, -10, -1, -2, 10, -20])) // 3
