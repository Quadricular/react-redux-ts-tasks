/* eslint-disable jsx-a11y/no-onchange */
import React, { useEffect, useRef, useState } from 'react';
import Transition from './common/Transition';
import { useDispatch } from 'react-redux';
import { SortingFiltersList, SortingFilters } from '../store/constants';
import { setSortingFilter } from '../store/actions';

const FilterDropdown = (): JSX.Element => {
  const dispatch = useDispatch();

  const options = [
    {
      id: 0,
      period: 'Deadline (Ascending)',
    },
    {
      id: 1,
      period: 'Deadline (Descending)',
    },
    {
      id: 2,
      period: 'Created (Ascending)',
    },
    {
      id: 3,
      period: 'Created (Descending)',
    },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(2);

  const trigger: any = useRef(null);
  const dropdown: any = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
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
    const keyHandler = ({ keyCode }: any) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    // <div style={{ marginLeft: 20 }}>
    //   <span>sort by </span>
    //   <select
    //     onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
    //       dispatch(setSortingFilter(e.target.value as SortingFilters))
    //     }
    //     className="browser-default custom-select"
    //   >
    //     {SortingFiltersList.map((sortBy, key) => (
    //       <option key={key} value={sortBy.type} defaultValue={sortBy.type}>
    //         {sortBy.label}
    //       </option>
    //     ))}
    //   </select>
    // </div>
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
          <span>{options[selected].period}</span>
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
      <Transition
        show={dropdownOpen}
        tag="div"
        className="z-10 absolute top-full left-0 w-full bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        enter="transition ease-out duration-100 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          className="font-medium text-sm text-gray-600"
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <p className="ml-8">SORT BY</p>
          {options.map((option) => {
            return (
              <button
                key={option.id}
                tabIndex={0}
                className={`flex items-center w-full hover:bg-gray-50 hover:text-yellow-500 py-1 px-3 cursor-pointer ${
                  option.id === selected && 'text-black  font-medium '
                }`}
                onClick={() => {
                  setSelected(option.id);
                  setDropdownOpen(false);
                }}
              >
                {/* <FontAwesomeIcon
                  className={`w-8 h-5 flex-shrink-0 mr-2 fill-current hover:text-indigo-500 ${
                    option.id !== selected && "invisible"
                  }`}
                  icon={faCheck}
                /> */}

                <span>{option.period}</span>
              </button>
            );
          })}
        </div>
      </Transition>
    </div>
  );
};

export default FilterDropdown;
