var sing = function () {
  function getSongLine(n) {
    return `${n > 0 ? n : 'No more'} bottle${
      n < 2 && n > 0 ? '' : 's'
    } of beer on the wall, ${n > 0 ? n : 'no more'} bottle${
      n < 2 && n > 0 ? '' : 's'
    } of beer.\n${
      n
        ? `Take one down and pass it around, ${
            n - 1 > 0 ? n - 1 : 'no more'
          } bottle${n - 1 < 2 && n - 1 > 0 ? '' : 's'} of beer on the wall.`
        : `Go to the store and buy some more, ${BOTTLES_TOTAL} bottles of beer on the wall.`
    }`;
  }
  const BOTTLES_TOTAL = 99;
  const lyrics = [];

  for (let i = BOTTLES_TOTAL; i >= 0; i--) {
    lyrics.push(getSongLine(i).split('\n'));
  }

  return lyrics.flat();
};

console.log(sing().slice(0, 4));
console.log(sing().slice(-6));
