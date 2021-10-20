import React from 'react';

const Fallback = ({ height, text }: { height?: string; text?: string }): JSX.Element => {
  const wrapper = `w-full h-${
    height ? height : 'screen'
  } z-50  opacity-75 flex flex-col items-center justify-center`;
  return (
    <div className={wrapper}>
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>

      {text && (
        <>
          {' '}
          <h2 className="text-center text-black text-xl font-semibold">Loading...</h2>
          <p className="w-1/3 text-center text-black">{text}</p>
        </>
      )}
    </div>
  );
};

export default Fallback;
