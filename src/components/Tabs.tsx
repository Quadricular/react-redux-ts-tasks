import React from 'react';
import FilterLink from '../components/FilterLink';
import { VisibilityFilters } from '../store/constants';

const Tabs = (): JSX.Element => (
  <div className="mb-4">
    <ul className="flex flex-wrap -m-1">
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>View All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </ul>
  </div>
);

export default Tabs;
