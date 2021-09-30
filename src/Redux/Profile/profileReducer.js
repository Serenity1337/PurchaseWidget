import { UPDATE_PROFILE } from './profileTypes'
const initialState = {
  products: [],
  contact: { firstName: '', lastName: '', email: '' },
  price: {},
  taxInfo: {},
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return action.profileCopy
    default:
      return state
  }
}

export default productsReducer
