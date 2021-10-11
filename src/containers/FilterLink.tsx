import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibilityFilter } from '../store/actions/tasksActions';
import { VisibilityFilters } from '../store/constants';
import Link from '../components/common/Link';
import { RootState } from '../store/reducers';

export default function FilterLink({
  filter,
  children,
}: {
  filter: VisibilityFilters;
  children: React.ReactNode;
}): JSX.Element {
  const dispatch = useDispatch();
  const visibilityFilter = useSelector((state: RootState) => state.visibilityFilter);

  return (
    <Link
      active={filter === visibilityFilter}
      onClick={() => dispatch(setVisibilityFilter(filter))}
    >
      {children}
    </Link>
  );
}
