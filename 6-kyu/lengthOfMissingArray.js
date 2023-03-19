// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!
// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.
// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

function getLengthOfMissingArray(arrayOfArrays) {
  if (!arrayOfArrays) return 0;
  if (arrayOfArrays.some((el) => el === null)) return 0;

  const arrayLengths = arrayOfArrays
    .map((arr) => arr.length)
    .sort((a, b) => a - b);

  if (
    arrayOfArrays.length === 0 ||
    arrayLengths.some((arrLength) => arrLength === 0)
  )
    return 0;

  for (let i = 0; i < arrayLengths.length; i++) {
    if (arrayLengths[i + 1] - arrayLengths[i] !== 1) return arrayLengths[i] + 1;
  }
}

console.log(
  getLengthOfMissingArray([[1], [1, 2, 3, 4, 5], [1, 2], [1, 2, 3]]),
  getLengthOfMissingArray([[1, 2, 3], [1], [1, 2], [], [1, 2, 3, 4, 5]]),
  getLengthOfMissingArray([]),
  getLengthOfMissingArray([null]),
  getLengthOfMissingArray([[null], [null, null, null]])
);
