import { Types } from '../actions'
import successReducer from './successReducer'

describe('successReducer', () => {
  const initialState = false
  
  test('returns default initial state of `false` when no action is passed', () => {
    const newState = successReducer(initialState, {})
    expect(newState).toBe(false)
  })

  test('returns state of true upon receiving an action type of `CORRECT_GUESS`', () => {
    const newState = successReducer(initialState, { type: Types.CORRECT_GUESS })
    expect(newState).toBe(true)
  })
})
