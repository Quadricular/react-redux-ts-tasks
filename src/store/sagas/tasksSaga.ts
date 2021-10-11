import { SagaIterator } from 'redux-saga';
import type { CombinatorEffect } from '@redux-saga/types';
import { takeEvery, call, put, all } from 'redux-saga/effects';
import { Task } from '../../models/task';
import TasksService from '../../services/TasksService';
import * as actions from '../actions/tasksActions';
import { taskTypes } from '../constants';
import { ToggleTaskRequest, AddTaskRequest } from '../types';
//Worker Sagas
function* loadTasks(): SagaIterator {
  try {
    const tasks: { data: Task[] } = yield call(TasksService.getTasks);
    yield put(actions.fetchedTasksAction(tasks));
  } catch (e) {
    console.log(e);
  }
}

export function* toggleTask(action: ToggleTaskRequest): SagaIterator {
  const { id, completed } = action.payload;

  try {
    yield call(TasksService.patch, id, {
      id: id,
      completed: completed,
    });
    yield put(actions.toggledTaskAction(action.payload));
  } catch (e) {
    console.log(e);
  }
}

function* addTask(action: AddTaskRequest): SagaIterator {
  console.log(action.payload);

  try {
    const task = yield call(TasksService.create, action.payload.data);
    yield put(actions.addedTaskAction(task));
    // yield put(alert.setAlertAction({
    //     text: 'Task Added!',
    //     color: 'success'
    // }))
  } catch (e) {
    console.log(e);
    // yield put(alert.setAlertAction({
    //     text: 'Task Not Added.',
    //     color: 'danger'
    // }))
  }
}

//Watcher Sagas
function* watchLoadTasks() {
  yield takeEvery(taskTypes.LOAD_TASKS, loadTasks);
}

function* watchToggleTask() {
  yield takeEvery(taskTypes.TOGGLE_TASK, toggleTask);
}

function* watchAddTask() {
  yield takeEvery(taskTypes.ADD_TASK, addTask);
}

export function* tasksSaga(): Generator<CombinatorEffect<string, unknown>> {
  yield all([watchLoadTasks(), watchToggleTask(), watchAddTask()]);
}
