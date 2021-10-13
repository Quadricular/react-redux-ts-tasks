import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { VisibilityFilters } from '../store/constants';
import { Task } from '../models/task';

export const getVisibleTasks = (
  tasks: { tasks: Task[] },
  filter: VisibilityFilters,
): Task[] => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return tasks.tasks;
    case VisibilityFilters.SHOW_COMPLETED: {
      const filtered = tasks.tasks.filter((t: Task) => t.completed);
      return filtered;
    }

    case VisibilityFilters.SHOW_ACTIVE:
      return tasks.tasks.filter((t: Task) => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

export const useVisibilityFilter = (): VisibilityFilters => {
  const visibilityFilter = useSelector((state: RootState) => state.visibilityFilter);
  return visibilityFilter;
};
