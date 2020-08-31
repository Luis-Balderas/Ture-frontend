import React from 'react';
import '../assets/styles/components/CardDescription.scss';

const CardDescription = ({ data }) => {
  return (
    <section className='description'>
      <div className='description__head'>
        <div className='description__head--title_event'>
          <h5>Evento:</h5>
          <span>{data.name}</span>
        </div>
        <div className='description__head--date'>
          <h5>Fecha:</h5>
          <span>
            {data.startDate} - {data.endDate}
          </span>
        </div>
      </div>
      <div className='description__location'>
        <figure>
          <img src='https://icons-for-free.com/iconfiles/png/512/location-131965017472890605.png' alt='icon location' />
        </figure>
        <p className='location'>{data.location}</p>
      </div>
      <div className='description__detail'>
        <div className='description__detail--title'>
          <h5>Descripción</h5>
        </div>
        <div className='description__detail--txt'>
          <p>{data.description}</p>
        </div>
      </div>
    </section>
  );
};

export default CardDescription;
