import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { Provider } from 'react-redux';
import { makeServer } from './services/mirage';
import './index.css';

import store from './store';

if (import.meta.env.DEV === true) {
  makeServer();
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
    ,
  </React.StrictMode>,

  document.getElementById('root'),
);
