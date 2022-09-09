import React from 'react';
import { Link } from 'react-router-dom';
import OwnerApartCard from '../userInterface/OwnerApartCard';

export default function OwnerApart({ myApart }) {
  return (
    <>
      <div>
        <button type="button" className="btn btn-secondary"><Link to="/apartform">Добавить</Link></button>
      </div>
      <div className="grid text-center">
        {
            myApart && myApart?.map((el) => <OwnerApartCard myAp={el} key={el.id} />)
        }
      </div>
    </>
  );
}
