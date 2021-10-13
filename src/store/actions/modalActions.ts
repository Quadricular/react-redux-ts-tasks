import { ModalActionTypes } from '../constants';
import { ModalAction, ModalActionPayload } from '../types';

export function showModal(payload: ModalActionPayload): ModalAction {
  return {
    type: ModalActionTypes.SHOW_MODAL,
    payload,
  };
}

export function hideModal(): ModalAction {
  return {
    type: ModalActionTypes.HIDE_MODAL,
  };
}
