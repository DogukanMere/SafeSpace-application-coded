import React from 'react';

const Home = () => {
  return (
    <div id='home'>
      <>
        <div className='home'>
          <h1>Home</h1>
          <a href='/'>
            <i class='fa-solid fa-arrow-right-from-bracket'></i>Logout
          </a>
        </div>
        <small className=''>Welcome Sarasadgirl!</small>
        <div className='discussion'></div>
      </>
    </div>
  );
};

export default Home;
