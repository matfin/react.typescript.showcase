import React from 'react';
import { Store } from 'redux';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStoreWithPreloadedState from 'common/store';
import App from './App';

// eslint-disable-next-line no-underscore-dangle
const preloadedState = window.__PRELOADED_STATE__;
const store: Store = createStoreWithPreloadedState(preloadedState);

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root'),
);
