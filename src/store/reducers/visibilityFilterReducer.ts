import { VisibilityFilters } from '../constants';
import { TasksActions, TasksState } from '../types';

export const visibilityFilterReducer = (
  state = VisibilityFilters.SHOW_ALL,
  action: TasksActions,
): TasksState | VisibilityFilters => {
  switch (action.type) {
    case VisibilityFilters.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
