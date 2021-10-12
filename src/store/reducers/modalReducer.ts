import { ModalAction } from '../types';
import { ModalActionTypes } from '../constants';
import { ModalState } from '../types';

const initialState: ModalState = {
  modal: false,
};

export const modalReducer = (state = initialState, action: ModalAction): ModalState => {
  switch (action.type) {
    case ModalActionTypes.SHOW_MODAL:
      return {
        ...state,
        modal: true,
      };
    case ModalActionTypes.HIDE_MODAL:
      return {
        ...state,
        modal: false,
      };
    default:
      return state;
  }
};
