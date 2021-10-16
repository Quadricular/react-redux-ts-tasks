import { VisibilityFilters, SortingFilters, Filters } from '../constants';
import { FilterActions, FilterState } from '../types';

const initialState: FilterState = {
  visibility: VisibilityFilters.SHOW_ALL,
  sorting: SortingFilters.DEADLINE_ASCENDING,
};

export const filterReducer = (
  state = initialState,
  action: FilterActions,
): FilterState => {
  switch (action.type) {
    case Filters.SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibility: action.filter,
      };
    case Filters.SET_SORTING_FILTER:
      return {
        ...state,
        sorting: action.filter,
      };
    default:
      return state;
  }
};
