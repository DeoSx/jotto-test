export const Types = {
  CORRECT_GUESS: 'CORRECT_GUESS',
}

export const correctGuess = () => {
  return {
    type: Types.CORRECT_GUESS,
  }
}
