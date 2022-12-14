import React from 'react';
import SmallContainer from './SmallContainer';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import Image1 from './cod.png';
import Image2 from './pubg.png';
import Image3 from './bs3.png';
import Image4 from './pokemon.png';

const Home = () => {
  return (
    <div id='home'>
      <div className='title'>
        <h1>Home</h1>
        <Link to='/'>
          <i className='fa-solid fa-arrow-right-from-bracket'></i>Logout
        </Link>
      </div>
      <small className=''>Welcome Sarasadgirl!</small>
      <div className='small-container discussion'>
        <h3>Weekly Games Discussion</h3>
        <p>What have you been playing, and what are your thoughts?</p>
        <button className='button' disabled>
          Learn more
        </button>
      </div>
      <SmallContainer>
        <div className='game'>
          <div className='img'>
            <img src={Image1} alt='Call of Duty' />
          </div>
          <p>Call of Duty</p>
        </div>
        <div className='game'>
          <div className='img'>
            <img src={Image2} alt='PUBG' />
          </div>
          <p>PUBG</p>
        </div>
        <div className='game'>
          <div className='img'>
            <img src={Image3} alt='Brawl Stars 3' />
          </div>
          <p>Brawl Stars 3</p>
        </div>
        <div className='game'>
          <div className='img'>
            <img src={Image4} alt='Pokemon' />
          </div>
          <p>Pokemon</p>
        </div>
      </SmallContainer>
      <SmallContainer>
        <div className='livestream'>
          <h3>Live Streaming - Call of Duty</h3>
          <div>
            <button className='button' disabled>
              Watch now
            </button>
          </div>
        </div>
      </SmallContainer>
      <SmallContainer>
        <div className='safeenv'>
          <h2>Safe Space</h2>
          <p>A place of light when going through dark times</p>
          <div className='safe-button'>
            <Button to='/safespace' name='Go to Safe Space Area' />
          </div>
        </div>
      </SmallContainer>
      <div className='bottom-nav'>
        <Link to='/'>
          <i className='fa-solid fa-house' style={{ color: '#000' }}></i>
        </Link>
        <i className='fa-solid fa-gamepad'></i>
        <Link to='/safespace'>
          <i className='fa-solid fa-video'></i>
        </Link>
        <i className='fa-solid fa-message'></i>
        <i className='fa-solid fa-user'></i>
      </div>
    </div>
  );
};

export default Home;
