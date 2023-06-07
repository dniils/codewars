function solution(digits) {
  const a = String(digits).split("");

  let maxSequence = 0;

  for (let i = 0; i <= a.length - 5; i++) {
    const sequence = Number(a.slice(i, i + 5).join(""));
    if (sequence > maxSequence) maxSequence = sequence;
  }

  return maxSequence;
}

console.log(solution(1234567898765)); // 98765
