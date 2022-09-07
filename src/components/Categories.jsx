import React from 'react';

export default function Categories() {
  return (
    <div>
      {' '}
      <ul id="nav">
        <li className="nav-link">
          <h1 data-name="Квартиры">Квартиры</h1>
        </li>
        <li className="nav-link">
          <h1 data-namename="Дома">Дома</h1>
        </li>
        <li className="nav-link">
          <h1 data-name="Комнаты">Комнаты</h1>
        </li>
      </ul>
    </div>

  );
}
