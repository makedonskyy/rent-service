import React, { useEffect, useState } from 'react';
import AppartmentCard from '../userInterface/AppartmentCard';

export default function AllAppartments({ appartment }) {
  const [roomArray, setroomArray] = useState(appartment || null);
  useEffect(() => {
    if (!roomArray) {
      fetch('/api/v1/categories/houses')
        .then((res) => res.json())
        .then((data) => setroomArray(data));
    }
  }, []);
  return (
    <div className="row">
      {roomArray ? roomArray.map((el) => <AppartmentCard appartment={el} key={el.id} />) : ' Ничего не найдено'}
    </div>
  );
}