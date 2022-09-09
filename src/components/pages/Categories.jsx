import React from 'react';
import { Link } from 'react-router-dom';

export default function Categories() {
  return (

    <ul id="nav">
      <li className="cat">
        <Link to="/categories/appartments"><h1 data-name="Квартиры">Квартиры</h1></Link>
      </li>
      <li className="cat">
        <Link to="/categories/houses"><h1 data-name="Дома">Дома</h1></Link>
      </li>
      <li className="cat">
        <Link to="/categories/rooms"><h1 data-name="Комнаты">Комнаты</h1></Link>
      </li>
    </ul>

  );
}
