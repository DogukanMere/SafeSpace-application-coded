import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Safespace from '../SafeSpace/Safespace';
import Navigation from '../Navigation/Navigation';
import Welcome from '../Welcome/Welcome';
import Golive from '../SafeSpace/Golive';

import StreamList from '../SafeSpace/StreamList';
import UserStream from '../SafeSpace/UserSteam';

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
            <Route path='/streamlist' element={<StreamList />}></Route>
            <Route path='/userstream' element={<UserStream />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routesite;
