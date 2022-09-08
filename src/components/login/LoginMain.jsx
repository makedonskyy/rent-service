import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginMain() {
  return (
    <div className="container">
      <div className="btn"><Link to="/login/user">Ищу жилье</Link></div>
      <div className="btn"><Link to="/login/owner">Сдаю жилье</Link></div>
    </div>
  );
}
