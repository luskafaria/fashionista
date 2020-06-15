import React from 'react';
import GlobalStyles from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import { Provider } from 'react-redux';

import CartContainer from './containers/CartContainer';
import SearchContainer from './containers/SearchContainer';

import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
          <CartContainer />
          <SearchContainer />
          <GlobalStyles />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
