import React, { useEffect, useState } from 'react';
import AppartmentCard from '../userInterface/AppartmentCard';

export default function AllAppartments({ appartment }) {
  const [houseArray, sethouseArray] = useState(appartment || null);
  useEffect(() => {
    if (!houseArray) {
      fetch('/api/v1/categories/houses')
        .then((res) => res.json())
        .then((data) => sethouseArray(data));
    }
  }, []);
  return (
    <div className="row">
      {houseArray ? houseArray.map((el) => <AppartmentCard appartment={el} key={el.id} />) : ' Ничего не найдено'}
    </div>
  );
}