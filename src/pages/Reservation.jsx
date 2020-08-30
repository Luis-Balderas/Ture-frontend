import React from 'react';

import '../assets/styles/pages/Reservation.scss';
import PayForm from '../components/PayForm';
import CardPayment from '../components/CardPayment';

const Reservation = () => (
  <div className="Reservation">
    <PayForm/>
    {/* <CardPayment /> */}
  </div>
);

export default Reservation;