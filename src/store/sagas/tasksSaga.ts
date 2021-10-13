import { SagaIterator } from 'redux-saga';
import type { CombinatorEffect } from '@redux-saga/types';
import { takeEvery, call, put, all } from 'redux-saga/effects';
import { Task } from '../../models/task';
import TasksService from '../../services/TasksService';
import * as actions from '../actions';
import { taskTypes } from '../constants';
import {
  ToggleTaskRequest,
  AddTaskRequest,
  EditTaskRequest,
  DeleteTaskRequest,
} from '../types';
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
  try {
    const task = yield call(TasksService.create, action.payload.data);
    yield put(actions.addedTaskAction(task));
    yield put(actions.hideModal());
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

export function* editTask(action: EditTaskRequest): SagaIterator {
  try {
    yield call(TasksService.update, action.payload.id, {
      ...action.payload.data,
    });
    yield put(actions.editedTaskAction(action.payload));
    yield put(actions.hideModal());
  } catch (e) {
    console.log(e);
  }
}

function* deleteTask(action: DeleteTaskRequest): SagaIterator {
  try {
    yield call(TasksService.delete, action.payload.id);
    yield put(actions.deletedTaskAction(action.payload));
    // yield put(alert.setAlertAction({
    //     text: 'Task Deleted!',
    //     color: 'success'
    // }))
  } catch (e) {
    // yield put(alert.setAlertAction({
    //     text: 'Task Not Deleted.',
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

function* watchEditTask() {
  yield takeEvery(taskTypes.EDIT_TASK, editTask);
}

function* watchDeleteTask() {
  yield takeEvery(taskTypes.DELETE_TASK, deleteTask);
}

export function* tasksSaga(): Generator<CombinatorEffect<string, unknown>> {
  yield all([
    watchLoadTasks(),
    watchToggleTask(),
    watchAddTask(),
    watchEditTask(),
    watchDeleteTask(),
  ]);
}
