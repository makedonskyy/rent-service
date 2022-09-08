import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from './pages/Categories';
import Footer from './Footer';
import SignUp from './login/SignUp';
import Main from './pages/Main';
import AllAppartments from './pages/AllAppartments';
import OneAppartment from './pages/OneAppartment';

export default function App({ allAppartment, appartmentId }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/appartments" element={<AllAppartments appartments={allAppartment} />} />
        <Route path="/categories/appartments/:appId" element={<OneAppartment appartment={appartmentId} />} />
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
