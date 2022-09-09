import React from 'react';
import { Link } from 'react-router-dom';

export default function AppartmentCard({ appartment }) {
  return (
    <div className="col-4">
      <div className="card">
        <img src={appartment.image} className="card_img" alt="..." />
        <div className="card-body">
          <h5 className="card_title">{appartment.Cathegory.name}</h5>
          <p className="card_text">{`${appartment.price} ₽/месяц`}</p>
          <p className="card_addr">{appartment.address}</p>
          <Link to={`/categories/appartments/${appartment.id}`} className="btn">Подробнее</Link>
        </div>
      </div>
    </div>
  );
}
