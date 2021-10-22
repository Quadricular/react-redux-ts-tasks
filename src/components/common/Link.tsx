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
  <button
    className={active ? 'tab-active m-1' : 'tab m-1'}
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px',
    }}
  >
    {children}
  </button>
);

export default Link;
