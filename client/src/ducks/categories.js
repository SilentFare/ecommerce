// Action types
const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const fetchCategories = () => async dispatch => {
  try {
    dispatch({ type: FETCH_CATEGORIES });
    const response = await fetch('/api/categories');
    console.log('Fetch Categories', response);
    if (response.ok) {
      const { categories } = await response.json();
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, categories });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_CATEGORIES_FAILURE, error });
  }
};

const initialState = { items: [], isFetching: false, isInvalidate: false };

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        items: action.categories,
        isFetching: false
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};
