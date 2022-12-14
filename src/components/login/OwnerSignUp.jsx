import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OwnerSignUp({ setAuthState }) {
  const [input, setInput] = useState({
    name: '', email: '', password: '', phone: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/v1/signup/owner', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(input),
    });
    if (response.ok) {
      const data = await response.json();
      setAuthState({ ...data, ownerOrUser: 'owner' });
      navigate('/');
    } else {
      setError('Something went wrong');
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div style={{
        position: 'absolute', top: '20%', left: '40%',
      }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Ваше имя
            <input value={input.name} onChange={inputHandler} name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Введите Email
            <input value={input.email} onChange={inputHandler} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Введите пароль
            <input value={input.password} onChange={inputHandler} name="password" type="password" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Телефон
            <input value={input.phone} onChange={inputHandler} name="phone" type="text" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <button type="submit" className="button-34">Регистрация</button>
      </div>
    </form>
  );
}
