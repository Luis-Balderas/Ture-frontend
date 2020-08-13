import React from 'react';
import '../assets/styles/components/CardBasic.scss';

const CardBasic = ({ data }) => {
  const { eventUrlImage, eventTitle, eventLocale, eventDetails } = data;
  return (
    <div className='card'>
      <a className='card__details' href={eventLocale}>
        <img src={eventUrlImage} alt='Imagen de Evento' />
        <h3 className='card__details--title'>{eventTitle}</h3>
        <h4 className='card__details--description'>{eventDetails}</h4>
      </a>
    </div>
  );
};

export default CardBasic;
