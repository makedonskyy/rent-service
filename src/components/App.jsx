import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddAppartment from './AddAppartment';
import Footer from './Footer';
import Header from './Header';
import Login from './login/Login';
import LoginMain from './login/LoginMain';
import OwnerLogin from './login/OwnerLogin';
import OwnerSignUp from './login/OwnerSignUp';
import SignUp from './login/SignUp';
import SignUpMain from './login/SignUpMain';
// import Main from './pages/Main';
import Categories from './pages/Categories';
import AllAppartments from './pages/allAppartments';
import OneAppartment from './pages/oneAppartment';
import AllHouses from './pages/AllHouses';
import OneHouse from './pages/OneHouse';
import AllRooms from './pages/AllRooms';
import OneRoom from './pages/OneRoom';

export default function App({
  allAppartments, oneAppartment, allHouses, oneHouse, allRooms, oneRoom,
}) {
  const [authState, setAuthState] = useState('');
  return (
    <div>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/" element={<AddAppartment />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/appartments" element={<AllAppartments appartments={allAppartments} />} />
        <Route path="/categories/appartments/:appId" element={<OneAppartment oneAppartment={oneAppartment} />} />
        <Route path="/categories/houses" element={<AllHouses houses={allHouses} />} />
        <Route path="/categories/houses/:appId" element={<OneHouse oneHouse={oneHouse} />} />
        <Route path="/categories/rooms" element={<AllRooms rooms={allRooms} />} />
        <Route path="/categories/rooms/:appId" element={<OneRoom oneRoom={oneRoom} />} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/login/user" element={<Login />} />
        <Route path="/login/owner" element={<OwnerLogin />} />
        <Route path="/signup" element={<SignUpMain />} />
        <Route path="/signup/owner" element={<OwnerSignUp />} />
        <Route path="/signup/user" element={<SignUp />} />

      </Routes>
      <Footer />
    </div>

  );
}
