import { all, fork } from 'redux-saga/effects';
import type { CombinatorEffect } from '@redux-saga/types';
import { tasksSaga } from './task/sagas';

export default function* rootSaga(): Generator<CombinatorEffect<string, unknown>> {
  yield all([fork(tasksSaga)]);
}
