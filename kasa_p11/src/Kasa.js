import React from 'react';
import './sass/style.css';
import './css/normalize.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './pages/Error';
import About from './pages/About';
import Lodgement from './pages/Lodgement';

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
            <Route path="*" element={<Error/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="lodgements/:lodgementId" element={<Lodgement/>}/>
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
