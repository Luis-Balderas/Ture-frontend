import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/CardBasic.scss';

const CardBasic = ({ data }) => {
  const { _id, images, name, description } = data;

  return (
    <section className='Superion' key={_id}>
      <div className='card'>
        <Link className='card__details' to={`events/${_id}`}>
          <figure>
            <img src={images[0]} alt={name} />
          </figure>
          <h5 className='card__details--title'>{name}</h5>
          <p className='card__details--description'>{description}</p>
        </Link>
      </div>
    </section>
  );
};

export default CardBasic;
