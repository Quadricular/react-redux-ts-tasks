import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showModal, fetchTasksAction } from '../store/actions';
import { RootState } from '../store/reducers';
import Tabs from '../components/Tabs';
import AddTask from '../components/AddTask';
import EditTask from '../components/EditTask';
import Fallback from '../components/common/Fallback';
import Modal from '../components/common/Modal';
import TaskList from '../components/TaskList';

export default function Tasks(): JSX.Element {
  const dispatch = useDispatch();
  const { pending, error } = useSelector((state: RootState) => state.tasks);

  const { add } = useSelector((state: RootState) => state.modal);

  React.useEffect(() => {
    dispatch(fetchTasksAction());
  }, []);

  return (
    <>
      <Tabs />
      <div>
        {pending ? (
          <Fallback />
        ) : error ? (
          <div>Error</div>
        ) : (
          <>
            {add ? (
              <Modal>
                <AddTask />
              </Modal>
            ) : (
              <Modal>
                <EditTask />
              </Modal>
            )}
            <button type="button" onClick={() => dispatch(showModal({ add: true }))}>
              Add Task
            </button>

            <TaskList />
          </>
        )}
      </div>
    </>
  );
}
