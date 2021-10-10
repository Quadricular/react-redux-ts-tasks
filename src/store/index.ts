import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { rootSaga } from './sagas';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(saga, logger));

saga.run(rootSaga);

export default store;
