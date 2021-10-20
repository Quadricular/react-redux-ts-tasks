import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showModal, fetchTasksAction } from '../store/actions';
import { RootState } from '../store/rootReducer';
import Tabs from '../components/Tabs';
import AddTask from '../components/AddTask';
import EditTask from '../components/EditTask';
import Fallback from '../components/common/Fallback';
import Modal from '../components/common/Modal';
import TaskList from '../components/TaskList';
import FilterDropdown from '../components/FilterDropdown';

export default function Tasks(): JSX.Element {
  const title = 'Tasks';
  const dispatch = useDispatch();
  const { pending, error } = useSelector((state: RootState) => state.tasks);

  const { add } = useSelector((state: RootState) => state.modal);

  React.useEffect(() => {
    dispatch(fetchTasksAction());
  }, [dispatch]);

  return (
    <div>
      <div className="flex">
        <h1 style={{ fontSize: 20, fontWeight: 800, margin: '0px 10px 0px  10px' }}>
          {title}
        </h1>
        <Tabs />
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

            <button
              style={{ marginLeft: 20 }}
              type="button"
              onClick={() => dispatch(showModal({ add: true }))}
            >
              Add Task
            </button>
            <FilterDropdown />
          </>
        )}
      </div>
      <TaskList />
    </div>
  );
}
