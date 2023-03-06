import React from 'react';
import './css/styles.css';
import './css/normalize.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function Kasa() {
  return (
    <div className="body-container">
      <Router>
        <nav>
          <Header />
        </nav>
        <main>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default Kasa;
