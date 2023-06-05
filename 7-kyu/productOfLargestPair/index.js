// function maxProduct(a) {
//   const sorted = a.sort((a, b) => b - a);
//   return sorted[0] * sorted[1];
// } // 1873ms

// function maxProduct(a) {
//   const max = Math.max(...a);
//   return max * Math.max(...a.filter((el) => el !== max));
// } // 671ms

function maxProduct(a) {
  let max = 0;
  let secondMax = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
      secondMax = max;
      max = a[i];
    } else if (a[i] > secondMax) {
      secondMax = a[i];
    }
  }

  return max * secondMax;
} // 519ms

console.log(
  maxProduct([
    39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411,
  ])
); // 187827
