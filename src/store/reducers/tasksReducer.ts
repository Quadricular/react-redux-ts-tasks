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
        tasks: action.payload.data.tasks as Task[],
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
          task._id === action.payload.data.task._id
            ? { ...task, ...action.payload.data.task }
            : task,
        ),
        pending: false,
      };
    case taskTypes.TASK_ADDED:
      return {
        ...state,
        tasks: [...state.tasks, { ...action.payload.data.task }],
        pending: false,
      };
    case taskTypes.TASK_EDITED:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === action.payload.data.task._id
            ? { ...task, ...action.payload.data.task }
            : task,
        ),
        pending: false,
      };
    case taskTypes.TASK_DELETED:
      const { _id } = action.payload.data.task;

      console.log(action.payload);
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== _id),
        pending: false,
      };

    default:
      return state;
  }
};
