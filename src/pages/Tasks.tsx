import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showModal, fetchTasksAction } from '../store/actions';
import { RootState } from '../store/reducers';
import Tabs from '../components/Tabs';
import AddTask from '../containers/AddTask';
import TaskList from '../containers/VisibleTaskList';
import Fallback from '../components/common/Fallback';
import Modal from '../components/common/Modal';

export default function Tasks(): JSX.Element {
  const dispatch = useDispatch();
  const { pending, error } = useSelector((state: RootState) => state.tasks);

  React.useEffect(() => {
    dispatch(fetchTasksAction());
  }, []);

  const openModal = () => {
    dispatch(showModal());
  };

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
            {/* <VisibleTaskList /> */}

            <Modal>
              <AddTask />
            </Modal>
            <button type="button" onClick={openModal}>
              Add Task
            </button>

            <TaskList />
          </>
        )}
      </div>
    </>
  );
}
