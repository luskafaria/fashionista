import { TYPES } from '../actions/products';

export const defaultState = {
  loading: false,
  products: [],
  filteredProducts: [],
  filterOpen: false,
};

const productsReducer = (state = defaultState, action) => {
  console.log(action.type);

  switch (action.type) {
    case TYPES.SET_LOADING:
      return {
        loading: action.payload,
      };

    case TYPES.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case TYPES.SET_FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.payload,
      };

    case TYPES.TOGGLE_SEARCH:
      if (state.filterOpen === false) {
        return {
          ...state,
          filterOpen: true,
        };
      }
      return {
        ...state,
        filterOpen: false,
      };

    default:
      return state;
  }
};

export default productsReducer;
