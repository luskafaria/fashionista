import { createStore, combineReducers } from 'redux';
import productsReducer from './reducers/products';
import cart from './reducers/cart';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createFilter from 'redux-persist-transform-filter';

const reducers = combineReducers({
  productsReducer,
  cart,
});

const saveCartSubSetFilter = createFilter('cart', ['items']);

const persistConfig = {
  key: 'cart',
  storage,
  blacklist: ['productsReducer'],
  transforms: [saveCartSubSetFilter],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
