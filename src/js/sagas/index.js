import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

import user from './user';
import products from './products';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([
    ...user,
    ...products
  ])
}

export { sagaMiddleware, rootSaga };
