import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasksAction } from '../store/actions/tasksActions';
import { RootState } from '../store/reducers';
import Tabs from '../components/Tabs';
import AddTask from '../containers/AddTask';
import TaskList from '../containers/VisibleTaskList';
import Fallback from '../components/common/Fallback';

export default function Tasks(): JSX.Element {
  const dispatch = useDispatch();
  const { pending, error } = useSelector((state: RootState) => state.tasks);

  React.useEffect(() => {
    dispatch(fetchTasksAction());
  }, []);

  return (
    <>
      <AddTask />
      <Tabs />
      <div>
        {pending ? (
          <Fallback />
        ) : error ? (
          <div>Error</div>
        ) : (
          <>
            {/* <VisibleTaskList /> */}
            <TaskList />
          </>
        )}
      </div>
    </>
  );
}
