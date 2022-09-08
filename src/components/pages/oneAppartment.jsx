import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function OneApp({ appartment }) {
  const [app, setApp] = useState(appartment || null);
  const { appId } = useParams();
  useEffect(() => {
    fetch(`/categories/appartments/appartments/${appId}`)
      .then((res) => res.json())
      .then((data) => setApp(data));
  }, []);
  return (
    <div>
      {appartment && (
      <>
        <div className="row">
          <div className="col-2">
            <h2>{appartment?.cathegoryId}</h2>
          </div>
          <div className="col-4">
            <img src={`${appartment?.image}.png`} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="row">
          <h2>{appartment?.price}</h2>
        </div>
        <div className="row">
          <h2>{appartment?.address}</h2>
        </div>
      </>
      )}
    </div>
  );
}
