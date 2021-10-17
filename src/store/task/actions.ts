import { TaskTypes } from './constants';
import * as types from './types';

/* FETCH */

export const fetchTasksAction = (): types.FetchTasksRequest => {
  return {
    type: TaskTypes.LOAD_TASKS,
  };
};

export const fetchedTasksAction = (
  payload: types.FetchTasksSuccessPayload,
): types.FetchTasksSuccess => {
  return {
    type: TaskTypes.TASKS_LOADED,
    payload,
  };
};

/* TOGGLE */

export const toggleTaskAction = (
  payload: types.ToggleTasksRequestPayload,
): types.ToggleTaskRequest => ({
  type: TaskTypes.TOGGLE_TASK,
  payload,
});

export const toggledTaskAction = (
  payload: types.ToggleTaskSuccessPayload,
): types.ToggleTaskSuccess => {
  return {
    type: TaskTypes.TASK_TOGGLED,
    payload,
  };
};

/* ADD */

export const addTaskAction = (
  payload: types.AddTaskRequestPayload,
): types.AddTaskRequest => {
  return {
    type: TaskTypes.ADD_TASK,
    payload,
  };
};

export const addedTaskAction = (
  payload: types.AddTaskSuccessPayload,
): types.AddTaskSuccess => {
  return {
    type: TaskTypes.TASK_ADDED,
    payload,
  };
};

/* EDIT */

export const editTaskAction = (
  payload: types.EditTaskRequestPayload,
): types.EditTaskRequest => {
  return {
    type: TaskTypes.EDIT_TASK,
    payload,
  };
};

export const editedTaskAction = (
  payload: types.EditTaskSuccessPayload,
): types.EditTaskSuccess => {
  return {
    type: TaskTypes.TASK_EDITED,
    payload,
  };
};

/* DELETE */

export const deleteTaskAction = (
  payload: types.DeleteTaskRequestPayload,
): types.DeleteTaskRequest => {
  return {
    type: TaskTypes.DELETE_TASK,
    payload,
  };
};

export const deletedTaskAction = (
  payload: types.DeleteTaskSuccessPayload,
): types.DeleteTaskSuccess => {
  return {
    type: TaskTypes.TASK_DELETED,
    payload,
  };
};
