import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import safe1 from './safe3.png';

const UserStream = () => {
  const [message, setMessage] = useState('');
  return (
    <>
      <div className='safeimg'>
        <img src={safe1} alt='' />
      </div>
      <div id='safeoption'>
        <div className='title'>
          <h1>Live Stream</h1>
        </div>
        <div className='audience'>
          <p>Subject: Getting some fresh air outside</p>
        </div>
        <div className='livemain'>
          <div className='left-top'>
            <i class='fa-solid fa-user'></i>
            <small>230</small>
          </div>
          <div className='right-top'>
            <i class='fa-solid fa-circle'></i>
            <small>03:12</small>
          </div>
          <div className='speech speech3'>
            <p>
              <span>
                Maria:
                <small>Have you taken your dog with you? 😃</small>
              </span>
            </p>
          </div>
          <div className='speech speech2'>
            <p>
              <span>
                Kate:
                <small>Enjoy the beautiful weather !! 🤙</small>
              </span>
            </p>
          </div>
        </div>
        <div className='streamcomment'>
          <i
            class='fa-solid fa-circle-arrow-right'
            onClick={() => setMessage('')}
          ></i>
          <input
            type='text'
            placeholder='Your text...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Link to='/'>
            <small></small>
          </Link>
        </div>
      </div>
      <div className='bottom-nav'>
        <Link to='/'>
          <i className='fa-solid fa-house'></i>
        </Link>
        <i className='fa-solid fa-gamepad'></i>
        <Link to='/safespace'>
          <i className='fa-solid fa-video' style={{ color: '#000' }}></i>
        </Link>
        <i className='fa-solid fa-message'></i>
        <i className='fa-solid fa-user'></i>
      </div>
    </>
  );
};

export default UserStream;
