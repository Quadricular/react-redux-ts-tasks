import React from 'react';
import PropTypes from 'prop-types';

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
