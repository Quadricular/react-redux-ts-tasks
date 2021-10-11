import { SagaIterator } from 'redux-saga';
import { takeEvery, call, put, all } from 'redux-saga/effects';
import { Task } from '../../models/task';
import TasksService from '../../services/TasksService';
import * as actions from '../actions/tasksActions';
import { taskTypes } from '../constants';
import { ToggleTasksRequestPayload } from '../types';
//Worker Sagas
function* loadTasks(): SagaIterator {
  try {
    const tasks: { data: Task[] } = yield call(TasksService.getTasks);
    yield put(actions.fetchedTasksAction(tasks));
  } catch (e) {
    console.log(e);
  }
}

export function* toggleTask(action: any): SagaIterator {
  const { id, completed } = action.payload;

  try {
    const task: { task: Task } = yield call(TasksService.patch, id, {
      id: id,
      completed: completed,
    });
    console.log(task);
    yield put(actions.toggledTaskAction(task));
  } catch (e) {
    console.log(e);
  }
}

//Watcher Sagas
function* watchLoadTasks() {
  yield takeEvery(taskTypes.LOAD_TASKS, loadTasks);
}

function* watchToggleTask() {
  yield takeEvery(taskTypes.TOGGLE_TASK, toggleTask);
}

export function* tasksSaga() {
  yield all([watchLoadTasks(), watchToggleTask()]);
}
