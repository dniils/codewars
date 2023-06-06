function getSum(a, b) {
  const start = Math.min(a, b);
  const end = Math.max(a, b);

  const sequence = [];

  for (let i = start; i <= end; i++) {
    sequence.push(i);
  }

  return sequence.reduce((sum, n) => sum + n, 0);
}

console.log(getSum(2, -4)); // -7
