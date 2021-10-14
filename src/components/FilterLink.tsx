import React from 'react';
import { useDispatch } from 'react-redux';
import { setVisibilityFilter } from '../store/actions/filterActions';
import { VisibilityFilters } from '../store/constants';
import Link from '../components/common/Link';
import { useVisibilityFilter } from '../hooks/filterHooks';

export default function FilterLink({
  filter,
  children,
}: {
  filter: VisibilityFilters;
  children: React.ReactNode;
}): JSX.Element {
  const dispatch = useDispatch();
  const visibilityFilter = useVisibilityFilter();

  return (
    <Link
      active={filter === visibilityFilter}
      onClick={() => dispatch(setVisibilityFilter(filter))}
    >
      {children}
    </Link>
  );
}
