import React from 'react';

import '../assets/styles/components/Mapita.scss';

import mapita from '../assets/img/mapita.png';

const Mapita = () => {
  return (
    <figure>
      <img className='mapita' src={mapita} alt='Mapa con sitios de aventura' />
    </figure>
  );
};

export default Mapita;
