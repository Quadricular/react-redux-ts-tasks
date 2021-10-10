import { Task } from '../models/task';
import { taskTypes } from './actionTypes';

export interface TasksState {
  pending: boolean;
  tasks: Task[];
  error: string | null;
}

export interface FetchTasksSuccessPayload {
  data: Task[];
}

export interface FetchTasksFailurePayload {
  error: string;
}

export interface FetchTasksRequest {
  type: typeof taskTypes.LOAD_TASKS;
}

export type FetchTasksSuccess = {
  type: typeof taskTypes.TASKS_LOADED;
  payload: FetchTasksSuccessPayload;
};

export type FetchTasksFailure = {
  type: typeof taskTypes.LOAD_TASKS_FAILURE;
  payload: FetchTasksFailurePayload;
};

export type TasksActions = FetchTasksRequest | FetchTasksSuccess | FetchTasksFailure;
