import React from 'react';
import { Provider } from 'react-redux';
import { makeServer } from '../services/mirage';
import Router from '../router';
import store from '../store';

if (import.meta.env.DEV) {
  makeServer();
}

export default function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
