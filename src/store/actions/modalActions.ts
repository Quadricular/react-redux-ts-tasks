import { ModalActionTypes } from '../constants';
import { ModalAction } from '../types';

export function showModal(): ModalAction {
  return {
    type: ModalActionTypes.SHOW_MODAL,
  };
}

export function hideModal(): ModalAction {
  return {
    type: ModalActionTypes.HIDE_MODAL,
  };
}
