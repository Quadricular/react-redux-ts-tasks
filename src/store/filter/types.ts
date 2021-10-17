import { VisibilityFilters, Filters, SortingFilters } from './constants';

import { FetchTasksSuccessPayload } from '../types';

export interface FilterState {
  visibility: VisibilityFilters;
  sorting: SortingFilters;
}

export type TasksVisibilityFilters = {
  type: Filters.SET_VISIBILITY_FILTER;
  payload: FetchTasksSuccessPayload;
  filter: VisibilityFilters;
};

export type SetVisibilityFilter = {
  type: Filters.SET_VISIBILITY_FILTER;
  filter: VisibilityFilters;
};

export type TasksSortingFilters = {
  type:
    | VisibilityFilters.SHOW_ALL
    | VisibilityFilters.SHOW_COMPLETED
    | VisibilityFilters.SHOW_ACTIVE;
  payload: FetchTasksSuccessPayload;
  filter: VisibilityFilters;
};

export type SetSortingFilter = {
  type: Filters.SET_SORTING_FILTER;
  filter: SortingFilters;
};

export type FilterActions =
  | TasksVisibilityFilters
  | TasksSortingFilters
  | SetVisibilityFilter
  | SetSortingFilter;
