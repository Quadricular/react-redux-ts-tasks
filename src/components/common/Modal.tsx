import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { RootState } from '../../store/rootReducer';
import { hideModal } from '../../store/actions';

interface BackdropProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Backdrop = ({ children, onClick }: BackdropProps) => {
  return (
    <motion.div
      className="flex fixed top-0 left-0 justify-center align-center w-full h-full bg-gray-900 bg-opacity-40 z-50 transition-opacity"
      onClick={onClick}
      initial={{ opacity: 0 }} //initial state has opacity:0
      animate={{ opacity: 1 }} //animation state has opacity:1
      exit={{ opacity: 0 }} //exit state has opacity: 0
    >
      {children}
    </motion.div>
  );
};

//for animation
const dropIn = {
  hidden: {
    y: '-50vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 50,
      stiffness: 500,
    },
  },
  exit: {
    y: '50vh',
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Modal = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}): JSX.Element => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); //event will NOT bubble up to ancestor element (like body)
  };
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.modal.modal);

  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (!modal || keyCode !== 27) return;
      dispatch(hideModal());
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <AnimatePresence initial={false} exitBeforeEnter={true}>
      {modal && (
        <Backdrop onClick={() => dispatch(hideModal())}>
          <motion.div
            onClick={handleClick}
            className="fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6 enter-done"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-auto max-w-lg w-full max-h-full">
              {/* Modal header */}
              <div className="px-5 py-3">
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-gray-800">{title && title}</div>
                  <button
                    className="text-gray-400 hover:text-gray-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(hideModal());
                    }}
                  >
                    <div className="sr-only">Close</div>
                    <svg className="w-4 h-4 fill-current">
                      <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                    </svg>
                  </button>
                </div>
              </div>
              {children}
            </div>
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;
