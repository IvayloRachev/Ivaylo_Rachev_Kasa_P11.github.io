import React from 'react';
import './css/styles.css';
import './css/normalize.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

function Kasa() {
  return (
    <div className="body-container">
      <Router>
        <main>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default Kasa;
