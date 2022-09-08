import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from './Categories';
import Footer from './Footer';
import Main from './pages/Main';

export default function App({ allAppartment }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/appartments" element={<App appartment={allAppartment} />} />
      </Routes>
      <Footer />
      <div>
        {' '}
        <button type="button"><a href="/categories">Press</a></button>
      </div>
    </div>

  );
}
