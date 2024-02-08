function uniqueInOrder(iterable) {
  const arr = Array.isArray(iterable) ? iterable : Array.from(iterable)
  return arr.filter((el, i) => el !== arr[i - 1])
}

console.log(uniqueInOrder('AAABBBCCDAABBB')) // [ 'A', 'B', 'C', 'D', 'A', 'B' ]
console.log(uniqueInOrder('AABbBCCabB')) // [ 'A', 'B', 'b', 'B', 'C', 'a', 'b', 'B' ]
