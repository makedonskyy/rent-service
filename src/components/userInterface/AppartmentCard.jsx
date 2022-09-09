import React from 'react';
import { Link } from 'react-router-dom';

export default function AppartmentCard({ appartment }) {
  return (
    <div className="col-4">
      <div className="card">
        <img src={appartment.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="fw-bold">{appartment.name}</h5>
          <p className="fw-normal">{`${appartment.price} ₽/месяц`}</p>
          <p className="fst-italic">{appartment.address}</p>
          <Link to={`/categories/appartments/${appartment.id}`} className="btn btn-outline-info">Подробнее</Link>
        </div>
      </div>
    </div>
  );
}
