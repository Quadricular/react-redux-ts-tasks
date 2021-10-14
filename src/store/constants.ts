export enum taskTypes {
  LOAD_TASKS = 'LOAD_TASKS',
  TASKS_LOADED = 'TASKS_LOADED',
  LOAD_TASKS_FAILURE = 'LOAD_TASKS_FAILURE',

  ADD_TASK = 'ADD_TASK',
  TASK_ADDED = 'TASK_ADDED',
  ADD_TASK_FAILURE = 'ADD_TASK_FAILURE',

  TOGGLE_TASK = 'TOGGLE_TASK',
  TASK_TOGGLED = 'TASK_TOGGLED',
  TOGGLE_TASK_FAILURE = 'TOGGLE_TASK_FAILURE',

  EDIT_TASK = 'EDIT_TASK',
  TASK_EDITED = 'TASK_EDITED',
  EDIT_TASK_FAILURE = 'EDIT_TASK_FAILURE',

  DELETE_TASK = 'DELETE_TASK',
  TASK_DELETED = 'TASK_DELETED',
  DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE',
}

export enum Filters {
  SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER',
  SET_SORTING_FILTER = 'SET_SORTING_FILTER',
}

export enum VisibilityFilters {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
}

export enum SortingFilters {
  DEADLINE_ASCENDING = 'DEADLINE_ASCENDING',
  DEADLINE_DESCENDING = 'DEADLINE_DESCENDING',
  CREATED_ASCENDING = 'CREATED_ASCENDING',
  CREATED_DESCENDING = 'CREATED_DESCENDING',
}

export const sortingFiltersList = [
  {
    label: 'Deadline (Ascending)',
    type: SortingFilters.DEADLINE_ASCENDING,
  },
  {
    label: 'Deadline (Descending)',
    type: SortingFilters.DEADLINE_DESCENDING,
  },
  {
    label: 'Created (Ascending)',
    type: SortingFilters.CREATED_ASCENDING,
  },
  {
    label: 'Created (Descending)',
    type: SortingFilters.CREATED_DESCENDING,
  },
];

export enum ModalActionTypes {
  SHOW_MODAL = 'SHOW_MODAL',
  HIDE_MODAL = 'HIDE_MODAL',
}
