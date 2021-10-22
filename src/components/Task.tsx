import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import format from 'date-fns/format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import Tooltip from './common/Tooltip';
import { showModal } from '../store/actions';
import { Task as Task } from '../models/task';

const TaskItem = ({
  data,
  toggleTask,
  deleteTask,
}: {
  data: Task;
  toggleTask: React.MouseEventHandler<HTMLSpanElement>;
  deleteTask: React.MouseEventHandler<HTMLButtonElement>;
}): JSX.Element => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const transition = {
    type: 'spring',
    damping: 25,
    stiffness: 120,
  };
  return (
    <>
      <motion.li key={data._id} layout transition={transition} className="text-sm">
        <div className="flex px-2">
          <div className="flex-grow flex items-center border-b border-gray-100 text-sm py-2">
            <div className="flex-grow flex justify-between">
              <button
                key={data._id}
                className="flex text-left"
                onClick={toggleTask}
                style={{
                  textDecoration: data.completed ? 'line-through' : 'none',
                }}
              >
                <input
                  type="checkbox"
                  className="form-checkbox"
                  defaultChecked={data.completed}
                />
                <div className="max-w-sm">
                  <p
                    className={`font-semibold text-gray-800  ml-3  ${
                      !data.completed ? 'hover:text-yellow-600' : ''
                    } `}
                  >
                    {data.name}
                  </p>
                </div>
              </button>
              <div className="flex self-end">
                <div className="flex flex-shrink-0 -space-x-3 ">
                  {/* Date */}
                  <div className="flex items-center text-black hover:text-red-500">
                    <Tooltip
                      hideMobile={true}
                      icon={
                        <FontAwesomeIcon
                          className="w-4 h-4 flex-shrink-0 fill-current mr-1.5"
                          icon={faCalendar}
                        />
                      }
                    >
                      <div className="text-xs whitespace-nowrap">
                        {data?.deadline && format(new Date(data.deadline), 'dd MMM yyyy')}
                      </div>
                    </Tooltip>

                    <Tooltip
                      icon={
                        <div className="text-sm hidden md:block hover:text-red-600 mr-4">
                          {data?.deadline && format(new Date(data.deadline), 'dd MMM')}
                        </div>
                      }
                    >
                      <div className="text-xs text-gray-500 whitespace-nowrap">
                        Created:{' '}
                        {data?.createdAt &&
                          format(new Date(data.createdAt), 'dd MMM H:mm')}
                        <br />
                        Updated:
                        {data?.updatedAt &&
                          format(new Date(data.updatedAt), 'dd MMM H:mm')}
                      </div>
                    </Tooltip>
                  </div>
                </div>
                <div className="flex flex-wrap items-center">
                  {/* Edit */}
                  <button
                    onClick={() => dispatch(showModal({ add: false, currentTask: data }))}
                  >
                    <FontAwesomeIcon
                      className="w-4 h-4 flex-shrink-0 text-gray-400 hover:text-yellow-500 fill-current"
                      icon={faEdit}
                    />
                  </button>
                </div>
                <div className="mx-1">
                  {/* Start */}

                  <button
                    className="m-1.5"
                    aria-controls="danger-modal"
                    onClick={deleteTask}
                  >
                    <FontAwesomeIcon
                      className="w-4 h-4 flex-shrink-0 text-gray-400 hover:text-red-500 fill-current"
                      icon={faTrashAlt}
                    />
                  </button>
                </div>
                <div className="flex items-center">
                  <button
                    className={`text-gray-400 hover:text-gray-500 divansform ${
                      open && 'rotate-180'
                    }`}
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                    //   aria-condivols={`description-${props.id}`}
                  >
                    <span className="sr-only">Menu</span>
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                      <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z" />
                    </svg>
                    {/*  */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.li>

      <AnimatePresence initial={false}>
        {open && (
          <motion.section
            key="content"
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
              id={`description-${data._id}`}
              className={`${!open && 'hidden'}`}
            >
              <div className="px-2 first:pl-2 last:pr-2 py-3">
                <div className="bg-gray-50 p-2 -mt-3">
                  <div className="text-sm mb-2">
                    <div>{data.description}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default TaskItem;
