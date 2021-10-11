import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { VisibilityFilters } from '../store/constants';
import TaskList from '../components/TaskList';
import { toggleTask } from '../store/actions/tasksActions';
import { Task } from '../models/task';

const getVisibleTasks = (tasks: { tasks: Task[] }, filter: VisibilityFilters) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return tasks.tasks;
    case VisibilityFilters.SHOW_COMPLETED: {
      const filtered = tasks.tasks.filter((t: Task) => t.completed);
      console.log(filtered);
      return filtered;
    }

    case VisibilityFilters.SHOW_ACTIVE:
      return tasks.tasks.filter((t: Task) => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

export default function Tasks(): JSX.Element {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) =>
    getVisibleTasks(state.tasks, state.visibilityFilter),
  );

  return (
    <>
      <TaskList tasks={tasks} toggleTask={(id: string) => dispatch(toggleTask(id))} />
    </>
  );
}
