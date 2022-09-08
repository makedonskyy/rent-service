import React, { useEffect, useState } from 'react';
// import StudentCard from '../ui/StudentCard';

export default function AllAppartments({ appartment }) {
  const [appArray, setappArray] = useState(appartment || null);
  useEffect(() => {
    if (!appArray) {
      fetch('/categories/appartments')
        .then((res) => res.json())
        .then((data) => setappArray(data));
    }
  }, []);
  return (
    <div className="row">
      {appArray ? appArray.map((el) => <StudentCard appartment={el} key={el.id} />) : 'Пока ничего не добавлено'}
    </div>
  );
}