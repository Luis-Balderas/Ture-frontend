import React from 'react';

import '../assets/styles/pages/Reservation.scss';
import PayDetails from '../components/PayDetails';
import BillDetails from '../components/BillDetails';

const Reservation = () => {
  return (
    <div className="Reservation">
      <PayDetails />
      <BillDetails />
    </div>
  );
};

export default Reservation;