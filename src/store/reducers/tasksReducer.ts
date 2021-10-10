import { taskTypes } from '../actionTypes';
import { TasksActions, TasksState } from '../types';

const initialState: TasksState = {
  pending: false,
  tasks: [],
  error: null,
};

export const tasksReducer = (state = initialState, action: TasksActions) => {
  switch (action.type) {
    case taskTypes.LOAD_TASKS:
      return {
        ...state,
        pending: true,
      };
    case taskTypes.TASKS_LOADED:
      return {
        ...state,
        pending: false,
        tasks: action.payload.data,
        error: null,
      };

    default:
      return state;
  }
};
