// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

function numberOfPairs(gloves) {
  let obj = {};

  for (const color in gloves) {
    obj[gloves[color]] = 0;
  }

  function countColors() {
    for (const color in gloves) {
      obj[gloves[color]] += 1;
    }
    return obj;
  }

  return Object.entries(countColors())
    .map((arr) => {
      return Math.floor((arr[1] = arr[1] / 2));
    })
    .reduce((a, b) => a + b, 0);
}

console.log(
  numberOfPairs(["red", "green", "red", "blue", "blue", "blue", "red", "blue"])
);
