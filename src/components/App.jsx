import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Main from './pages/Main';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}
