// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.
// Output: Number of Black Fridays in the year as an integer.

// Examples:
// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

// 0 - Sunday, ..., 6 - Saturday

function getUnluckyDays(year) {
  let unluckyDays = 0;

  for (let month = 0; month <= 11; month++) {
    if (new Date(year, month, 13).getDay() === 5) unluckyDays++;
  }

  return unluckyDays;
}

console.log(getUnluckyDays(2023));
