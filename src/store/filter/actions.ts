import { VisibilityFilters, Filters, SortingFilters } from './constants';
import * as types from './types';

export const setVisibilityFilter = (
  filter: VisibilityFilters,
): types.SetVisibilityFilter => ({
  type: Filters.SET_VISIBILITY_FILTER,
  filter,
});

export const setSortingFilter = (filter: SortingFilters): types.SetSortingFilter => ({
  type: Filters.SET_SORTING_FILTER,
  filter,
});
