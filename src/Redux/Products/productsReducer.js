import { UPLOAD_PRODUCTS } from './productsTypes'
const initialState = []

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_PRODUCTS:
      return action.products
    default:
      return state
  }
}

export default productsReducer
