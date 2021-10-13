import { Task } from '../models/task';
import { taskTypes, VisibilityFilters, ModalActionTypes } from './constants';

export interface TasksState {
  pending: boolean;
  tasks: Task[];
  error: string | null;
}

export interface ModalState {
  modal: boolean;
  add: boolean | undefined;
  currentTask?: Task;
}

/* FETCH */

export interface FetchTasksRequest {
  type: typeof taskTypes.LOAD_TASKS;
}

export type FetchTasksSuccess = {
  type: typeof taskTypes.TASKS_LOADED;
  payload: FetchTasksSuccessPayload;
};

export interface FetchTasksSuccessPayload {
  data: Task[];
}

export type FetchTasksFailure = {
  type: typeof taskTypes.LOAD_TASKS_FAILURE;
  payload: FetchTasksFailurePayload;
};

export interface FetchTasksFailurePayload {
  error: string;
}

/* TOGGLE (PUT) */

export interface ToggleTaskRequest {
  type: typeof taskTypes.TOGGLE_TASK;
  payload: ToggleTasksRequestPayload;
}

export interface ToggleTasksRequestPayload {
  id: string;
  completed: boolean;
}

export type ToggleTaskSuccess = {
  type: typeof taskTypes.TASK_TOGGLED;
  payload: ToggleTasksSuccessPayload;
};

export interface ToggleTasksSuccessPayload {
  id: string;
  completed: boolean;
}

/* EDIT */

export interface EditTaskRequest {
  type: typeof taskTypes.EDIT_TASK;
  payload: EditTaskRequestPayload;
}

export interface EditTaskRequestPayload {
  id: string;
  data: Task;
}

export type EditTaskSuccess = {
  type: typeof taskTypes.TASK_EDITED;
  payload: EditTaskSuccessPayload;
};

export interface EditTaskSuccessPayload {
  data: Task;
}

/* ADD */

export interface AddTaskRequest {
  type: typeof taskTypes.ADD_TASK;
  payload: AddTaskRequestPayload;
}

export interface AddTaskRequestPayload {
  data: Task;
}

export type AddTaskSuccess = {
  type: typeof taskTypes.TASK_ADDED;
  payload: AddTaskSuccessPayload;
};

export interface AddTaskSuccessPayload {
  data: Task;
}

/* DELETE */

export interface DeleteTaskRequest {
  type: typeof taskTypes.DELETE_TASK;
  payload: DeleteTaskRequestPayload;
}

export interface DeleteTaskRequestPayload {
  id: string;
}

export type DeleteTaskSuccess = {
  type: typeof taskTypes.TASK_DELETED;
  payload: DeleteTaskSuccessPayload;
};

export interface DeleteTaskSuccessPayload {
  id: string;
}

/* FILTERS */

export type TasksFilters = {
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

export interface ModalAction {
  type: ModalActionTypes;
  payload?: ModalActionPayload;
}

export interface ModalActionPayload {
  add: boolean;
  currentTask?: Task;
}

export type TasksActions =
  | FetchTasksRequest
  | FetchTasksSuccess
  | FetchTasksFailure
  | ToggleTaskRequest
  | ToggleTaskSuccess
  | AddTaskRequest
  | AddTaskSuccess
  | EditTaskRequest
  | EditTaskSuccess
  | DeleteTaskRequest
  | DeleteTaskSuccess
  | TasksFilters;
