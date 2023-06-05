function solution(start, finish) {
  let currentPosition = start;
  let jumps = 0;

  do {
    if (currentPosition + 3 <= finish) {
      currentPosition += 3;
      jumps++;
    }
  } while (finish - currentPosition >= 3);

  return jumps + (finish - currentPosition);
}

console.log(solution(1, 5)); // 2
