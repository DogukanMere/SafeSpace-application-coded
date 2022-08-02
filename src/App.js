import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Safespace from './components/Safe Space/Safespace';
import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';
import Golive from './components/Safe Space/Golive';
import Watchlive from './components/Safe Space/Watchlive';

function App() {
  return (
    <div className='App'>
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
    </div>
  );
}

export default App;
