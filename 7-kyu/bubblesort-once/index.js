function bubblesortOnce(a) {
  const result = [...a]
  // result.forEach((_) => {
  for (let i = 0; i < result.length - 1; i++) {
    if (result[i] > result[i + 1]) {
      // swap items
      const itemToBubble = result[i]
      result[i] = result[i + 1]
      result[i + 1] = itemToBubble
    }
  }

  return result
  // })
}

console.log(bubblesortOnce([9, 1, 8, 4, 3, 6, 5, 7, 2])) // [1, 8, 4, 3, 6, 5, 7, 2, 9]
