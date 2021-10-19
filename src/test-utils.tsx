import React from 'react';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { mount as cyMount, MountReturn } from '@cypress/react';
// Import your own reducer
import rootReducer from './store/rootReducer';
import rootSaga from './store/rootSaga';
import { makeServer as makeMockServer } from './services/mirage';

const saga = createSagaMiddleware();

export function createTestStore(): Store {
  const store = createStore(rootReducer, applyMiddleware(saga, logger));
  makeMockServer();
  saga.run(rootSaga);
  return store;
}

function mount(ui: JSX.Element): Cypress.Chainable<MountReturn> {
  return cyMount(<Provider store={createTestStore()}>{ui}</Provider>);
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { mount };
