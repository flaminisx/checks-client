import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import products from './products'
import user from './user'
import ui from './ui'

export default combineReducers({
  ui,
  user,
  products,
  routerReducer,
  form: formReducer
})
