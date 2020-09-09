import React from 'react';
import mapita from '../assets/img/mapita.png';
import '../assets/styles/components/Mapita.scss';

const Mapita = () => {
  return (
    <figure className='content'>
      <img className='mapita' src={mapita} alt='Mapa con sitios de aventura' />
    </figure>
  );
};

export default Mapita;
