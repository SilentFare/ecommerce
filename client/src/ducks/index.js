import reduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { products } from './products';
import { categories } from './categories';
import { errors } from './errors';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [reduxThunk];

const rootReducer = combineReducers({
  products,
  categories,
  errors
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
