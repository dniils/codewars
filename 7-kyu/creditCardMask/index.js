// return masked string
function maskify(cc) {
  return cc
    .split("")
    .map((el, i) => (i < cc.length - 4 ? "#" : el))
    .join("");
}

console.log(maskify("1234567")); // ###4567
