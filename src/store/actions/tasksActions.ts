import { taskTypes } from '../constants';
import * as types from '../types';

/* FETCH */

export const fetchTasksAction = (): types.FetchTasksRequest => {
  return {
    type: taskTypes.LOAD_TASKS,
  };
};

export const fetchedTasksAction = (
  payload: types.FetchTasksSuccessPayload,
): types.FetchTasksSuccess => {
  return {
    type: taskTypes.TASKS_LOADED,
    payload,
  };
};

/* TOGGLE */

export const toggleTaskAction = (
  payload: types.ToggleTasksRequestPayload,
): types.ToggleTaskRequest => ({
  type: taskTypes.TOGGLE_TASK,
  payload,
});

export const toggledTaskAction = (
  payload: types.ToggleTaskSuccessPayload,
): types.ToggleTaskSuccess => {
  return {
    type: taskTypes.TASK_TOGGLED,
    payload,
  };
};

/* ADD */

export const addTaskAction = (
  payload: types.AddTaskRequestPayload,
): types.AddTaskRequest => {
  return {
    type: taskTypes.ADD_TASK,
    payload,
  };
};

export const addedTaskAction = (
  payload: types.AddTaskSuccessPayload,
): types.AddTaskSuccess => {
  return {
    type: taskTypes.TASK_ADDED,
    payload,
  };
};

/* EDIT */

export const editTaskAction = (
  payload: types.EditTaskRequestPayload,
): types.EditTaskRequest => {
  return {
    type: taskTypes.EDIT_TASK,
    payload,
  };
};

export const editedTaskAction = (
  payload: types.EditTaskSuccessPayload,
): types.EditTaskSuccess => {
  return {
    type: taskTypes.TASK_EDITED,
    payload,
  };
};

/* DELETE */

export const deleteTaskAction = (
  payload: types.DeleteTaskRequestPayload,
): types.DeleteTaskRequest => {
  return {
    type: taskTypes.DELETE_TASK,
    payload,
  };
};

export const deletedTaskAction = (
  payload: types.DeleteTaskSuccessPayload,
): types.DeleteTaskSuccess => {
  return {
    type: taskTypes.TASK_DELETED,
    payload,
  };
};
