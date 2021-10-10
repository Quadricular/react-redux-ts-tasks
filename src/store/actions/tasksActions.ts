import { taskTypes } from '../actionTypes';
import {
  // FetchTasksFailure,
  // FetchTasksFailurePayload,
  FetchTasksRequest,
  FetchTasksSuccess,
  FetchTasksSuccessPayload,
} from '../types';

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
