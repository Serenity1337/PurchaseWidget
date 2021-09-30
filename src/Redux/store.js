import { createStore, combineReducers } from 'redux'
import productsReducer from './Products/productsReducer'
import profileReducer from './Profile/profileReducer'
import formStateReducer from './FormState/formStateReducer'
const rootReducer = combineReducers({
  products: productsReducer,
  profile: profileReducer,
  formState: formStateReducer,
})
const store = createStore(rootReducer)

export default store
