const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;

  let sum = 0;

  for (let i = begin; i <= end; i += step) {
    if (i <= end) sum += i;
  }

  return sum;
};

console.log(sequenceSum(2, 7, 2)); // 12 (2 + 4 + 6)
