import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUpMain() {
  return (
    <div className="container">
      <div className="btn"><Link to="/signup/user">Я арендатор</Link></div>
      <div className="btn"><Link to="/signup/owner">Я арендодатель</Link></div>
    </div>
  );
}
