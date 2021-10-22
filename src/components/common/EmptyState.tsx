import React from 'react';
import techlife from '../../assets/tech-life.svg';

function EmptyState(): JSX.Element {
  return (
    <div className={`z-0  overflow-hidden`}>
      {/* Content area */}

      <div
        className={`relative 
        } flex-col flex-1 overflow-y-auto overflow-x-hidden  mb-20`}
      >
        <main>
          <div className="text-center px-4 my-18">
            <div className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-gradient-to-t from-gray-200 to-gray-100 mb-4">
              <img alt="Tech Life" src={techlife} />
            </div>
            <h2 className="text-2xl text-gray-800 font-bold mb-2">
              There&apos;s no tasks yet
            </h2>
            <div className="mb-6">
              You can fill the following form to create a new task
            </div>
            <button className="btn bg-black hover:bg-yellow-600 text-white">
              <svg
                className="w-4 h-4 fill-current opacity-50 flex-shrink-0"
                viewBox="0 0 16 16"
              >
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span className="ml-2">Add Task</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EmptyState;
