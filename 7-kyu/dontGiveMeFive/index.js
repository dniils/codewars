function dontGiveMeFive(start, end) {
  let sequence = [];

  for (let i = start; i <= end; i++) {
    if (!i.toString().includes("5")) sequence.push(i);
  }

  return sequence.length;
}

console.log(dontGiveMeFive(1, 9)); // 8
console.log(dontGiveMeFive(4, 17)); // 12
