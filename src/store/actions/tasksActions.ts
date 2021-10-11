import { taskTypes } from '../constants';
import {
  // FetchTasksFailure,
  // FetchTasksFailurePayload,
  FetchTasksRequest,
  FetchTasksSuccess,
  FetchTasksSuccessPayload,
  ToggleTaskRequest,
  SetFilter,
} from '../types';
import { VisibilityFilters } from '../../store/constants';

export const loadTasksAction = (): FetchTasksRequest => {
  return {
    type: taskTypes.LOAD_TASKS,
  };
};

export const tasksLoadedAction = (
  payload: FetchTasksSuccessPayload,
): FetchTasksSuccess => {
  return {
    type: taskTypes.TASKS_LOADED,
    payload,
  };
};

export const setVisibilityFilter = (filter: VisibilityFilters): SetFilter => ({
  type: taskTypes.SET_VISIBILITY_FILTER,
  filter,
});

export const toggleTask = (id: string): ToggleTaskRequest => ({
  type: taskTypes.TOGGLE_TASK,
  id,
});
