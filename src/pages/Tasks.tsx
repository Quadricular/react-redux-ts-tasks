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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Tasks(): JSX.Element {
  const dispatch = useDispatch();
  const { pending, error } = useSelector((state: RootState) => state.tasks);

  const { add } = useSelector((state: RootState) => state.modal);

  React.useEffect(() => {
    dispatch(fetchTasksAction());
  }, [dispatch]);

  return (
    <main className="h-screen overflow-y-scroll no-scrollbar">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-2xl mx-auto ">
        {/* Page header */}
        <div className="flex justify-between sm:items-center mb-8">
          {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1>Tasks</h1>
          </div>

          <div className="flex justify-between">
            <FilterDropdown />
            <button
              className="btn bg-black hover:bg-yellow-400 text-white hover:text-black h-12"
              type="button"
              onClick={() => dispatch(showModal({ add: true }))}
            >
              <FontAwesomeIcon
                className="w-4 h-4 fill-current opacity-50 flex-shrink-0"
                icon={faPlus}
              />
              <span className="ml-2">Add Task</span>
            </button>

            {/* Right: Actions */}
            <div>
              {/* Add board button */}

              {add ? (
                <Modal title="Add Task">
                  <AddTask />
                </Modal>
              ) : (
                <Modal title="Edit Task">
                  <EditTask />
                </Modal>
              )}
            </div>
          </div>
        </div>

        {/* Filters */}

        <div className="flex justify-between">
          <Tabs />
          {/* <FilterAmount /> */}
        </div>
        {pending ? (
          <Fallback height="96" text="Loading Tasks, please don't close this page." />
        ) : error ? (
          <div>Error</div>
        ) : (
          <TaskList />
        )}
      </div>
    </main>
  );
}
