import { correctGuess, Types } from './'

describe('correctGuess', () => {
  test('returns action with type `CORRECT_GUESS`', () => {
    const action = correctGuess()
    expect(action).toEqual({ type: Types.CORRECT_GUESS })
  })
})
