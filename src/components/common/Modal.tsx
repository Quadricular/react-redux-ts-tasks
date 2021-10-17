/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../../store/actions';
import { RootState } from '../../store/rootReducer';

import './modal.css';

function Modal({ children }: { children: React.ReactNode }): JSX.Element {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.modal.modal);

  if (!modal) {
    return <></>;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span
          className="modal-close"
          onClick={() => {
            dispatch(hideModal());
          }}
        >
          &#10005; {/* HTML code for a multiplication sign */}
        </span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
