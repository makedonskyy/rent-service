import React from 'react';
import { Link } from 'react-router-dom';

export default function Categories() {
  return (

    <ul id="nav">
      <li className="nav-link">
        <h1 data-name="Квартиры"><a href="/categories/appartments">Квартиры</a></h1>
      </li>
      <li className="nav-link">
        <h1 data-name="Дома">Дома</h1>
      </li>
      <li className="nav-link">
        <h1 data-name="Комнаты">Комнаты</h1>
      </li>
    </ul>

  );
}
