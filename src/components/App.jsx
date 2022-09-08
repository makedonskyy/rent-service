import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from './Categories';
import Footer from './Footer';
import Header from './Header';
import Main from './pages/Main';

export default function App({ userSession }) {
  const [authState, setAuthState] = useState(userSession || null);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer />
      <div>
        {' '}
        <button type="button"><a href="/categories">Press</a></button>
      </div>
    </div>

  );
}
