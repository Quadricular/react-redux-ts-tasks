import { Task } from '../../models/task';
import { ModalActionTypes } from './constants';

export interface ModalState {
  modal: boolean;
  add: boolean | undefined;
  currentTask?: Task;
}

export interface ModalAction {
  type: ModalActionTypes;
  payload?: ModalActionPayload;
}

export interface ModalActionPayload {
  add: boolean;
  currentTask?: Task;
}
