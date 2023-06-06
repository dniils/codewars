function factorial(n) {
  if (n === 0) return 1;
  if (n < 0 || n > 12) throw RangeError();
  const sequence = Array.from({ length: n }, (_, i) => i + 1);
  return sequence.reduce((result, el) => result * el, 1);
}

console.log(factorial(5)); // 120
