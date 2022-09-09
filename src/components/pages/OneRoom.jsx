import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function OneApp({ oneRoom }) {
  const [room, setRooom] = useState(oneRoom || null);
  const { appId } = useParams();
  useEffect(() => {
    fetch(`/api/v1/categories/rooms/${appId}`) //
      .then((res) => res.json())
      .then((data) => setRooom(data));
  }, []);
  return (
    <div>
      {room && (
      <>
        <div className="row">
          <div className="col-2">
            <h2>{room?.cathegoryId}</h2>
          </div>
          <div className="col-4">
            <img src={room?.image} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="row">
          <h2>{room?.price}</h2>
        </div>
        <div className="row">
          <h2>{room?.address}</h2>
        </div>
        <div className="row">
          <h2>{room?.description}</h2>
        </div>
      </>
      )}
    </div>
  );
}
