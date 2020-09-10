import React from 'react';
import '../assets/styles/pages/Reservation.scss';
import CardPayment from '../components/CardPayment';
import PayForm from '../components/PayForm';

const Reservation = (props) => (
  <div className='Reservation'>
    <PayForm props={props} />
    <CardPayment />
  </div>
);

export default Reservation;
