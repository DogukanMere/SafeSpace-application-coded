import React from 'react';
import safe1 from './safemain.png';
import { Link } from 'react-router-dom';
import SmallContainer from '../Home/SmallContainer';

const Safespace = () => {
  return (
    <>
      <div className='safeimg'>
        <img src={safe1} alt='' />
      </div>
      <div id='safe'>
        <div className='title'>
          <h1>Safe Space Live Stream</h1>
        </div>
        <SmallContainer>
          <div className='safeintro'>
            <h2>Welcome to the Safe Space live stream!</h2>
            <h3>Please be kind!</h3>
            <p className='firstp'>
              This live broadcast can include discussions about sadness and
              depressing thoughts.
            </p>
            <p>
              Any inappropriate behaviour will result in the account being
              suspended.
            </p>
          </div>
        </SmallContainer>
        <SmallContainer>
          <div className='safesection'>
            <p>
              You have the option to stream live yourself or to watch someone
              else's.
            </p>
            <div className='sections'>
              <div className='section first-sec'>
                <Link to='/golive'>
                  <b>Go Live</b>
                  <small>
                    This is a safe space for you to share your thoughts
                  </small>
                </Link>
              </div>
              <div className='section second-sec'>
                <Link to='/watchlive'>
                  <b>Watch Live Streams</b>
                  <small>
                    This is a place where you may support others and listen
                  </small>
                </Link>
              </div>
            </div>
          </div>
        </SmallContainer>
      </div>
      <div className='bottom-nav'>
        <Link to='/'>
          <i class='fa-solid fa-house'></i>
        </Link>
        <i class='fa-solid fa-gamepad'></i>
        <Link to='/safespace'>
          <i class='fa-solid fa-video' style={{ color: '#000' }}></i>
        </Link>
        <i class='fa-solid fa-message'></i>
        <i class='fa-solid fa-user'></i>
      </div>
    </>
  );
};

export default Safespace;
