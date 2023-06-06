function setReducer(input) {
  let isSequence = false;
  let sequenceLength = 1;
  const result = [];

  input.forEach((el, i) => {
    if (el === input[i + 1]) {
      isSequence = true;
      sequenceLength++;
    } else {
      if (isSequence) {
        isSequence = false;
        result.push(sequenceLength);
        sequenceLength = 1;
      } else {
        result.push(1);
      }
    }
  });

  return result.length === 1 ? result[0] : setReducer(result);
}

console.log(setReducer([8, 5, 4, 4, 4, 2, 2, 1, 3, 3, 9, 0, 5, 1, 1, 1, 1])); // 2
// [8, 5, 4, 4, 4, 2, 2, 1, 3, 3, 9, 0, 5, 1, 1, 1, 1]
// [1, 1, 3, 2, 1, 2, 1, 1, 1, 4]
// [2, 1, 1, 1, 1, 1, 3, 1]
// [1, 5, 1, 1]
// [1, 1, 2]
// [2, 2]
// [2] => 2
