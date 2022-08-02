import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/safespace'>Safe Space</Link>
          </li>
          <li>
            <Link to='/welcome'>Welcome</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;
