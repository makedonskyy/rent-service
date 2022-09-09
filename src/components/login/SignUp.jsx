import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [input, setInput] = useState({
    name: '', email: '', password: '', description: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/v1/signup/user', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(input),
    });
    if (response.ok) {
      navigate('/');
    } else {
      // console.log('not authed');
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
            Описание Вашего профиля для анкеты арендодателю
            <input value={input.description} onChange={inputHandler} name="description" type="text" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <button type="submit" className="button-34">Submit</button>
      </div>
    </form>
  );
}
