import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from './pages/Categories';
import Footer from './Footer';
import SignUp from './login/SignUp';
import Main from './pages/Main';

export default function App({ allAppartment }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/appartments" element={<App appartment={allAppartment} />} />
        <Route path="/login" element={<SignUp />} />
      </Routes>
      <Footer />
      <div>
        {' '}
        <button type="button"><a href="/categories">Press</a></button>
        <button type="button"><a href="/login">Log</a></button>
      </div>
    </div>

  );
}
