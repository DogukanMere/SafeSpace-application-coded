import React from 'react';
import { Link } from 'react-router-dom';
import SmallContainer from '../Home/SmallContainer';
import './style.css';
import ListStream from './ListStream';

const StreamList = () => {
  return (
    <>
      <div id='safe'>
        <div className='title'>
          <h1>Safe Space Live Stream</h1>
        </div>
        <div className='stream-users'>
          <h3>Users Livestreaming</h3>
        </div>
        <div className='stream-rooms'>
          <p>Busy Rooms</p>
        </div>
        <div className='stream-online'>
          <small>Watching</small>
        </div>
        <div className='stream-list'>
          <ListStream name='Mike' friend='Your Friend' online='0.2k' />
          <ListStream name='Jason' friend='Your Friend' online='0.3k' />
          <ListStream name='Jessica' friend='Your Friend' online='0.2k' />
          <ListStream name='Kate' online='0.1k' />
          <ListStream name='Mystery' online='0.3k' />
          <ListStream name='John' online='0.3k' />
          <ListStream name='Artem' online='0.4k' />
          <ListStream name='Spaceman' online='0.3k' />
          <ListStream name='Lui' online='0.1k' />
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

export default StreamList;
