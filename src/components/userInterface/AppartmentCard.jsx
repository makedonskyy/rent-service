import React from 'react';
import { Link } from 'react-router-dom';

export default function AppartmentCard({ appartment }) {
  return (
    <div className="col-4">
      <div className="card">
        <img src={appartment.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{appartment.name}</h5>
          <p className="card-text">{appartment.price}</p>
          <p className="card-text">{appartment.address}</p>
          {/* <p className="card-text">{appartment.description}</p> */}
          <Link to={`/categories/appartments/${appartment.id}`} className="btn btn-primary">Подробнее</Link>
        </div>
      </div>
    </div>
  );
}
