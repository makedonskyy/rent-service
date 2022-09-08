import React, { useEffect, useState } from 'react';
import AppartmentCard from '../userInterface/AppartmentCard';

export default function AllAppartments({ appartments }) {
  const [appArray, setappArray] = useState(appartments || null);
  // console.log(appArray);
  useEffect(() => {
    if (!appArray) {
      fetch('/categories/appartments')
        .then((res) => res.json())
        .then((data) => setappArray(data));
    }
  }, []);
  return (
    <div className="row">
      {appArray ? appArray.map((el) => <AppartmentCard appartment={el} key={el.id} />) : ' Ничего не найдено'}
    </div>
  );
}
