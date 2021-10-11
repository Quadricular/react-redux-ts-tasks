import { taskTypes } from '../constants';
import { TasksActions, TasksState } from '../types';
import { Task } from '../../models/task';

const initialState: TasksState = {
  pending: false,
  tasks: [],
  error: null,
};

export const tasksReducer = (state = initialState, action: TasksActions): TasksState => {
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
        tasks: action.payload.data as Task[],
        error: null,
      };
    case taskTypes.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
        ),
        pending: false,
      };

    default:
      return state;
  }
};
