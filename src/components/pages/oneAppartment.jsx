import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function OneApp({ appartmentId }) {
  // const [app, setApp] = useState(appartmentId || null);
  // console.log(appartmentId);
  // const { appId } = useParams();
  // useEffect(() => {
  //   fetch(`/categories/appartments/${appId}`)
  //     .then((res) => res.json())
  //     .then((data) => setApp(data));
  // }, []);
  return (
    <div>
      {appartmentId && (
      <>
        <div className="row">
          <div className="col-2">
            <h2>{appartmentId?.cathegoryId}</h2>
          </div>
          <div className="col-4">
            <img src={app?.image} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="row">
          <h2>{app?.price}</h2>
        </div>
        <div className="row">
          <h2>{app?.address}</h2>
        </div>
        <div className="row">
          <h2>{app?.description}</h2>
        </div>
      </>
      )}
    </div>
  );
}
