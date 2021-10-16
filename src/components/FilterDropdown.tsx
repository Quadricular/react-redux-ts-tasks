/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import { useDispatch } from 'react-redux';
import { sortingFiltersList, SortingFilters } from '../store/constants';
import { setSortingFilter } from '../store/actions/filterActions';

const FilterDropdown = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div style={{ marginLeft: 20 }}>
      <span>sort by </span>
      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch(setSortingFilter(e.target.value as SortingFilters))
        }
        className="browser-default custom-select"
      >
        {sortingFiltersList.map((sortBy, key) => (
          <option key={key} value={sortBy.type} defaultValue={sortBy.type}>
            {sortBy.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
