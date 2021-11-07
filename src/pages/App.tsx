import React from 'react';
import { Provider } from 'react-redux';
import { makeServer } from '../services/mirage';
import Router from '../router';
import type { Store } from 'redux';
import type { History } from 'history';

if (import.meta.env.DEV && !import.meta.env.VITE_MODE) {
  makeServer();
}

export default function App({
  store,
  history,
}: {
  store: Store;
  history: History;
}): React.ReactElement {
  return (
    <Provider store={store}>
      <Router history={history} />
    </Provider>
  );
}
