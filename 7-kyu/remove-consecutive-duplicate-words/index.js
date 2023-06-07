function removeConsecutiveDuplicates(string) {
  const a = string.split(' ')
  return a
    .reduce((res, el, i) => {
      if (a[i + 1] !== el) res.push(el)
      return res
    }, [])
    .join(' ')
}

console.log(
  removeConsecutiveDuplicates(
    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
  )
) // alpha beta gamma delta alpha beta gamma delta
