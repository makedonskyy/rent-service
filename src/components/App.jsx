import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddAppartment from './pages/AddAppartment';
import Categories from './pages/Categories';
import Footer from './userInterface/Footer';
import Header from './userInterface/Header';
import Login from './login/Login';
import LoginMain from './login/LoginMain';
import OwnerLogin from './login/OwnerLogin';
import OwnerSignUp from './login/OwnerSignUp';
import SignUp from './login/SignUp';
import SignUpMain from './login/SignUpMain';
import Main from './pages/Main';
import AllAppartments from './pages/allAppartments';
import OneAppartment from './pages/oneAppartment';
import AllHouses from './pages/AllHouses';
import OneHouse from './pages/OneHouse';
import AllRooms from './pages/AllRooms';
import OneRoom from './pages/OneRoom';
import OwnerApart from './pages/OwnerApart';
import Map from './Map';
import EditCard from './userInterface/EditCard';

export default function App({
  allAppartments, oneAppartment, allHouses, oneHouse,
  allRooms, oneRoom, myApart, userOrOwner, maApart,
}) {
  const [authState, setAuthState] = useState('');
  // console.log(authState);
  // useEffect(() => {
  //   if (!authState) {
  //     fetch('/api/v1/')
  //       .then((res) => res.json())
  //       .then((data) => setStudentsArray(data));
  //   }
  // }, []);
  return (
    <div>
      <Header authState={authState} setAuthState={setAuthState} />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/" element={<Map />} /> */}
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/appartments" element={<AllAppartments appartments={allAppartments} />} />
        <Route path="/categories/appartments/:appId" element={<OneAppartment oneAppartment={oneAppartment} />} />
        <Route path="/categories/houses" element={<AllHouses houses={allHouses} />} />
        <Route path="/categories/houses/:appId" element={<OneHouse oneHouse={oneHouse} />} />
        <Route path="/categories/rooms" element={<AllRooms rooms={allRooms} />} />
        <Route path="/categories/rooms/:appId" element={<OneRoom oneRoom={oneRoom} />} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/login/user" element={<Login authState={authState} setAuthState={setAuthState} />} />
        <Route path="/login/owner" element={<OwnerLogin authState={authState} setAuthState={setAuthState} />} />
        <Route path="/signup" element={<SignUpMain />} />
        <Route path="/signup/owner" element={<OwnerSignUp authState={authState} setAuthState={setAuthState} />} />
        <Route path="/signup/user" element={<SignUp authState={authState} setAuthState={setAuthState} />} />
        <Route path="/apartform" element={<AddAppartment />} />
        <Route path="/myapartments" element={<OwnerApart myApart={myApart} />} />
        <Route path="/myapartments/update/:id" element={<EditCard maApart={maApart} />} />

      </Routes>
      <Footer />
    </div>
  );
}
