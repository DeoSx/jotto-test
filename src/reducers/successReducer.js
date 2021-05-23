import { Types } from '../actions'

const successReducer = (state = false, action) => {
  switch (action.type) {
    case Types.CORRECT_GUESS:
      return true
    default:
      return state
  }
}

export default successReducer
