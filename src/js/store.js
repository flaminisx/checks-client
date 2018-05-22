import { createStore } from 'redux';
import rootReducer from './reducers';
import middleware from './middleware';
export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, middleware)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
