import { takeEvery, call, put, all } from 'redux-saga/effects';
import { Task } from '../../models/task';
import TasksService from '../../services/TasksService';
import * as actions from '../actions/tasksActions';
import { taskTypes } from '../constants';

//Worker Sagas
function* loadTasks() {
  try {
    const tasks: { data: Task[] } = yield call(TasksService.getTasks);
    yield put(actions.tasksLoadedAction(tasks));
  } catch (e) {
    console.log(e);
  }
}

//Watcher Sagas
function* watchLoadTasks() {
  yield takeEvery(taskTypes.LOAD_TASKS, loadTasks);
}

export function* tasksSaga() {
  yield all([watchLoadTasks()]);
}
