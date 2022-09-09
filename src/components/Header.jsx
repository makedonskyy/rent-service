import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header({ authState, setAuthState }) {
  const navigate = useNavigate();

  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/v1/logout');
    if (response.ok) {
      setAuthState(null);
      navigate('/');
    }
  };

  let favorites;
  if (authState) {
    if (authState.ownerOrUser === 'user') {
      favorites = (<a className="c-white nav-item nav-link" href="/favorites">Избранное</a>);
    } else if (authState.ownerOrUser === 'owner') {
      favorites = (<a className="c-white nav-item nav-link" href="/myHouses">Мои объявления</a>);
    } else favorites = (<></>);
  } else {
    favorites = (<></>);
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbarBlack"
      style={{
        position: 'fixed',
        top: 0,
        width: '100vw !important',
        height: '85px',
        fontSize: '20px',
      }}
    >
      <a className="navbar-brand" href="/">Rent Service</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="c-white nav-item nav-link" href="/cathegories">Категории</a>
          {favorites}
        </div>
        <div className="login">
          <ul className="no-bullets no-margin no-padding right">
            {authState ? (
              <>
                <li className="pipe-separate c-white left">
                  Привет,
                  {' '}
                  {authState.email}
                </li>
                <li className="pipe-separate c-white left">
                  <Link to="/logout" onClick={logoutHandler} className="nav-link">Выйти</Link>
                </li>
              </>
            )
              : (
                <div className="strong">
                  <li className="pipe-separate c-white left"><button type="button" style={{ marginRight: '5px' }} className="button-34"><Link to="/signup">Регистрация</Link></button></li>
                  <li className="pipe-separate c-white left"><button type="button" className="button-34"><Link to="/login">Вход</Link></button></li>
                </div>
              )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
