/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const Task = ({
  onClick,
  completed,
  name,
}: {
  onClick: React.MouseEventHandler<HTMLLIElement>;
  completed: boolean;
  name: string;
}): JSX.Element => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {name}
  </li>
);

export default Task;
