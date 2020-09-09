import React from 'react';
import '../assets/styles/pages/Reservation.scss';
import CardPayment from '../components/CardPayment';
import PayForm from '../components/PayForm';

const Reservation = () => (
  <div className='Reservation'>
    <PayForm />
    <CardPayment />
  </div>
);

export default Reservation;
