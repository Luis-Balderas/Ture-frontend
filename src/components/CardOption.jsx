import React from 'react';
import { Link } from 'react-router-dom';
import IconHeart from '../assets/img/heart.png';
import IconStar from '../assets/img/star.png';
import '../assets/styles/components/CardOption.scss';

const CardOption = (props) => {
  const { item } = props;
  return (
    <div className='cardOption'>
      <div className='cardOption__container'>
        <Link className='cardOption__link text-reset text-decoration-none' to={`/events/${item._id}`}>
          <img src={item.images[1]} alt='Imagen de Evento' />
        </Link>
        <div className='cardOption__details'>
          <div className='cardOption__details--left'>
            <p>
              <small>Estadía opcional ({item.ocupation})</small>
            </p>
            <Link className='text-reset text-decoration-none' to={`/events/${item._id}`}>
              <h5>{item.name.slice(0, 40)}...</h5>
            </Link>
          </div>

          <figure>
            <img src={IconHeart} alt='icono de favoritos.' />
          </figure>
          <div className='cardOption__details--center'>
            <p>{item.description.slice(0, 100)}...</p>
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
              {item.price ? (
                <p>
                  <span>
                    {item.price}
                    COP
                  </span>
                  por persona
                </p>
              ) : null}
              {item.price ? (
                <p>
                  <span>
                    {item.price}
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
