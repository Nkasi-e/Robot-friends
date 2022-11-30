import React from 'react';

//CSS in JS with the style attribute
//Children
const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '1px solid black',
        height: '800px',
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
