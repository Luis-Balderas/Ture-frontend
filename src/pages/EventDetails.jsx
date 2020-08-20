import React from 'react';
import '../assets/styles/pages/EventDetails.scss';
import CardDescription from '../components/CardDescription';
import CardPayment from '../components/CardPayment';
import Carousel from '../components/Carousel';

const EventDetails = () => {
  return (
    <section className='event_details'>
      <div className='event_details__carousel'>
        <Carousel />
      </div>
      <div className='event_details__content'>
        <div className='event_details__container'>
          <div className='event_details__container--description'>
            <CardDescription />
          </div>
          <div className='event_details__container--payment'>
            <CardPayment />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
