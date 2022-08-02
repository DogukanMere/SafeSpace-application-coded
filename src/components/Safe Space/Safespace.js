import React from 'react';
import safe1 from './safemain.png';

const Safespace = () => {
  return (
    <div id='safe'>
      <div className='safeimg'>
        <img src={safe1} alt='' />
      </div>
      <div className='title'>
        <h1>Safe Space Live Stream</h1>
      </div>
    </div>
  );
};

export default Safespace;
