const TYPES = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  GET_PRODUCT: 'GET_PRODUCT',
  SET_FILTERED_PRODUCTS: 'SET_FILTERED_PRODUCTS',
  TOGGLE_SEARCH: 'TOGGLE_SEARCH',
};

const setProducts = (data) => {
  return {
    type: TYPES.SET_PRODUCTS,
    payload: data,
  };
};

const setFilteredProducts = (data) => {
  return {
    type: TYPES.SET_FILTERED_PRODUCTS,
    payload: data,
  };
};

const toggleSearch = () => {
  return {
    type: TYPES.TOGGLE_SEARCH,
  };
};

export { TYPES, setProducts, setFilteredProducts, toggleSearch };
