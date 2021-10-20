/* eslint-disable jsx-a11y/no-onchange */
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { SortingFiltersList, SortingFilters } from '../store/constants';
import { setSortingFilter } from '../store/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const FilterDropdown = (): JSX.Element => {
  const dispatch = useDispatch();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const trigger: React.MutableRefObject<any> = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dropdown: React.MutableRefObject<any> = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const variants = {
    initial: {
      height: 20,
      opacity: 0.8,
    },
    enter: {
      opacity: 1,
      height: 150,
      transition: {
        type: 'spring',
        stiffness: 5000,
        damping: 80,
        mass: 0.55,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <div className="relative inline-flex h-12 mx-4">
      <button
        ref={trigger}
        className="btn justify-between  bg-white border-gray-200 hover:border-gray-300 text-gray-500 hover:text-gray-600"
        aria-label="Select date range"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="flex items-center w-20 ml-4 sm:ml-0 sm:w-44">
          <span>{SortingFiltersList[selected].label}</span>
        </span>
        <svg
          className="flex-shrink-0 ml-1 fill-current text-gray-400"
          width="11"
          height="7"
          viewBox="0 0 11 7"
        >
          <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
        </svg>
      </button>
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            key="child"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={variants}
            className="z-10 absolute top-full left-0 w-full bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
          >
            <div
              ref={dropdown}
              className="font-medium text-sm text-gray-600"
              onFocus={() => setDropdownOpen(true)}
              onBlur={() => setDropdownOpen(false)}
            >
              <p className="ml-8">SORT BY</p>
              {SortingFiltersList.map((option, index) => {
                return (
                  <button
                    key={option.type}
                    tabIndex={0}
                    className={`flex items-center w-full hover:bg-gray-50 hover:text-yellow-500 py-1 px-3 cursor-pointer ${
                      index === selected && 'text-black  font-medium '
                    }`}
                    onClick={() => {
                      setSelected(index);
                      setDropdownOpen(false);

                      dispatch(
                        setSortingFilter(
                          SortingFiltersList[index].type as SortingFilters,
                        ),
                      );
                    }}
                  >
                    <FontAwesomeIcon
                      className={`w-8 h-5 flex-shrink-0 mr-2 fill-current hover:text-yellow-500 ${
                        index !== selected && 'invisible'
                      }`}
                      icon={faCheck}
                    />

                    <span>{option.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterDropdown;
