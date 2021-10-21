import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function PaginationNumeric(): JSX.Element {
  return (
    <div className="flex justify-between mt-3">
      <div className="text-sm text-gray-500 text-center sm:text-left m-1.5">
        Showing <span className="font-medium text-gray-600">1</span> to{' '}
        <span className="font-medium text-gray-600">10</span> of{' '}
        <span className="font-medium text-gray-600">467</span> results
      </div>
      <div>
        <nav className="flex " role="navigation" aria-label="Navigation">
          <div className="">
            <a className="btn-lite  text-gray-300 cursor-not-allowed" href="#0">
              <FontAwesomeIcon
                className="w-4 h-4 flex-shrink-0 fill-current  m-1"
                icon={faArrowLeft}
              />
              <span className="hidden sm:inline">&nbsp;Previous</span>
            </a>
          </div>
          <div className="text-center">
            <ul className="inline-flex text-sm font-medium -space-x-px">
              <li>
                <a
                  href="#0"
                  className="inline-flex items-center justify-center rounded-full leading-5 px-2 py-2  text-black hover:text-yellow-500 font-bold"
                >
                  <span className="w-5 ">1</span>
                </a>
              </li>
              <li>
                <a
                  className="hidden sm:block  inline-flex items-center justify-center leading-5 px-2 py-2 text-gray-600 hover:text-yellow-500 border border-transparent"
                  href="#0"
                >
                  <span className="w-5">2</span>
                </a>
              </li>
              <li>
                <a
                  className="hidden sm:block inline-flex items-center justify-center leading-5 px-2 py-2 text-gray-600 hover:text-yellow-500 border border-transparent"
                  href="#0"
                >
                  <span className="w-5">3</span>
                </a>
              </li>
              <li>
                <span className="inline-flex items-center justify-center leading-5 px-2 py-2 text-gray-400">
                  …
                </span>
              </li>
              <li>
                <a
                  className="inline-flex items-center justify-center rounded-r leading-5 px-2 py-2 text-gray-600 hover:text-yellow-500 border border-transparent"
                  href="#0"
                >
                  <span className="w-5">9</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="text-right ml-2">
            <a className="btn-lite  text-black hover:text-yellow-500" href="#0">
              <span className="hidden sm:inline">Next&nbsp;</span>{' '}
              <FontAwesomeIcon
                className="w-4 h-4 flex-shrink-0 fill-current m-1"
                icon={faArrowRight}
              />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default PaginationNumeric;
