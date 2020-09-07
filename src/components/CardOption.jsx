import React from 'react';
import { Link } from 'react-router-dom';
import IconHeart from '../assets/img/heart.png';
import IconStar from '../assets/img/star.png';
import '../assets/styles/components/CardOption.scss';

const CardOption = ({ item }) => {
  const { eventUrlImage, priceLocation, pricePeople, eventDisponibility, eventTitle, eventDetails } = item;
  return (
    <div className='cardOption'>
      <div className='cardOption__container'>
        <Link className='cardOption__link text-reset text-decoration-none' to={`/event/${item.id}`}>
          <img src={eventUrlImage} alt='Imagen de Evento' />
        </Link>
        <div className='cardOption__details'>
          <div className='cardOption__details--left'>
            <p>
              <small>Estadía opcional ({eventDisponibility})</small>
            </p>
            <Link className='text-reset text-decoration-none' to={`/event/${item.id}`}>
              <h5>{eventTitle}</h5>
            </Link>
          </div>

          <figure>
            <img src={IconHeart} alt='icono de favoritos.' />
          </figure>
          <div className='cardOption__details--center'>
            <p>{eventDetails}</p>
          </div>
          <div className='cardOption__details--right'>
            <div className='star-rating'>
              <figure>
                <img src={IconStar} alt='Icono de calificación' />
              </figure>
              <small>
                5.0 <span>(235)</span>
              </small>
            </div>
            <div className='price'>
              {pricePeople ? (
                <p>
                  <span>
                    {pricePeople}
                    COP
                  </span>
                  por persona
                </p>
              ) : null}
              {priceLocation ? (
                <p>
                  <span>
                    {priceLocation}
                    COP
                  </span>
                  (Estadía opcional)
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOption;
