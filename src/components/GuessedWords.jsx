import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = (props) => {
  let content

  if (props.guessedWords.length === 0) {
    content = (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    )
  } else {
    const guessedWordsRow = props.guessedWords.map((word) => (
      <tr data-test="guessed-word" key={word.guessedWord}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ))
    content = (
      <table data-test="guessed-words">
        <thead>
          <tr>
            <th>Guess</th>
            <th>Matching letters</th>
          </tr>
        </thead>
        <tbody>{guessedWordsRow}</tbody>
      </table>
    )
  }

  return <div data-test="component-guessed-words">{content}</div>
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default GuessedWords
