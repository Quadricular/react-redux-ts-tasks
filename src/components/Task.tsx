/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const Task = ({
  name,
  completed,
  toggle,
  deleteT,
}: {
  name: string;
  completed: boolean;
  toggle: React.MouseEventHandler<HTMLLIElement>;
  deleteT: React.MouseEventHandler<HTMLElement>;
}): JSX.Element => {
  return (
    <>
      <li
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        <span onClick={toggle}>{name}</span>
        <button
          style={{
            marginLeft: 10,
          }}
        >
          edit
        </button>
        <button
          onClick={deleteT}
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
