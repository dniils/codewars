function partlist(arr) {
  return arr.reduce((res, _, i) => {
    if (i < arr.length - 1)
      res.push([arr.slice(0, i + 1).join(' '), arr.slice(i + 1).join(' ')])
    return res
  }, [])
}

console.log(partlist(['az', 'toto', 'picaro', 'zone', 'kiwi']))
// [
//   [ 'az', 'toto picaro zone kiwi' ],
//   [ 'az toto', 'picaro zone kiwi' ],
//   [ 'az toto picaro', 'zone kiwi' ],
//   [ 'az toto picaro zone', 'kiwi' ]
// ]
