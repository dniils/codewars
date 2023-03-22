// Write a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

// For example:
// nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

function nthFibo(n) {
  function getFibonacciSequence(length) {
    const sequence = [0, 1];
    return function () {
      for (let i = 0; i < length; i++) {
        sequence.push(sequence[i] + sequence[i + 1]);
      }
      return sequence;
    };
  }
  return getFibonacciSequence(n)()[n - 1];
}

console.log(nthFibo(6), nthFibo(7), nthFibo(8));
