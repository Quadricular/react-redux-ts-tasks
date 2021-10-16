/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { showModal } from '../store/actions';
import { useDispatch } from 'react-redux';
import { Task as ITask } from '../models/task';
import format from 'date-fns/format';

const Task = ({
  data,
  toggleTask,
  deleteTask,
}: {
  data: ITask;
  toggleTask: React.MouseEventHandler<HTMLSpanElement>;
  deleteTask: React.MouseEventHandler<HTMLButtonElement>;
}): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <>
      <li
        style={{
          textDecoration: data.completed ? 'line-through' : 'none',
        }}
      >
        <span onClick={toggleTask}>{data.name}</span>
        <span onClick={toggleTask}>
          {' '}
          {data?.deadline && format(new Date(data.deadline), 'dd MMM yyyy')}
        </span>
        <button
          onClick={() => dispatch(showModal({ add: false, currentTask: data }))}
          style={{
            marginLeft: 10,
          }}
        >
          edit
        </button>
        <button
          onClick={deleteTask}
          style={{
            marginLeft: 10,
          }}
        >
          delete
        </button>
      </li>
    </>
  );
};

export default Task;
