import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import LiveSession from './LiveSession';
import SmallContainer from '../Home/SmallContainer';
import safe1 from './safesetup.png';
import safe2 from './mylive.png';
import './style.css';

const Golive = () => {
  const [firstStep, setFirstStep] = useState(true);
  const [audience, setAudience] = useState('No Limit (default)');
  const [subject, setSubject] = useState('');
  const [data, setData] = useState({ audience: audience, subject: subject });
  // const data = { audience: audience, subject: subject };

  const hidesection = () => {
    setFirstStep(false);
    setData({ audience: audience, subject: subject });
  };

  const submitForm = (e) => {
    e.preventdefault();
  };

  return (
    <>
      <div className='safeimg'>
        <img src={firstStep ? safe1 : safe2} alt='' />
      </div>
      <div id='safeoption'>
        <div className='title'>
          <h1>{firstStep ? 'Safe Space Live Stream' : 'You are live!'}</h1>
        </div>
        <div id='firststep'>
          {firstStep ? (
            <div className='hiddencontent'>
              <SmallContainer>
                <div className='form'>
                  <div className='formtitle'>
                    <h3>GO LIVE</h3>
                    <p>This is a safe space for you to share your thoughts</p>
                  </div>
                  <p>Before you go, please select your preferences</p>
                  <form onSubmit={() => submitForm()} action='/'>
                    <div className='form-left'>
                      <label htmlFor='limit'>Audience limit:</label>
                      <label htmlFor='subject'>Subject:</label>
                      <label htmlFor='limit'>Live for:</label>
                    </div>
                    <div className='form-right'>
                      <input
                        type='text'
                        placeholder='No Limit (default)'
                        id='limit'
                        value={audience}
                        onChange={(e) => setAudience(e.target.value)}
                      ></input>
                      <input
                        type='text'
                        placeholder='Enter your subject'
                        id='subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      ></input>
                      <select
                        name='livefor'
                        id='livefor'
                        value='livefor'
                        readOnly
                      >
                        <option value='Everyone' readOnly>
                          Everyone
                        </option>
                        <option value='Only friends' readOnly>
                          Only Friends
                        </option>
                      </select>
                    </div>
                  </form>
                </div>
              </SmallContainer>
            </div>
          ) : (
            <div></div>
          )}
          {firstStep ? (
            <button
              type='submit'
              className='button'
              onClick={() => hidesection()}
            >
              Start Live Stream
            </button>
          ) : (
            <LiveSession data={data} />
          )}
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

export default Golive;
