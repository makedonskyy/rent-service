import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Categories from './Categories';

import Footer from './Footer';

import Main from './pages/Main';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer />
    </div>
  );
}
