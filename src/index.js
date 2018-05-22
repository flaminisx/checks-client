import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './js/App';
import configureStore from './js/store'
import registerServiceWorker from './js/registerServiceWorker';
import { rootSaga, sagaMiddleware } from './js/sagas';
import { INIT } from './js/actions/uiActions';

import './style/main.sass';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

sagaMiddleware.run(rootSaga);

store.dispatch({
	type: INIT
});


registerServiceWorker();
