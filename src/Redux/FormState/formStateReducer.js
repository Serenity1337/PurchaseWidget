import { UPDATE_FORMSTATE } from './formStateTypes'
const initialState = [
  { products: true },
  { contacts: false },
  { orderReview: false },
  { orderComplete: false },
]

const formStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORMSTATE:
      return action.formStateCopy
    default:
      return state
  }
}

export default formStateReducer
