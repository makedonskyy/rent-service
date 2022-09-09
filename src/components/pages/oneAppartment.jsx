import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function OneApp({ oneAppartment }) {
  const [app, setApp] = useState(oneAppartment || null);
  const { appId } = useParams();
  useEffect(() => {
    fetch(`/api/v1/categories/appartments/${appId}`)
      .then((res) => res.json())
      .then((data) => setApp(data));
  }, []);
  return (
    <div>
      {app && (
      <>
        <div className="row">
          <div className="col-4">
            <img src={app?.image} className="card-img-top" alt="..." />
          </div>
          <div className="w-75 p-4">
            <p className="fs-4">{app?.name}</p>
          </div>
        </div>
        <div className="w-75 p-3">
          <p className="fs-3">{`${app?.price} ₽/месяц`}</p>
        </div>
        <div className="w-75 p-3">
          <p className="fs-3">{app?.address}</p>
        </div>
        <div className="w-75 p-3">
          <p className="fs-3">{app?.description}</p>
        </div>
      </>
      )}
    </div>
  );
}
