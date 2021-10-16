import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { SortingFilters, VisibilityFilters } from '../store/constants';
import { Task } from '../models/task';

export const filterVisible = (tasks: Task[], visibility: VisibilityFilters): Task[] => {
  switch (visibility) {
    case VisibilityFilters.SHOW_ALL:
      return tasks;
    case VisibilityFilters.SHOW_COMPLETED: {
      const filtered = tasks.filter((t: Task) => t.completed);
      return filtered;
    }

    case VisibilityFilters.SHOW_ACTIVE:
      return tasks.filter((t: Task) => !t.completed);
    default:
      throw new Error('Unknown filter: ' + visibility);
  }
};

export const filterSorted = (tasks: Task[], sorting: SortingFilters): Task[] => {
  switch (sorting) {
    case SortingFilters.DEADLINE_ASCENDING:
      return tasks.sort((x, y) => +new Date(y.deadline) - +new Date(x.deadline));
    case SortingFilters.DEADLINE_DESCENDING: {
      return tasks
        .sort((x, y) => +new Date(x.deadline) - +new Date(y.deadline))
        .map((task) => {
          return task;
        });
    }
    case SortingFilters.CREATED_ASCENDING:
      return tasks
        .sort((x, y) => +new Date(y.createdAt as Date) - +new Date(x.createdAt as Date))
        .map((task) => {
          return task;
        });
    case SortingFilters.CREATED_DESCENDING:
      return tasks
        .sort((x, y) => +new Date(x.createdAt as Date) - +new Date(y.createdAt as Date))
        .map((task) => {
          return task;
        });
    default:
      throw new Error('Unknown filter: ' + sorting);
  }
};

export const getVisibleTasks = (
  data: { tasks: Task[] },
  filters: {
    visibility: VisibilityFilters;
    sorting: SortingFilters;
  },
): Task[] => {
  return filterSorted(filterVisible(data.tasks, filters.visibility), filters.sorting);
};

export const useVisibilityFilter = (): VisibilityFilters => {
  return useSelector((state: RootState) => state.filters.visibility);
};

export const useSortingFilter = (): SortingFilters => {
  return useSelector((state: RootState) => state.filters.sorting);
};
