import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Safespace from '../Safe Space/Safespace';
import Navigation from '../Navigation/Navigation';
import Welcome from '../Welcome/Welcome';
import Golive from '../Safe Space/Golive';
import Watchlive from '../Safe Space/Watchlive';

const Routesite = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='/safespace' element={<Safespace />}></Route>
            <Route path='/welcome' element={<Welcome />}></Route>
            <Route path='/golive' element={<Golive />}></Route>
            <Route path='/watchlive' element={<Watchlive />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routesite;
