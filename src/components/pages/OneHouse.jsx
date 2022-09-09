import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function OneApp({ oneHouse }) {
  const [house, setHouse] = useState(oneHouse || null);
  // console.log(appartmentId);
  const { appId } = useParams();
  useEffect(() => {
    fetch(`/api/v1/categories/houses/${appId}`) //
      .then((res) => res.json())
      .then((data) => setHouse(data));
  }, []);
  return (
    <div>
      {house && (
      <>
        <div className="row">
          <div className="col-2">
            <h2>{house?.cathegoryId}</h2>
          </div>
          <div className="col-4">
            <img src={house?.image} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="row">
          <h2>{house?.price}</h2>
        </div>
        <div className="row">
          <h2>{house?.address}</h2>
        </div>
        <div className="row">
          <h2>{house?.description}</h2>
        </div>
      </>
      )}
    </div>
  );
}
