// The goal of this exercise is to convert a string to a new string where each character in the new string
// is "(" if that character appears only once in the original string,
// or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  const w = word.toLowerCase().split("");

  function appearsOnlyOnce(arr, char) {
    return arr.filter((el) => el === char).length === 1;
  }

  return w
    .map(function (el) {
      if (appearsOnlyOnce(w, el)) {
        return "(";
      } else return ")";
    })
    .join("");
}

console.log(duplicateEncode("word"));
console.log(duplicateEncode("boo"));
console.log(duplicateEncode("bookkeEpEr"));
