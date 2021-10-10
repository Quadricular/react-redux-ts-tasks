import { all, fork } from 'redux-saga/effects';

import { tasksSaga } from './tasksSaga';

export function* rootSaga() {
  yield all([fork(tasksSaga)]);
}
