import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import Task from './Task';
import Fallback from './common/Fallback';
import { Task as ITask } from '../models/task';
import { toggleTaskAction, deleteTaskAction } from '../store/actions';
import EmptyState from '../components/common/EmptyState';

const TaskList = ({
  tasks,
  pending,
  error,
}: {
  tasks: ITask[];
  pending: boolean;
  error: string | null;
}): JSX.Element => {
  const dispatch = useDispatch();

  const tasksList = (t: ITask[]) => {
    return (
      t?.length > 0 &&
      t.map((task: ITask) => {
        return (
          <Task
            key={task._id}
            data={{ ...task }}
            toggleTask={() =>
              dispatch(
                toggleTaskAction({
                  id: task._id,
                  completed: task.completed,
                }),
              )
            }
            deleteTask={() => dispatch(deleteTaskAction({ id: task._id }))}
          />
        );
      })
    );
  };

  const motionComponent = (children: JSX.Element, id: string) => {
    return (
      <motion.section
        key={id}
        initial="collapsed"
        animate="open"
        exit="collapsed"
        variants={{
          open: { opacity: 1, height: 'auto' },
          collapsed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
      >
        <motion.div
          variants={{ collapsed: { y: '-1vh' }, open: { y: '0vh' } }}
          transition={{ duration: 0.8 }}
          id={`empty-state`}
          className={`${!open && 'hidden'}`}
        >
          {children}
        </motion.div>
      </motion.section>
    );
  };

  return (
    <>
      <div className="col-span-full xl:col-span-6 bg-white  rounded-lg">
        <div className={`p-3 pb-0 ${pending ? 'h-96' : ''}`}>
          <>
            <AnimatePresence initial={true}>
              {pending && tasks.length < 1 ? (
                <div>
                  <Fallback
                    height="96"
                    text="Loading Tasks, please don't close this page."
                  />
                </div>
              ) : (
                <>
                  {motionComponent(
                    <div>
                      <header className="flex text-gray-400  rounded-md font-semibold p-2 z-1">
                        <div className="flex-grow font-semibold text-gray-800 truncate">
                          {/* <h2 className="text-left">Today</h2> */}
                        </div>

                        <p className="text-sm font-normal">2021</p>
                      </header>

                      <ul className="w-full">{tasksList(tasks)}</ul>
                    </div>,
                    'tasks',
                  )}

                  {!pending &&
                    tasks.length === 0 &&
                    motionComponent(<EmptyState />, 'empty')}
                  {error && (
                    <>
                      <div className="h-40 items-center my-20">
                        <h1 className="text-center ">
                          Oh no! An error has been produced
                        </h1>
                        <h3 className="text-center">
                          Please verify your connection and try again later
                        </h3>
                      </div>
                    </>
                  )}
                </>
              )}
            </AnimatePresence>
          </>
        </div>
      </div>
      {/* <PaginationNumeric /> */}
    </>
  );
};

export default TaskList;
