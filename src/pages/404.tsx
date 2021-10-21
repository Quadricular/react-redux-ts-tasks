import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = (): JSX.Element => {
  return (
    <main className="h-screen overflow-y-scroll no-scrollbar">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-2xl mx-auto ">
        {/* Page header */}
        <div className="flex justify-between sm:items-center mb-8">
          {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1>Oops! wrong way...</h1>
            <br />
            <p>404 - Page Not Found</p>
            <br />
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
