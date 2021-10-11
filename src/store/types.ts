import { Task } from '../models/task';
import { taskTypes, VisibilityFilters } from './constants';

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

export interface ToggleTasksRequestPayload {
  id: string;
  completed: boolean;
}

export interface ToggleTasksSuccessPayload {
  id: string;
  completed: boolean;
}

export interface AddTaskRequestPayload {
  data: Task;
}

export interface AddTaskSuccessPayload {
  data: Task;
}

export interface FetchTasksSuccessPayload {
  data: Task[];
}

export interface FetchTasksRequest {
  type: typeof taskTypes.LOAD_TASKS;
}

export type FetchTasksSuccess = {
  type: typeof taskTypes.TASKS_LOADED;
  payload: FetchTasksSuccessPayload;
};

export type ToggleTaskSuccess = {
  type: typeof taskTypes.TASK_TOGGLED;
  payload: ToggleTasksSuccessPayload;
};

export type AddTaskSuccess = {
  type: typeof taskTypes.TASK_ADDED;
  payload: AddTaskSuccessPayload;
};

export type tasksFilters = {
  type:
    | VisibilityFilters.SHOW_ALL
    | VisibilityFilters.SHOW_COMPLETED
    | VisibilityFilters.SHOW_ACTIVE
    | VisibilityFilters.SET_VISIBILITY_FILTER;
  payload: FetchTasksSuccessPayload;
  filter: VisibilityFilters;
};

export type SetFilter = {
  type: taskTypes.SET_VISIBILITY_FILTER;
  filter: VisibilityFilters;
};

export type FetchTasksFailure = {
  type: typeof taskTypes.LOAD_TASKS_FAILURE;
  payload: FetchTasksFailurePayload;
};

export interface ToggleTaskRequest {
  type: typeof taskTypes.TOGGLE_TASK;
  payload: ToggleTasksRequestPayload;
}

export interface AddTaskRequest {
  type: typeof taskTypes.ADD_TASK;
  payload: AddTaskRequestPayload;
}

export type TasksActions =
  | FetchTasksRequest
  | FetchTasksSuccess
  | ToggleTaskSuccess
  | FetchTasksFailure
  | tasksFilters
  | ToggleTaskRequest
  | AddTaskRequest
  | AddTaskSuccess;
