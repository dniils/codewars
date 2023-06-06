// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
  const agesSorted = ages.sort((a, b) => b - a);
  return [agesSorted[1], agesSorted[0]];
}

console.log(twoOldestAges([1, 99, 43, 110, 55])); // [99, 110]
