import React from 'react';

import '../assets/styles/components/CardOption.scss';
import IconHeart from '../assets/img/heart.png';
import IconStar from '../assets/img/star.png';

class CardOption extends React.Component {
  render() {
    const { eventUrlImage, priceLocation, pricePeople, eventDisponibility, eventTitle, eventLocale, eventDetails } = this.props;
    return (
      <div className='cardOption'>
        <a className='cardOption__link' href={eventLocale}>
          <img src={eventUrlImage} alt='Imagen de Evento' />
        </a>
        <div className='cardOption__details'>
          <div className='cardOption__details--left'>
            <p>
              Estadía opcional (
              {eventDisponibility}
              )
            </p>
            <a href={eventLocale}><h2>{eventTitle}</h2></a>
            <h3>{eventDetails}</h3>
            <span><img src={IconStar} alt='Icono de calificación' /> 5.0(235)</span>
          </div>
          <img src={IconHeart} alt='icono de favoritos.' />
          <div className='cardOption__details--right'>
            <h3>
              <span>${pricePeople} COP </span>por persona
            </h3>
            <h3><span>${priceLocation} COP</span> (Estadía opcional)
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default CardOption;
