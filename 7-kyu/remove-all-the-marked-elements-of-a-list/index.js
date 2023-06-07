Array.prototype.remove_ = function (values_list) {
  return this.filter((el) => !values_list.includes(el))
}
console.log([1, 1, 2, 3, 1, 2, 3, 4].remove_([1, 3])) // [2, 2, 4]
