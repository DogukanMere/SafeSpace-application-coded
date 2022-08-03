import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ListStream = (props) => {
  return (
    <div className='each-stream'>
      <i class='fa-solid fa-user'></i>
      <p>
        {props.name} <small>{props.friend ? props.friend : ''}</small>
      </p>
      <div className='list-online'>
        <i class='fa-solid fa-user'></i>
        <small>{props.online}</small>
      </div>
      <div className='livelink'>
        <Link to='/userstream'>
          <small>Join</small>
        </Link>
      </div>
    </div>
  );
};

export default ListStream;
