/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - guessed word
 * @param {string} secretWord - secret word
 * @returns {number} - Number of letters matched between guessed word and secret
 */
export const getLetterMatchCount = (guessedWord, secretWord) => {
  const guessedLetterSet = new Set(guessedWord.split(''))
  const secretLetterSet = new Set(secretWord.split(''))

  return [...secretLetterSet].filter((letter) => guessedLetterSet.has(letter))
    .length
}
