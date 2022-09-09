import React from 'react';
import { Link } from 'react-router-dom';

export default function OwnerApartCard({ myAp }) {
  return (
    <div className="col-4">
      <div className="card">
        <img src={myAp.image} className="card-img-top" alt="my apartment" />
        <div className="card-body">
          <h5 className="card-title">{myAp.address}</h5>
          <p className="card-text">{myAp.description}</p>
          <Link to="/myapartments/update/:id" className="btn btn-danger">Редактировать</Link>
          {/* <Link to={`/myapartments/${myAp.id}`} className="btn btn-danger">Удалить</Link> */}
        </div>
      </div>
    </div>
  );
}
