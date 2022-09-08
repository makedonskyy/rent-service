import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-left"
      style={{
        width: '100vw !important',
      }}
    >
      <div
        className="text-center p-3"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          position: 'fixed',
          bottom: 0,
          width: '100vw',
          height: '100px',
          color: 'white',
        }}
      >
        <p>
          Адрес офиса: Москва, ул. Орджоникидзе, 11 стр. 10
          (м. Ленинский проспект)
        </p>
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Copyright:
        {' '}
        <a className="text-secondary" href="/">
          Rent-service
        </a>
      </div>
    </MDBFooter>
  );
}
