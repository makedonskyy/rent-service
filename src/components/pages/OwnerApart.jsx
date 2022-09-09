import React from 'react';
import OwnerApartCard from '../userInterface/OwnerApartCard';

export default function OwnerApart({myApart}) {
  return (
    <div>
      {
            myApart && myApart?.map((el) => <OwnerApartCard myAp={el} key={el.id} />)
        }
    </div>
  );
}
