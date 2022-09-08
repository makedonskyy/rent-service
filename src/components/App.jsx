import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddAppartment from './AddAppartment';
import Categories from './Categories';
import Footer from './Footer';
import Header from './Header';
import Login from './login/Login';
import LoginMain from './login/LoginMain';
import OwnerLogin from './login/OwnerLogin';
import OwnerSignUp from './login/OwnerSignUp';
import SignUp from './login/SignUp';
import SignUpMain from './login/SignUpMain';
import Main from './pages/Main';

export default function App() {
  const [authState, setAuthState] = useState('');
  return (
    <div>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/" element={<AddAppartment />} />
        <Route path="/categories" element={<Categories />} />
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
