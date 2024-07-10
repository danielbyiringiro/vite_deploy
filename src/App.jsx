import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Scholarship from './components/Scholarship';
import Ashesi from './components/ashesi';
import Legon from './components/legon';
import KNUST from './components/knust'
import Academic from './components/academic';

export default () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/ashesi" element={<Ashesi/>} />
        <Route path="/knust" element={<KNUST/>} />
        <Route path="/legon" element={<Legon/>} />
        <Route path="/academic" element={<Academic/>} />
      </Routes>
    </Router>
  );
}


