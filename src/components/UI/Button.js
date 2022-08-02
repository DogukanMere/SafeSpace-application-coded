import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <Link to={props.to} className='button-link'>
      {props.name}
    </Link>
  );
};

export default Button;
