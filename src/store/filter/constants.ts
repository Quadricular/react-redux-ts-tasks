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

export const SortingFiltersList = [
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
