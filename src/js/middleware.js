import { applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import { sagaMiddleware } from './sagas';
import { middleware as routerMiddleware} from './routerConfig';

import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = composeWithDevTools(applyMiddleware(promise(), thunk, sagaMiddleware, routerMiddleware));

export default middleware;
