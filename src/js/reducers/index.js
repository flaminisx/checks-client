import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import user from './user'
import ui from './ui'

export default combineReducers({
  ui,
  user,
  routerReducer,
  form: formReducer
})
