import React from 'react';

const Fallback = ({ height, text }: { height?: string; text?: string }): JSX.Element => {
  const wrapper = `w-full h-${
    height ? height : 'screen'
  } z-50  opacity-75 flex flex-col items-center justify-center`;
  return (
    <div className={wrapper}>
      <div className="border-top-color:transparent">
        <div className="w-16 h-16 border-4 border-gray-400 border-dotted rounded-full animate-spin" />
      </div>

      {text && (
        <>
          {' '}
          <h2>Loading...</h2>
          <p className="w-1/3 text-center text-black">{text}</p>
        </>
      )}
    </div>
  );
};

export default Fallback;
