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
        pending: false,
      };
    case taskTypes.TASK_TOGGLED:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, completed: !task.completed } : task,
        ),
        pending: false,
      };

    default:
      return state;
  }
};
