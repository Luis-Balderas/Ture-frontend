import React from 'react';
import { Link } from 'react-router-dom';
import IconHeart from '../assets/img/heart.png';
import IconStar from '../assets/img/star.png';
import '../assets/styles/components/CardOption.scss';

const CardOption = ({ item }) => {
  const { id, eventUrlImage, priceLocation, pricePeople, eventDisponibility, eventTitle, eventLocale, eventDetails } = item;
  return (
    <div className='cardOption' key={id}>
      <div className='cardOption__container'>
        <Link to={`event/${id}`} className='cardOption__link'>
          <img src={eventUrlImage} alt='Imagen de Evento' />
        </Link>
        <div className='cardOption__details'>
          <div className='cardOption__details--left'>
            <p>
              <small>Estadía opcional ({eventDisponibility})</small>
            </p>
            <a href={eventLocale}>
              <h5>{eventTitle}</h5>
            </a>
          </div>
          <img src={IconHeart} alt='icono de favoritos.' />
          <div className='cardOption__details--center'>
            <p>{eventDetails}</p>
          </div>
          <div className='cardOption__details--right'>
            <div className='star-rating'>
              <figure>
                <img src={IconStar} alt='Icono de calificación' />
              </figure>
              <span> 5.0 (235) </span>
            </div>
            <div>
              {pricePeople ? (
                <h3>
                  <span>
                    {pricePeople}
                    COP
                  </span>
                  por persona
                </h3>
              ) : null}
              {priceLocation ? (
                <h3>
                  <span>
                    {priceLocation}
                    COP
                  </span>
                  (Estadía opcional)
                </h3>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className='cardOption__container'>
        <a className='cardOption__link' href={eventLocale}>
          <img src={eventUrlImage} alt='Imagen de Evento' />
        </a>
        <div className='cardOption__details'>
          <div className='cardOption__details--left'>
            <p>
              <small>Estadía opcional ({eventDisponibility})</small>
            </p>
            <a href={eventLocale}>
              <h5>{eventTitle}</h5>
            </a>
          </div>
          <img src={IconHeart} alt='icono de favoritos.' />
          <div className='cardOption__details--center'>
            <p>{eventDetails}</p>
          </div>
          <div className='cardOption__details--right'>
            <div className='star-rating'>
              <figure>
                <img src={IconStar} alt='Icono de calificación' />
              </figure>
              <span> 5.0 (235) </span>
            </div>
            <div>
              {pricePeople ? (
                <h3>
                  <span>
                    {pricePeople}
                    COP
                  </span>
                  por persona
                </h3>
              ) : null}
              {priceLocation ? (
                <h3>
                  <span>
                    {priceLocation}
                    COP
                  </span>
                  (Estadía opcional)
                </h3>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className='cardOption__container'>
        <a className='cardOption__link' href={eventLocale}>
          <img src={eventUrlImage} alt='Imagen de Evento' />
        </a>
        <div className='cardOption__details'>
          <div className='cardOption__details--left'>
            <p>
              <small>Estadía opcional ({eventDisponibility})</small>
            </p>
            <a href={eventLocale}>
              <h5>{eventTitle}</h5>
            </a>
          </div>
          <img src={IconHeart} alt='icono de favoritos.' />
          <div className='cardOption__details--center'>
            <p>{eventDetails}</p>
          </div>
          <div className='cardOption__details--right'>
            <div className='star-rating'>
              <figure>
                <img src={IconStar} alt='Icono de calificación' />
              </figure>
              <span> 5.0 (235) </span>
            </div>
            <div>
              {pricePeople ? (
                <h3>
                  <span>
                    {pricePeople}
                    COP
                  </span>
                  por persona
                </h3>
              ) : null}
              {priceLocation ? (
                <h3>
                  <span>
                    {priceLocation}
                    COP
                  </span>
                  (Estadía opcional)
                </h3>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOption;
