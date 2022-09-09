import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from './pages/Categories';
import Footer from './Footer';
import SignUp from './login/SignUp';
import Main from './pages/Main';
import AllAppartments from './pages/AllAppartments';
import OneAppartment from './pages/OneAppartment';
import AllHouses from './pages/AllHouses';
import OneHouse from './pages/OneHouse';
import AllRooms from './pages/AllRooms';
import OneRoom from './pages/OneRoom';

export default function App({
  allAppartments, oneAppartment, allHouses, oneHouse, allRooms, oneRoom,
}) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/appartments" element={<AllAppartments appartments={allAppartments} />} />
        <Route path="/categories/appartments/:appId" element={<OneAppartment oneAppartment={oneAppartment} />} />
        <Route path="/categories/houses" element={<AllHouses houses={allHouses} />} />
        <Route path="/categories/houses/:appId" element={<OneHouse oneHouse={oneHouse} />} />
        <Route path="/categories/rooms" element={<AllRooms rooms={allRooms} />} />
        <Route path="/categories/rooms/:appId" element={<OneRoom oneRoom={oneRoom} />} />
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
