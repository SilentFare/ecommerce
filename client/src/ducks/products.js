import { combineReducers } from 'redux';

// Action types
const FETCH_BESTSELLERS = 'FETCH_BESTSELLERS';
const FETCH_BESTSELLERS_SUCCESS = 'FETCH_BESTSELLERS_SUCCESS';
const FETCH_BESTSELLERS_FAILURE = 'FETCH_BESTSELLERS_FAILURE';
const FETCH_NEWEST = 'FETCH_NEWEST';
const FETCH_NEWEST_SUCCESS = 'FETCH_NEWEST_SUCCESS';
const FETCH_NEWEST_FAILURE = 'FETCH_NEWEST_FAILURE';
const FETCH_BY_FILTERS = 'FETCH_BY_FILTERS';

// Action creators
export const fetchBestSellers = limit => async dispatch => {
  try {
    dispatch({ type: FETCH_BESTSELLERS });
    const response = await fetch(
      `/api/products?sortBy=sold&order=desc&limit=${limit}`
    );
    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
      dispatch({ type: FETCH_BESTSELLERS_SUCCESS, products: responseData });
    }
  } catch (error) {
    dispatch({ type: FETCH_BESTSELLERS_FAILURE, error });
  }
};

export const fetchNewest = limit => async dispatch => {
  try {
    dispatch({ type: FETCH_NEWEST });
    const response = await fetch(
      `/api/products?sortBy=createdAt&order=desc&limit=${limit}`
    );
    if (response.ok) {
      const responseData = await response.json();
      dispatch({ type: FETCH_NEWEST_SUCCESS, products: responseData });
    }
  } catch (error) {
    dispatch({ type: FETCH_NEWEST_FAILURE, error });
  }
};

export const fetchByFilters = (
  filters,
  order = 'desc',
  sortBy = 'createdAt',
  limit = 6
) => async dispatch => {
  try {
    dispatch({ type: FETCH_BY_FILTERS });
    const url = `/api/products?order=${order}&sortBy=${sortBy}&limit=${limit}${
      filters.length > 0 ? `&${filters}` : ''
    }`;
    console.log('Shop URL', url);
    const response = await fetch(url);
    if (response.ok) {
      const responseData = await response.json();
      console.log('Fetch By Filters RESULT', responseData);
    }
  } catch (error) {}
};

// Reducers
const bestSellersState = { items: [], isFetching: false, isInvalidate: false };

const bestSellers = (state = bestSellersState, action) => {
  switch (action.type) {
    case FETCH_BESTSELLERS:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_BESTSELLERS_SUCCESS:
      return {
        ...state,
        items: action.products,
        isFetching: false
      };
    case FETCH_BESTSELLERS_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};

const newestState = { items: [], isFetching: false, isInvalidate: false };

const newest = (state = newestState, action) => {
  switch (action.type) {
    case FETCH_NEWEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_NEWEST_SUCCESS:
      return {
        ...state,
        items: action.products,
        isFetching: false
      };
    case FETCH_NEWEST_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};

const shopState = { items: [], isFetching: false, isInvalidate: false };

const shop = (state = shopState, action) => {
  switch (action.type) {
    case FETCH_BY_FILTERS:
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
};

export const products = combineReducers({
  bestSellers,
  newest,
  shop
});
