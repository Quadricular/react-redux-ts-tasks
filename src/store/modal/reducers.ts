import { ModalAction } from './types';
import { ModalActionTypes } from './constants';
import { ModalState } from './types';

const initialState: ModalState = {
  modal: false,
  add: false,
};

export const modalReducer = (state = initialState, action: ModalAction): ModalState => {
  switch (action.type) {
    case ModalActionTypes.SHOW_MODAL:
      return {
        ...state,
        modal: true,
        add: action?.payload?.add,
        currentTask: action.payload?.currentTask,
      };
    case ModalActionTypes.HIDE_MODAL:
      return {
        ...state,
        modal: false,
        add: action?.payload?.add,
      };
    default:
      return state;
  }
};
