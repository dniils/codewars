function factory(x) {
  return (arr) => arr.map((el) => el * x)
}

console.log(factory(5)([1, 2, 3])) // returns [5, 10, 15];
