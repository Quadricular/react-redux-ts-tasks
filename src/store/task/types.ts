import { Task } from '../../models/task';
import { TaskTypes } from '../constants';

export interface TasksState {
  pending: boolean;
  tasks: Task[];
  error: string | null;
}

/* FETCH */

export interface FetchTasksRequest {
  type: typeof TaskTypes.LOAD_TASKS;
}

export type FetchTasksSuccess = {
  type: typeof TaskTypes.TASKS_LOADED;
  payload: FetchTasksSuccessPayload;
};

export interface FetchTasksSuccessPayload {
  data: {
    tasks: Task[];
  };
}

export type FetchTasksFailure = {
  type: typeof TaskTypes.LOAD_TASKS_FAILURE;
  payload: FetchTasksFailurePayload;
};

export interface FetchTasksFailurePayload {
  error: string;
}

/* TOGGLE (PUT) */

export interface ToggleTaskRequest {
  type: typeof TaskTypes.TOGGLE_TASK;
  payload: ToggleTasksRequestPayload;
}

export interface ToggleTasksRequestPayload {
  id: string;
  completed: boolean;
}

export type ToggleTaskSuccess = {
  type: typeof TaskTypes.TASK_TOGGLED;
  payload: ToggleTaskSuccessPayload;
};

export interface ToggleTaskSuccessPayload {
  data: { task: { _id: string; completed: boolean } };
}

/* EDIT */

export interface EditTaskRequest {
  type: typeof TaskTypes.EDIT_TASK;
  payload: EditTaskRequestPayload;
}

export interface EditTaskRequestPayload {
  id: string;
  data: Omit<Task, '_id' | 'deadline'> & { deadline: Date | string };
}

export type EditTaskSuccess = {
  type: typeof TaskTypes.TASK_EDITED;
  payload: EditTaskSuccessPayload;
};

export interface EditTaskSuccessPayload {
  data: { task: Task };
}

/* ADD */

export interface AddTaskRequest {
  type: typeof TaskTypes.ADD_TASK;
  payload: AddTaskRequestPayload;
}

export interface AddTaskRequestPayload {
  data: Omit<Task, '_id' | 'deadline'> & { deadline: Date | string };
}

export type AddTaskSuccess = {
  type: typeof TaskTypes.TASK_ADDED;
  payload: AddTaskSuccessPayload;
};

export interface AddTaskSuccessPayload {
  data: { task: Task };
}

/* DELETE */

export interface DeleteTaskRequest {
  type: typeof TaskTypes.DELETE_TASK;
  payload: DeleteTaskRequestPayload;
}

export interface DeleteTaskRequestPayload {
  id: string;
}

export type DeleteTaskSuccess = {
  type: typeof TaskTypes.TASK_DELETED;
  payload: DeleteTaskSuccessPayload;
};

export interface DeleteTaskSuccessPayload {
  data: { task: { _id: string } };
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
  | DeleteTaskSuccess;
