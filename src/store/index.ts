import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { rootSaga } from './sagas';

const saga = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer =
  (!import.meta.env.ENV && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(saga, logger)));

saga.run(rootSaga);

export default store;
