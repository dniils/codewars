function divisors(integer) {
  const result = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) result.push(i);
  }
  return result.length ? result : `${integer} is prime`;
}

console.log(divisors(25)); // [5]
console.log(divisors(13)); // 13 is prime
