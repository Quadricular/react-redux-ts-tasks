import { taskTypes } from '../constants';
import {
  // FetchTasksFailure,
  // FetchTasksFailurePayload,
  FetchTasksRequest,
  FetchTasksSuccess,
  FetchTasksSuccessPayload,
  ToggleTaskRequest,
  ToggleTaskSuccess,
  ToggleTasksRequestPayload,
  ToggleTasksSuccessPayload,
  AddTaskRequest,
  SetFilter,
} from '../types';
import { VisibilityFilters } from '../../store/constants';
import { Task } from '../../models/task';

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

export const addTaskAction = (payload: Task): AddTaskRequest => {
  return {
    type: taskTypes.ADD_TASK,
    payload,
  };
};

export const setVisibilityFilter = (filter: VisibilityFilters): SetFilter => ({
  type: taskTypes.SET_VISIBILITY_FILTER,
  filter,
});
