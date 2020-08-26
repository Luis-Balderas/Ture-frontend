import React from 'react';
import '../assets/styles/components/CardBasic.scss';

const CardBasic = ({ data }) => {
  const { eventUrlImage, eventTitle, eventLocale, eventDetails } = data;
  return (
    <section className='Superion'>
      <div className='card'>
        <a className='card__details' href={eventLocale}>
          <figure>
            <img src={eventUrlImage} alt='Imagen de Evento' />
          </figure>
          <h5 className='card__details--title'>{eventTitle}</h5>
          <p className='card__details--description'>{eventDetails}</p>
        </a>
      </div>
      <div className='card'>
        <a className='card__details' href={eventLocale}>
          <figure>
            <img src={eventUrlImage} alt='Imagen de Evento' />
          </figure>
          <h5 className='card__details--title'>{eventTitle}</h5>
          <p className='card__details--description'>{eventDetails}</p>
        </a>
      </div>
      <div className='card'>
        <a className='card__details' href={eventLocale}>
          <figure>
            <img src={eventUrlImage} alt='Imagen de Evento' />
          </figure>
          <h5 className='card__details--title'>{eventTitle}</h5>
          <p className='card__details--description'>{eventDetails}</p>
        </a>
      </div>
    </section>
  );
};

export default CardBasic;
