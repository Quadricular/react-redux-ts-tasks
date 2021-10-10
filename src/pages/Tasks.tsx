import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTasksAction } from '../store/actions/tasksActions';
import { RootState } from '../store/reducers';

export default function Tasks() {
  const dispatch = useDispatch();
  const { pending, tasks, error } = useSelector((state: RootState) => state.tasks);

  React.useEffect(() => {
    dispatch(loadTasksAction());
  }, []);

  return (
    <div>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        tasks?.map((task: any, index: any) => (
          <div key={task.id}>
            {++index}. {task.name}
          </div>
        ))
      )}
    </div>
  );
}
