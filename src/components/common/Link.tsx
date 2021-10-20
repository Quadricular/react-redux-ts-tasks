import React from 'react';

const Link = ({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}): JSX.Element => (
  <li className="m-1">
    <button
      className={active ? 'tab-active' : 'tab'}
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: '4px',
      }}
    >
      {children}
    </button>
  </li>
);

export default Link;
