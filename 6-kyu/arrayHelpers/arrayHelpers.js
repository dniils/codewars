Array.prototype.square = function () {
  return this.map((el) => el * el);
};

Array.prototype.cube = function () {
  return this.map((el) => el * el * el);
};

Array.prototype.average = function () {
  return this.reduce((acc, curr) => acc + curr, 0) / this.length;
};

Array.prototype.sum = function () {
  return this.reduce((acc, curr) => acc + curr, 0);
};

Array.prototype.even = function () {
  return this.filter((el) => el % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((el) => el % 2);
};

console.log([1, 2, 3, 4, 5].odd()); // [1, 3, 5]

// class extArray extends Array {
//   square() {
//     return this.map((el) => el * el);
//   }

//   cube() {
//     return this.map((el) => el * el * el);
//   }

//   average() {
//     return this.reduce((acc, curr) => acc + curr, 0) / this.length;
//   }

//   sum() {
//     return this.reduce((acc, curr) => acc + curr, 0);
//   }

//   even() {
//     return this.filter((el) => el % 2 === 0);
//   }

//   odd() {
//     return this.filter((el) => el % 2);
//   }
// }

// const numbers = new extArray(1, 2, 3, 4, 5);
// console.log(numbers.odd()); // [1, 3, 5]
