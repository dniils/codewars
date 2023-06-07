The span function is a good one to know. It accepts a sequence and a predicate function and returns two sequences. The first sequence contains all the elements of the argument sequence up to the item that caused the first failure of the predicate. The second returned sequence contains the rest of the original sequence. The original sequence is not modified.

For example,

```js
function isEven(x) {
  return Math.abs(x) % 2 === 0
}

var arr = [2, 4, 6, 1, 8, 10]

// This is true
span(arr, isEven) ===
  [
    [2, 4, 6],
    [1, 8, 10],
  ]
```

Your task is to... _wait for it_... write your own span function!
