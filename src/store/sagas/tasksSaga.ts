import { SagaIterator } from 'redux-saga';
import type { CombinatorEffect } from '@redux-saga/types';
import { takeEvery, call, put, all } from 'redux-saga/effects';

import TasksService from '../../services/TasksService';
import * as actions from '../actions';
import { taskTypes } from '../constants';
import {
  ToggleTaskRequest,
  AddTaskRequest,
  EditTaskRequest,
  DeleteTaskRequest,
  FetchTasksSuccessPayload,
  ToggleTaskSuccessPayload,
  AddTaskSuccessPayload,
  EditTaskSuccessPayload,
  DeleteTaskSuccessPayload,
} from '../types';
//Worker Sagas
function* loadTasks(): SagaIterator {
  try {
    const fetchResponse: FetchTasksSuccessPayload = yield call(TasksService.getTasks);
    yield put(actions.fetchedTasksAction(fetchResponse));
  } catch (e) {
    console.log(e);
  }
}

export function* toggleTask(action: ToggleTaskRequest): SagaIterator {
  try {
    const toggleResponse: ToggleTaskSuccessPayload = yield call(
      TasksService.update,
      action.payload.id,
      {
        completed: !action.payload.completed,
      },
    );
    console.log(toggleResponse);
    yield put(actions.toggledTaskAction(toggleResponse));
    yield put(actions.hideModal());
  } catch (e) {
    console.log(e);
  }
}

function* addTask(action: AddTaskRequest): SagaIterator {
  try {
    const createResponse: AddTaskSuccessPayload = yield call(
      TasksService.create,
      action.payload.data,
    );

    yield put(actions.addedTaskAction(createResponse));
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
    console.log(action.payload);
    const editResponse: EditTaskSuccessPayload = yield call(
      TasksService.update,
      action.payload.id,
      {
        ...action.payload.data,
      },
    );

    yield put(actions.editedTaskAction(editResponse));
    yield put(actions.hideModal());
  } catch (e) {
    console.log(e);
  }
}

function* deleteTask(action: DeleteTaskRequest): SagaIterator {
  try {
    const deleteResponse: DeleteTaskSuccessPayload = yield call(
      TasksService.delete,
      action.payload.id,
    );
    console.log(deleteResponse);
    yield put(actions.deletedTaskAction(deleteResponse));
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
