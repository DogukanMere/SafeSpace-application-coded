import React from 'react';

const LiveSession = (props) => {
  return (
    <>
      <div className='subject'>
        <p>Your subject: {props.data.subject}</p>
      </div>
      <div className='audience'>
        <p>Audience Limit: {props.data.audience}</p>
      </div>
      <div className='livemain'>
        <div className='left-top'>
          <i class='fa-solid fa-user'></i>
          <small>89</small>
        </div>
        <div className='right-top'>
          <i class='fa-solid fa-circle'></i>
          <small>00:15</small>
        </div>
        <div className='speech'>
          <p>
            <span>
              Anonymous:{' '}
              <small>
                I can feel what you just said. I am having the same issue
                recently! 🙁
              </small>
            </span>
          </p>
        </div>
        <div className='speech'>
          <p>
            <span>
              Maria:
              <small>
                What don’t you try to plan your whole work in order of
                priorities? I believe it’ll work
              </small>
            </span>
          </p>
        </div>
      </div>
      <div className='stoplive'>
        <a href='/'>Stop Streaming</a>
      </div>
    </>
  );
};

export default LiveSession;
