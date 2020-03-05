import reduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { products } from './products';
import { errors } from './errors';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [reduxThunk];

const rootReducer = combineReducers({
  products,
  errors
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
