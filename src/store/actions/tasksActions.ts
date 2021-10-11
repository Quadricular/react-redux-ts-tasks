import { taskTypes } from '../constants';
import {
  // FetchTasksFailure,
  // FetchTasksFailurePayload,
  FetchTasksRequest,
  FetchTasksSuccess,
  FetchTasksSuccessPayload,
  ToggleTaskRequest,
  ToggleTasksRequestPayload,
  ToggleTaskSuccess,
  ToggleTasksSuccessPayload,
  AddTaskRequest,
  AddTaskRequestPayload,
  AddTaskSuccess,
  AddTaskSuccessPayload,
  SetFilter,
} from '../types';
import { VisibilityFilters } from '../../store/constants';

export const fetchTasksAction = (): FetchTasksRequest => {
  return {
    type: taskTypes.LOAD_TASKS,
  };
};

export const fetchedTasksAction = (
  payload: FetchTasksSuccessPayload,
): FetchTasksSuccess => {
  return {
    type: taskTypes.TASKS_LOADED,
    payload,
  };
};

export const toggleTaskAction = (
  payload: ToggleTasksRequestPayload,
): ToggleTaskRequest => ({
  type: taskTypes.TOGGLE_TASK,
  payload,
});

export const toggledTaskAction = (
  payload: ToggleTasksSuccessPayload,
): ToggleTaskSuccess => {
  return {
    type: taskTypes.TASK_TOGGLED,
    payload,
  };
};

export const addTaskAction = (payload: AddTaskRequestPayload): AddTaskRequest => {
  return {
    type: taskTypes.ADD_TASK,
    payload,
  };
};

export const addedTaskAction = (payload: AddTaskSuccessPayload): AddTaskSuccess => {
  return {
    type: taskTypes.TASK_ADDED,
    payload,
  };
};

export const setVisibilityFilter = (filter: VisibilityFilters): SetFilter => ({
  type: taskTypes.SET_VISIBILITY_FILTER,
  filter,
});
