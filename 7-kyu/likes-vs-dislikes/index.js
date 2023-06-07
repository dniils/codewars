function likeOrDislike(buttons) {
  let state = 'Nothing'

  for (i in buttons) {
    const btn = buttons[i]

    if (btn === 'Like')
      state === 'Like' ? (state = 'Nothing') : (state = 'Like')
    else if (btn === 'Dislike')
      state === 'Dislike' ? (state = 'Nothing') : (state = 'Dislike')
  }

  return state
}

console.log(
  likeOrDislike([
    'Like',
    'Like',
    'Dislike',
    'Like',
    'Like',
    'Like',
    'Like',
    'Dislike',
  ]) // Dislike
)
